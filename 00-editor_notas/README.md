# Editor de Notas

## Descripción

Este proyecto es una API para gestionar notas, que permite crear, editar, eliminar, listar y filtrar notas. También incluye funcionalidades de autenticación mediante JWT, paginación, ordenación, filtro y subida/descarga de archivos `.note`. La API está documentada con Swagger.

---

## Tabla de Contenidos

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Ejecución](#ejecución)
- [Rutas de la API](#rutas-de-la-api)
  - [Autenticación](#autenticación)
  - [Notas](#notas)
  - [Subida y Descarga de Archivos](#subida-y-descarga-de-archivos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [Pruebas](#pruebas)
- [Documentación Swagger](#documentación-swagger)
- [Autor](#autor)

---

## Instalación

1. Clonación del repositorio:

   ```bash
   git clone <https://github.com/Bluexerry/DWES/tree/main/00-editor_notas/7.%20Editor%20de%20notas%20con%20express%2C%20estructura%2C%20tests%2C%20orden%2C%20paginacion%2C%20filtro%2C%20subida-descarga%2C%20tokens%20y%20documentacion%20API>
   cd editor_notas
   ```

2. Instalación de dependencias:

   ```bash
   npm install
   ```

---

## Configuración

Configuración mediante archivo `.env` en la raíz del proyecto:

```env
ADMIN_NAME=mandarina
JWT_SECRET=lagarto
PORT=3000
```

---

## Ejecución

Para inciar el servidor:

```bash
npm start
```

El servidor estará disponible en [http://localhost:3000](http://localhost:3000).

---

## Rutas de la API

### Autenticación

- **POST /api/notes/login**
  - **Descripción**: Iniciar sesión para obtener un token.
  - **Cuerpo de la solicitud**:

    ```json
    {
      "name": "mandarina"
    }
    ```

  - **Respuestas**:
    - `200`: Token de autenticación.
    - `403`: Credenciales inválidas.
    - `500`: Error interno del servidor.

### Notas

- **GET /api/notes/all**
  - **Descripción**: Obtener todas las notas con opciones de paginación, filtrado y orden.
  - **Parámetros de consulta**:
    - `offset`: Offset para paginación (opcional).
    - `limit`: Límite de resultados por página (opcional).
    - `filter`: Filtra las notas por nombre (opcional).
    - `sort`: Ordena las notas por 'name' o 'createdAt'. Prefija con `-` para orden descendente (opcional).
  - **Respuestas**:
    - `200`: Lista de notas.
    - `500`: Error interno del servidor.

- **GET /api/notes/:name**
  - **Descripción**: Obtener el contenido de una nota específica.
  - **Parámetros de ruta**:
    - `name`: Nombre de la nota.
  - **Respuestas**:
    - `200`: Contenido de la nota.
    - `404`: Nota no encontrada.
    - `500`: Error interno del servidor.

- **POST /api/notes**
  - **Descripción**: Crear una nueva nota.
  - **Requiere autenticación**.
  - **Cuerpo de la solicitud**:

    ```json
    {
      "name": "nombre_de_la_nota",
      "content": "contenido_de_la_nota"
    }
    ```

  - **Respuestas**:
    - `201`: Nota creada exitosamente.
    - `400`: Datos inválidos enviados.
    - `401`: No autorizado.
    - `500`: Error interno del servidor.

- **PUT /api/notes**
  - **Descripción**: Actualizar una nota existente.
  - **Requiere autenticación**.
  - **Cuerpo de la solicitud**:

    ```json
    {
      "name": "nombre_de_la_nota",
      "content": "nuevo_contenido_de_la_nota"
    }
    ```

  - **Respuestas**:
    - `200`: Nota actualizada exitosamente.
    - `400`: Datos inválidos enviados.
    - `401`: No autorizado.
    - `404`: Nota no encontrada.
    - `500`: Error interno del servidor.

- **DELETE /api/notes/:name**
  - **Descripción**: Eliminar una nota específica.
  - **Requiere autenticación**.
  - **Parámetros de ruta**:
    - `name`: Nombre de la nota a eliminar (sin extensión `.note`).
  - **Respuestas**:
    - `200`: Nota eliminada exitosamente.
    - `401`: No autorizado.
    - `404`: Nota no encontrada.
    - `500`: Error interno del servidor.

### Subida y Descarga de Archivos

- **POST /api/notes/upload**
  - **Descripción**: Subir un archivo `.note`.
  - **Cuerpo de la solicitud**:
    - `file`: Archivo `.note` a subir.
  - **Respuestas**:
    - `200`: Archivo subido exitosamente.
    - `400`: Archivo no proporcionado.
    - `500`: Error interno del servidor.

- **GET /api/notes/download/:filename**
  - **Descripción**: Descargar un archivo `.note`.
  - **Parámetros de ruta**:
    - `filename`: Nombre del archivo a descargar.
  - **Respuestas**:
    - `200`: Archivo descargado exitosamente.
    - `404`: Archivo no encontrado.
    - `500`: Error interno del servidor.

---

## Estructura del Proyecto

```plaintext
node_modules/
notas/
src/
    controllers/
        notesController.js
    loaders/
        logger.js
    middlewares/
        auth.js
        errorHandler.js
        pagination.js
        upload.js
    models/
        note.js
    routes/
        notesRoutes.js
    utils/
        swagger.js
    app.js
    index.js
    menu.js
tests/
    jest/
        notes.test.js
        test.note
    postman/
        Notes_API_Collection.postman_collection.json
uploads/
.env
combined.log
error.log
eslint.config.mjs
package-lock.json
package.json
swagger.yamls
```

---

## Scripts Disponibles

- **start**: Inicia el servidor.
- **menu**: Ejecuta el menú interactivo para gestionar notas (a modo local).
- **crear**: Crea una nueva nota desde el menú.
- **editar**: Edita una nota existente desde el menú.
- **eliminar**: Elimina una nota desde el menú.
- **dev**: Inicia el servidor en modo desarrollo con nodemon.
- **lint**: Ejecuta ESLint para analizar el código.
- **lint:fix**: Corrige automáticamente los problemas detectados por ESLint.
- **test**: Ejecuta las pruebas con Jest.
- **postman-test**: Ejecuta las pruebas de Postman con Newman.

---

## Pruebas

Las pruebas están ubicadas en el directorio `jest`. Para ejecutar las pruebas, utilizar el siguiente comando:

```bash
npm test
```

Tambien estan disponibles mediante `postman`. Para ejecutar las pruebas, utilizar el siguiente comando:

```bash
npm run postman-test
```

---

## Documentación Swagger

La documentación de la API está disponible en [http://localhost:3000/api/notes/api-docs](http://localhost:3000/api/notes/api-docs). Debemos asegurarnos de que el servidor esté en ejecución para acceder a ella.

---

## Autor

- Jesús Manuel Vázquez Herrera

---
