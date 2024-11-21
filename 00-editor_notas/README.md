# Proyecto Editor de Notas

Este proyecto contiene tres versiones de un editor de notas, cada una con diferentes características y estructura.

## 1. Editor de notas sin express

Esta versión es una aplicación de consola en Node.js que permite crear, editar y eliminar notas desde la terminal.

### Estructura del Proyecto

- **editorNotas.js**: Script principal que maneja la creación, edición y eliminación de notas. Implementa un menú interactivo en la terminal y gestiona el flujo de las operaciones de notas.
- **package.json**: Archivo de configuración de npm que define scripts útiles como `start`, `dev`, y `lint`, y las dependencias del proyecto.
- **notas/**: Carpeta donde se almacenan las notas creadas por el usuario.

### Comandos npm

- `npm start`: Inicia la aplicación.
- `npm run dev`: Inicia la aplicación con nodemon para desarrollo en tiempo real.
- `npm run lint`: Ejecuta ESLint para asegurar que el código sigue las mejores prácticas.

## 2. Editor de notas con express y estructura de código

Esta versión añade un servidor Express para manejar las notas a través de una API REST y sigue una estructura de carpetas más organizada.

### Estructura del Proyecto

- **src/**: Carpeta principal del código fuente.
  - **app.js**: Configuración principal de la aplicación Express.
  - **controllers/**: Controladores que manejan la lógica de las rutas.
  - **routes/**: Definición de las rutas de la API.
  - **loaders/**: Configuración de inicialización de la aplicación.
  - **index.js**: Punto de entrada de la aplicación.
- **package.json**: Archivo de configuración de npm con scripts y dependencias.

### Comandos npm

- `npm start`: Inicia el servidor.
- `npm run dev`: Inicia el servidor con nodemon para desarrollo en tiempo real.
- `npm run lint`: Ejecuta ESLint para asegurar que el código sigue las mejores prácticas.

## 3. Editor de notas con express, estructura y test de Postman

Esta versión incluye pruebas automatizadas con Jest y Supertest, así como pruebas de integración con Postman y Newman.

### Estructura del Proyecto

- **src/**: Carpeta principal del código fuente.
  - **app.js**: Configuración principal de la aplicación Express.
  - **controllers/**: Controladores que manejan la lógica de las rutas.
  - **routes/**: Definición de las rutas de la API.
  - **loaders/**: Configuración de inicialización de la aplicación.
  - **middlewares/**: Middlewares personalizados para manejo de errores y otras funcionalidades.
  - **models/**: Modelos de datos.
  - **index.js**: Punto de entrada de la aplicación.
- **tests/**: Carpeta que contiene las pruebas.
  - **postman/**: Colección de pruebas de Postman.
- **package.json**: Archivo de configuración de npm con scripts y dependencias.

### Comandos npm

- `npm start`: Inicia el servidor.
- `npm run dev`: Inicia el servidor con nodemon para desarrollo en tiempo real.
- `npm run lint`: Ejecuta ESLint para asegurar que el código sigue las mejores prácticas.
- `npm test`: Ejecuta las pruebas automatizadas con Jest.
- `npm run postman-test`: Ejecuta las pruebas de Postman utilizando Newman.

## Requisitos

Para ejecutar cualquiera de las versiones del proyecto, asegúrate de tener instalados los siguientes programas:

- **Node.js**: Necesario para ejecutar el código JavaScript.
- **Nodemon**: Para desarrollo en tiempo real (opcional).
- **ESLint**: Para garantizar que el código siga las convenciones definidas.
- **Newman**: Para ejecutar las pruebas de Postman (solo en la tercera versión).

---
Desarrollado con ❤️ por Jesús.
