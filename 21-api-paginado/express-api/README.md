# API de Paginación con Express

Este proyecto es una API construida con Express que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una colección de elementos. Además, incluye funcionalidad de paginación para manejar grandes conjuntos de datos de manera eficiente.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

Para instalar las dependencias necesarias, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm install
```

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`.

## Endpoints

### Obtener todos los elementos

```http
GET /api/items
```

### Obtener un elemento por ID

```http
GET /api/items/:id
```

### Crear un nuevo elemento

```http
POST /api/items
```

### Actualizar un elemento

```http
PUT /api/items/:id
```

### Eliminar un elemento

```http
DELETE /api/items/:id
```

## Paginación

Para obtener una lista paginada de elementos, puedes usar los siguientes parámetros de consulta:

- `page`: El número de página que deseas obtener.
- `limit`: El número de elementos por página.

Ejemplo:

```http
GET /api/items?page=1&limit=10
```

## Ejemplos de uso

### Obtener todos los elementos

```bash
curl -X GET "http://localhost:3000/api/items"
```

### Obtener un elemento por ID

```bash
curl -X GET "http://localhost:3000/api/items/1"
```

### Crear un nuevo elemento

```bash
curl -X POST "http://localhost:3000/api/items" -H "Content-Type: application/json" -d '{"name": "Nuevo Item"}'
```

### Actualizar un elemento

```bash
curl -X PUT "http://localhost:3000/api/items/1" -H "Content-Type: application/json" -d '{"name": "Item Actualizado"}'
```

### Eliminar un elemento

```bash
curl -X DELETE "http://localhost:3000/api/items/1"
```

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT.

# Nombre del Proyecto

## Descripción

Una breve descripción del proyecto.

## Instalación

Clona el repositorio e instala las dependencias:

```bash
npm install
# API de Paginación con Express

Este proyecto es una API construida con Express que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una colección de elementos. Además, incluye funcionalidad de paginación para manejar grandes conjuntos de datos de manera eficiente.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

Para instalar las dependencias necesarias, ejecuta el siguiente comando en la raíz del proyecto:

```bash
npm start
```

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`.

## Endpoints

### Obtener todos los elementos

```http
GET /api/items
```

### Obtener un elemento por ID

```http
GET /api/items/:id
```

### Crear un nuevo elemento

```http
POST /api/items
```

### Actualizar un elemento

```http
PUT /api/items/:id
```

### Eliminar un elemento

```http
DELETE /api/items/:id
```

## Paginación

Para obtener una lista paginada de elementos, puedes usar los siguientes parámetros de consulta:

- `page`: El número de página que deseas obtener.
- `limit`: El número de elementos por página.

Ejemplo:

```http
GET /api/items?page=1&limit=10
```

## Ejemplos de uso

### Obtener todos los elementos

```bash
curl -X GET "http://localhost:3000/api/items"
```

### Obtener un elemento por ID

```bash
curl -X GET "http://localhost:3000/api/items/1"
```

### Crear un nuevo elemento

```bash
curl -X POST "http://localhost:3000/api/items" -H "Content-Type: application/json" -d '{"name": "Nuevo Item"}'
```

### Actualizar un elemento

```bash
curl -X PUT "http://localhost:3000/api/items/1" -H "Content-Type: application/json" -d '{"name": "Item Actualizado"}'
```

### Eliminar un elemento

```bash
curl -X DELETE "http://localhost:3000/api/items/1"
```

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT.