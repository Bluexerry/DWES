
# Resumen del Proyecto

El proyecto **multi-room-chat** es una aplicación de chat multi-sala desarrollada con Express y Socket.IO. Permite a los usuarios conectarse, unirse a diferentes salas de chat, enviar y recibir mensajes en tiempo real, y realizar votaciones para expulsar a otros usuarios de una sala.

## Estructura del Proyecto

### Frontend:

- **index.html**: Interfaz de usuario principal para el chat en tiempo real.
- **error.html**: Página mostrada cuando un usuario es expulsado o ocurre un error.
- **Estilos y Scripts**: Incluye estilos CSS y scripts JavaScript integrados para manejar la interacción del usuario y la comunicación con el servidor.

### Backend:

- **index.js**: Configura el servidor HTTP y la instancia de Socket.IO para manejar la comunicación en tiempo real.
- **app.js**: Inicializa la aplicación Express.
- **express.js**: Configura middlewares de Express, rutas API y manejo de errores.
- **index.js**: Define las rutas de la API para usuarios y salas.
- **users.js**: Controlador para manejar las solicitudes relacionadas con usuarios.
- **rooms.js**: Controlador para manejar las solicitudes relacionadas con salas.
- **Room.js**: Modelo que define la estructura de una sala.
- **rooms.js**: Servicios para gestionar las salas, incluyendo la creación y obtención de salas.
- **index.js**: Funciones utilitarias y helpers.

### Configuración:

- **package.json**: Define las dependencias, scripts y metadatos del proyecto.
- **eslint.config.mjs**: Configuración de ESLint para mantener la calidad del código.
- **.env** y **env.template**: Archivos para gestionar variables de entorno.

## Funcionalidades Principales

- **Conexión en Tiempo Real**: Utiliza Socket.IO para permitir la comunicación instantánea entre usuarios.
- **Gestión de Salas**: Los usuarios pueden unirse a diferentes salas de chat predefinidas o crear nuevas.
- **Envío de Mensajes**: Los usuarios pueden enviar mensajes de texto e incluir URLs de imágenes que se cargarán automáticamente.
- **Sistema de Votación**: Permite a los usuarios iniciar votaciones para expulsar a un miembro de la sala. Si la mayoría vota "sí", el usuario es expulsado.
- **Interfaz Responsiva**: Diseño adaptativo que se ajusta a diferentes tamaños de pantalla para una mejor experiencia de usuario.

## Dependencias Clave

- **Express**: Framework web para Node.js que facilita la creación de servidores y APIs.
- **Socket.IO**: Biblioteca que permite la comunicación bidireccional en tiempo real entre el cliente y el servidor.
- **Nodemon**: Herramienta de desarrollo que reinicia automáticamente el servidor cuando detecta cambios en el código.
- **ESLint**: Herramienta de análisis de código para identificar y reportar patrones problemáticos en el código JavaScript.

## Scripts Disponibles

- `npm start`: Inicia el servidor en modo producción.
- `npm run dev`: Inicia el servidor en modo de desarrollo utilizando Nodemon para reinicios automáticos.

Este proyecto proporciona una base sólida para una aplicación de chat multi-sala con funcionalidades avanzadas como votaciones y gestión dinámica de usuarios, todo ello respaldado por una estructura modular y mantenible.
