// src/index.js
const http = require('http');
const app = require('./app');
const config = require('./config');
const { Server } = require('socket.io');

const PORT = config.port || 3000;

// Crear el servidor HTTP
const server = http.createServer(app);

// Configurar Socket.IO con el servidor HTTP
const io = new Server(server, {
  cors: {
    origin: '*', // Ajusta esto según tus necesidades de CORS
  },
});

// Objeto para mapear socket IDs con nombres de usuario
const users = {};

// Estado de la votación
let voteInProgress = false;
let voteData = {
  targetUserId: null,
  votes: {}, // { socket.id: 'yes' | 'no' }
};

// Emitir la lista actualizada de usuarios a todos los clientes en una sala específica
const emitUserList = (roomId) => {
  const userList = Object.values(users)
    .filter((user) => {
      const socket = io.sockets.sockets.get(user.socketId);
      return socket && socket.rooms.has(`room-${roomId}`);
    })
    .map((user) => user.username);
  io.to(`room-${roomId}`).emit('user list', userList);
};

// Emitir el estado de la votación a todos los clientes en una sala específica
const emitVoteState = (roomId) => {
  if (voteInProgress) {
    const targetUsername = users[voteData.targetUserId]?.username || 'Desconocido';
    const totalUsers = Object.keys(users).length;
    const votesCount = Object.values(voteData.votes).length;
    io.to(`room-${roomId}`).emit('vote state', {
      inProgress: true,
      target: targetUsername,
      votes: votesCount,
      total: totalUsers,
    });
  } else {
    io.to(`room-${roomId}`).emit('vote state', { inProgress: false });
  }
};

io.on('connection', (socket) => {
  console.log('Un usuario se ha conectado');

  // Manejar el ingreso del nombre de usuario y unirse a una sala
  socket.on('join room', ({ roomId, username }) => {
    if (!roomId || !username) {
      socket.emit('message', 'Room ID y Username son requeridos para unirse a una sala.');
      return;
    }

    socket.join(`room-${roomId}`);
    users[socket.id] = { username, socketId: socket.id };
    console.log(`${username} se unió a room-${roomId}`);

    // Notificar a otros usuarios en la sala
    socket.to(`room-${roomId}`).emit('message', `${username} se ha unido a la sala.`);

    // Emitir la lista actualizada de usuarios
    emitUserList(roomId);

    // Emitir el estado actual de la votación
    emitVoteState(roomId);
  });

  // Manejar dejar una sala específica
  socket.on('leave room', (roomId) => {
    socket.leave(`room-${roomId}`);
    const username = users[socket.id]?.username || 'Un usuario';
    console.log(`${username} dejó room-${roomId}`);

    // Notificar a otros usuarios en la sala
    socket.to(`room-${roomId}`).emit('message', `${username} ha dejado la sala.`);

    // Emitir la lista actualizada de usuarios
    emitUserList(roomId);
  });

  // Manejar mensajes de chat enviados a una sala específica
  socket.on('chat message', ({ roomId, username, message }) => {
    if (!roomId || !message || !username) {
      socket.emit('message', 'Room ID, Username y Message son requeridos para enviar un mensaje.');
      return;
    }

    // Emitir el mensaje a todos en la sala con el nombre del usuario
    io.to(`room-${roomId}`).emit('chat message', { username, message });
  });

  // Manejar inicio de votación
  socket.on('start vote', () => {
    if (voteInProgress) {
      socket.emit('message', 'Ya hay una votación en progreso.');
      return;
    }

    // Solo permitir que el usuario que inicie la votación lo haga
    voteInProgress = true;
    voteData = {
      targetUserId: null,
      votes: {},
    };

    // Emitir inicio de votación a todas las salas del usuario actual
    const userRooms = Array.from(socket.rooms).filter(room => room.startsWith('room-'));
    userRooms.forEach((room) => {
      io.to(room).emit('start vote');
      emitVoteState(room);
    });
  });

  // Manejar selección del usuario a expulsar
  socket.on('select target', (targetUsername) => {
    if (!voteInProgress) {
      socket.emit('message', 'No hay una votación en progreso.');
      return;
    }

    // Encontrar el socket.id del usuario objetivo
    const targetEntry = Object.entries(users).find(([id, user]) => user.username === targetUsername);
    if (!targetEntry) {
      socket.emit('message', 'Usuario no encontrado.');
      return;
    }

    voteData.targetUserId = targetEntry[0];
    voteData.votes = {};

    // Notificar a todos el inicio de la votación con el objetivo seleccionado
    io.emit('vote started', { target: targetUsername });

    // Emitir el estado de la votación a todas las salas del usuario actual
    const userRooms = Array.from(socket.rooms).filter(room => room.startsWith('room-'));
    userRooms.forEach((room) => {
      emitVoteState(room);
    });
  });

  // Manejar votos de los usuarios
  socket.on('cast vote', (vote) => {
    if (!voteInProgress || !voteData.targetUserId) {
      socket.emit('message', 'No hay una votación en progreso.');
      return;
    }

    if (!['yes', 'no'].includes(vote)) {
      socket.emit('message', 'Voto inválido.');
      return;
    }

    voteData.votes[socket.id] = vote;
    io.emit('vote updated', { votes: Object.values(voteData.votes).length });

    // Emitir el estado de la votación a todas las salas
    const userRooms = Array.from(socket.rooms).filter(room => room.startsWith('room-'));
    userRooms.forEach((room) => {
      emitVoteState(room);
    });

    // Verificar si todos han votado
    const totalUsers = Object.keys(users).length;
    const votesCount = Object.values(voteData.votes).length;

    if (votesCount >= totalUsers) {
      // Determinar si todos votaron 'yes'
      const allYes = Object.values(voteData.votes).every((v) => v === 'yes');
      if (allYes) {
        const kickedUsername = users[voteData.targetUserId].username;
        console.log(`${kickedUsername} ha sido expulsado por votación.`);

        // Notificar a todos
        io.emit('user kicked', { username: kickedUsername });

        // Desconectar al usuario expulsado
        const kickedSocket = io.sockets.sockets.get(voteData.targetUserId);
        if (kickedSocket) {
          kickedSocket.emit('message', 'Has sido expulsado del chat por votación.');
          kickedSocket.disconnect(true);
        }
      } else {
        io.emit('message', 'La votación no ha alcanzado el consenso para expulsar al usuario.');
      }

      // Resetear el estado de la votación
      voteInProgress = false;
      voteData = {
        targetUserId: null,
        votes: {},
      };

      // Emitir el estado de la votación a todas las salas
      userRooms.forEach((room) => {
        emitVoteState(room);
      });
    }
  });

  // Manejar desconexión
  socket.on('disconnect', () => {
    const username = users[socket.id]?.username || 'Un usuario';
    console.log(`${username} se ha desconectado`);

    // Notificar a todas las salas a las que el usuario estaba unido
    const rooms = Array.from(socket.rooms).filter(room => room.startsWith('room-'));
    rooms.forEach((room) => {
      socket.to(room).emit('message', `${username} se ha desconectado.`);
      emitUserList(room);
      emitVoteState(room);
    });

    // Eliminar el usuario del objeto de usuarios
    delete users[socket.id];

    // Emitir la lista actualizada de usuarios
    rooms.forEach((room) => {
      emitUserList(room);
      emitVoteState(room);
    });
  });
});

// Iniciar el servidor
server.listen(PORT, () => {
  console.log(`Servidor HTTP activo en el puerto ${PORT}`);
});