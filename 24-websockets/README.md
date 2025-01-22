
# Websockets y Socket.IO

## Introducción

Este documento proporciona una guía sobre el despliegue de servidores WebSocket utilizando Node.js y la biblioteca Socket.IO. Se explican los conceptos teóricos fundamentales, junto con ejemplos prácticos para implementar comunicación en tiempo real entre cliente y servidor.

## Teoría

### WebSockets

- **WebSockets** es un protocolo de comunicación que permite la interacción en tiempo real entre un cliente y un servidor a través de un único canal persistente.
- Es eficiente para aplicaciones que requieren actualizaciones rápidas, como chats, videojuegos y sistemas de notificaciones.

### Socket.IO

- Biblioteca que extiende WebSockets, proporcionando una API más sencilla y funcionalidades adicionales, como:
  - **Emisión de eventos** (emit).
  - **Recepción de eventos** (on).
  - Gestión de reconexiones automáticas.
  - Soporte para navegadores más antiguos.

## Ejemplos

### Configuración del Servidor

#### Servidor Nativo con WebSockets

```javascript
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, { /* opciones */ });

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado");
});

httpServer.listen(3000);
```

#### Servidor con Express y Socket.IO

```javascript
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = app.listen(3000, (err) => {
  if (err) {
    console.log("Error al iniciar el servidor");
    return;
  }
  console.log("Servidor HTTP activo en el puerto 3000");
});

const io = socketio(server);

io.on("connection", (socket) => {
  console.log(`Cliente conectado: ${socket.handshake.address}`);

  socket.on("disconnect", () => {
    console.log(`Cliente desconectado: ${socket.handshake.address}`);
  });
});
```

### Ejemplo de Comunicación entre Servidor y Cliente

#### Cliente

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de Chat</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.4/socket.io.js"></script>
  <script>
    window.onload = function() {
      const ul = document.getElementById('events');
      const socket = io('ws://127.0.0.1:3000');

      socket.on('connect', () => {
        const item = document.createElement('li');
        item.innerText = 'Conectado al servidor';
        ul.appendChild(item);
      });
    };
  </script>
</head>
<body>
  <ul id="events"></ul>
</body>
</html>
```

#### Servidor

```javascript
const express = require('express');
const socketio = require('socket.io');

const app = express();
app.use(express.static('public'));

const server = app.listen(3000, (err) => {
  if (err) {
    console.log("Error al iniciar el servidor");
    return;
  }
  console.log("Servidor HTTP activo en el puerto 3000");
});

const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log(`Cliente conectado desde: ${socket.handshake.address}`);
  socket.on("disconnect", () => {
    console.log(`Cliente desconectado: ${socket.handshake.address}`);
  });
});
```

## Conclusión

Esta guía proporciona los fundamentos para iniciar el desarrollo de aplicaciones en tiempo real utilizando WebSockets y Socket.IO. Ofrece ejemplos básicos de configuración y comunicación entre cliente y servidor que pueden ampliarse según los requisitos específicos del proyecto.
