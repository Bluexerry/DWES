
# Proyecto Express-Mailhog-API

El proyecto **Express-Mailhog-API** es un servidor **Express.js** diseñado para interactuar con Mailhog y gestionar correos electrónicos de prueba. A continuación, se describe su funcionamiento:

## Configuración del Entorno

- Las variables de entorno se definen en `.env` y se basan en `env.template`.
- **Docker Compose** configura y ejecuta Mailhog a través de `docker-compose.yml`.

## Inicialización del Servidor

- El punto de entrada es `index.js`, que:
  - Carga las variables de entorno y la configuración desde `config.js`.
  - Carga la aplicación Express desde `app.js`.
  - Inicia el servidor en el puerto especificado y muestra la configuración SMTP en la consola.

## Configuración de Express

- `express.js` configura el servidor Express, incluyendo:
  - Middleware para parsear JSON.
  - Rutas de la API.
- Define:
  - Una ruta raíz que da la bienvenida.
  - Manejo de errores 404 para rutas no encontradas.

## Rutas de la API

- **Rutas principales:** `apiRoutes.js` gestiona las rutas principales:
  - `GET /user/:id`: Obtiene datos de un usuario desde una API externa utilizando `apiService.js` con Axios.
- **Rutas de Email:** Las rutas relacionadas con el envío de correos se manejan mediante `emailRoutes.js`.

## Gestión de Emails

- `emailController.js` controla las solicitudes para enviar correos electrónicos:
  - Valida los datos.
  - Utiliza `emailService.js` para enviar correos.
- `emailService.js`:
  - Usa **Nodemailer** para enviar correos a través de Mailhog.
  - La configuración SMTP se define en `config.js`.

## Servicios Externos

- `apiService.js` utiliza **Axios** para realizar solicitudes a una API externa y obtener datos de usuarios.

## Scripts y Desarrollo

- Los scripts definidos en `package.json` permiten:
  - Iniciar el servidor en modo producción: `npm run start`.
  - Iniciar el servidor en modo desarrollo: `npm run dev` (usando Nodemon).

## Calidad de Código

- La configuración de **ESLint** en `eslint.config.mjs` asegura el cumplimiento de las recomendaciones de código.

## Flujo de Trabajo

1. **Iniciar Mailhog:**
   - Ejecutar `docker-compose up -d` para iniciar Mailhog.
2. **Iniciar el Servidor:**
   - Usar `npm run dev` para modo desarrollo o `npm run start` para producción.
3. **Interactuar con la API:**
   - Obtener datos de usuarios mediante `GET /api/user/:id`.
   - Enviar correos electrónicos mediante `POST /api/email/send-email`, que serán capturados por Mailhog.

Este proyecto facilita el desarrollo y prueba de funcionalidades de envío de emails y consumo de APIs externas en un entorno controlado utilizando Mailhog.