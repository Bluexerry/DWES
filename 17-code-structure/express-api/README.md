
# Proyecto Express: Ruta de Ping

Este proyecto implementa una API básica utilizando Express para responder a una solicitud de "ping" y verificar el estado del servidor. 

## Estructura del Proyecto

La estructura del proyecto sigue un enfoque modular, separando controladores, rutas, cargadores y configuraciones de manera organizada.

```plaintext
├── src
│   ├── app.js               # Configuración principal de la aplicación
│   ├── config.js            # Configuración de entorno (puerto)
│   ├── controllers          # Controladores de la lógica de la aplicación
│   │   └── pingController.js # Controlador para manejar la lógica de "ping"
│   ├── loaders
│   │   └── expressLoader.js  # Configuración de middlewares y rutas
│   ├── routes
│   │   └── pingRoute.js      # Definición de la ruta "ping"
│   ├── test
│   │   └── routes
│   │       └── pingTest.test.js # Pruebas para la ruta "ping"
│   ├── .env                 # Variables de entorno (ej. PORT)
│   ├── index.js             # Inicio del servidor
│   └── eslint.config.mjs    # Configuración de ESLint
├── .env.template            # Plantilla del archivo .env
├── package.json             # Dependencias y scripts del proyecto
└── README.md                # Descripción del proyecto
```

## Descripción de los Archivos Principales

- **pingController.js**: Controlador que maneja la respuesta a la solicitud de "ping" enviando un mensaje "pong" como respuesta.
- **expressLoader.js**: Cargador que configura los middlewares (como CORS) y rutas de la aplicación.
- **pingRoute.js**: Define la ruta `/api/ping` y la enlaza con el controlador `pingController`.
- **config.js**: Archivo de configuración que utiliza variables de entorno para definir el puerto.
- **index.js**: Archivo principal que inicializa el servidor y lo pone a escuchar en el puerto configurado.

## Instalación

1. Clona el repositorio.
2. Instala las dependencias con:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en el directorio `src` basado en `.env.template` y define el puerto:

   ```env
   PORT=3000
   ```

## Uso

Para iniciar el servidor, ejecuta:

```bash
npm start
```

Esto levantará el servidor en el puerto configurado en `.env`. Puedes verificar el estado del servidor con:

```bash
curl http://localhost:3000/api/ping
```

La respuesta será:

```plaintext
pong
```

## Pruebas

Las pruebas para la ruta `/api/ping` están definidas usando Jest y Supertest. Para ejecutar las pruebas:

```bash
npm test
```

Esto realiza una solicitud GET a `/api/ping` y verifica que la respuesta sea `pong` con un código de estado 200.

## Dependencias

- **Express**: Framework de Node.js para construir aplicaciones web.
- **dotenv**: Permite manejar variables de entorno desde un archivo `.env`.
- **CORS**: Middleware para permitir solicitudes entre orígenes diferentes.
- **Jest** y **Supertest**: Librerías para realizar pruebas unitarias e integración.

## Licencia

Este proyecto está licenciado bajo ISC.
