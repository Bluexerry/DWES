
# Descripción del Proyecto

Este proyecto es una API RESTful construida con Express y MongoDB, que permite gestionar una base de datos de películas. Además, incluye un archivo separado para realizar consultas específicas a la base de datos de MongoDB.

## Funciones de la API con Express

La API está definida en `index.js` y utiliza las rutas definidas en `movieRoutes.js`, que a su vez llaman a las funciones del controlador en `movieControllers.js`.

## Rutas y Funciones de la API

### Obtener todas las películas

**Ruta:** `GET /api/movies`  
**Función:** `getAllMovies`  
**Descripción:** Obtiene hasta 10 películas con campos específicos (`_id`, `title`, `genres`, `cast`, `year`).

### Buscar películas por título

**Ruta:** `GET /api/movies/search`  
**Función:** `searchMovies`  
**Descripción:** Busca películas cuyo título coincida con el parámetro de consulta `title`, insensible a mayúsculas.

### Obtener películas por género

**Ruta:** `GET /api/movies/genre/:genre`  
**Función:** `getMoviesByGenre`  
**Descripción:** Obtiene películas que pertenecen al género especificado en el parámetro `genre`.

### Obtener películas por miembro del reparto

**Ruta:** `GET /api/movies/cast/:castMember`  
**Función:** `getMoviesByCast`  
**Descripción:** Obtiene películas en las que participa el miembro del reparto especificado en el parámetro `castMember`.

### Obtener una película por ID

**Ruta:** `GET /api/movies/:id`  
**Función:** `getMovieById`  
**Descripción:** Obtiene una película específica por su ID.

### Crear una nueva película

**Ruta:** `POST /api/movies`  
**Función:** `createMovie`  
**Descripción:** Crea una nueva película con los datos proporcionados en el cuerpo de la solicitud.

### Actualizar una película

**Ruta:** `PUT /api/movies/:id`  
**Función:** `updateMovie`  
**Descripción:** Actualiza una película existente por su ID con los datos proporcionados en el cuerpo de la solicitud.

### Eliminar una película

**Ruta:** `DELETE /api/movies/:id`  
**Función:** `deleteMovie`  
**Descripción:** Elimina una película específica por su ID.

## Funciones del archivo ejercicio.js

El archivo `ejercicio.js` se utiliza para realizar consultas específicas a la base de datos de MongoDB, separadas de la API principal.

### Funciones y Consultas

#### Recoger un comentario y los datos de una película específica

**Función:** `getCommentWithMovie`  
**Descripción:** Obtiene un comentario y los datos de la película referenciada, incluyendo los campos `title`, `genres`, `year`, `rated`, y `type`.

#### Recoger todos los comentarios de una película específica

**Función:** `getCommentsForMovie`  
**Descripción:** Obtiene todos los comentarios asociados a una película específica, utilizando un pipeline de agregación para mostrar información específica de la película.

#### Ejecutar las consultas y cerrar la conexión

**Función:** `runQueries`  
**Descripción:** Ejecuta las funciones `getCommentWithMovie` y `getCommentsForMovie` para una película específica y cierra la conexión a la base de datos.

## Conclusión

Este proyecto proporciona una API RESTful para gestionar una base de datos de películas, permitiendo realizar operaciones CRUD y búsquedas específicas. Además, incluye un archivo separado para realizar consultas específicas a la base de datos de MongoDB, demostrando cómo utilizar `populate` y `aggregate` para obtener datos relacionados.
