
# Proyecto de API de Usuarios

Este proyecto es una API de usuarios construida con Express.js. La API permite obtener una lista de usuarios y crear nuevos usuarios. Además, incluye pruebas funcionales utilizando Postman y Newman.

## Estructura del Proyecto

### Archivos Principales

- **src/app.js**: Configuración principal de la aplicación Express.
- **src/index.js**: Punto de entrada de la aplicación.
- **src/controllers/userController.js**: Controlador que maneja las operaciones de usuarios.
- **src/routes/userRoutes.js**: Rutas de la API de usuarios.
- **test/postman/Development.postman_environment.json**: Configuración del entorno de desarrollo para Postman.
- **test/postman/User_API_Collection.postman_collection.json**: Colección de pruebas de la API de usuarios en Postman.
- **package.json**: Archivo de configuración de npm con scripts y dependencias.

## Instalación

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.

## Uso

1. Inicia el servidor con `node src/index.js`.
2. La API estará disponible en `http://localhost:3000`.

## Endpoints

- **GET /users**: Obtiene la lista de usuarios.
- **POST /users**: Crea un nuevo usuario.

## Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```sh
npm test
```

Esto ejecutará las pruebas definidas en la colección de Postman utilizando Newman.

## Configuración de ESLint

El proyecto incluye una configuración básica de ESLint en `eslint.config.mjs` para mantener la calidad del código.

```javascript
import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];
```

## Variables de Entorno

El archivo `.env` contiene las variables de entorno necesarias para la configuración del proyecto. Utiliza `env.template` como referencia para crear tu propio archivo `.env`.
