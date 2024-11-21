
# Proyecto Editor de Notas con Express

## Descripción
Este proyecto consiste en la creación de un servidor con rutas para un programa de notas utilizando Express. El proyecto sigue buenas prácticas, incluye un logger configurado, control de errores, estructura de carpetas MVC, y pruebas con una cobertura superior al 80%.

## Estructura de Carpetas

```plaintext
project-root
|-- src
|   |-- controllers
|   |   `-- notesController.js
|   |-- loaders
|   |   `-- logger.js
|   |-- middlewares
|   |   `-- errorHandler.js
|   |-- models
|   |   `-- note.js
|   |-- routes
|   |   `-- notesRoutes.js
|   |-- app.js
|   |-- index.js
|-- tests
|   |-- postman
|       |-- Notas_API.postman_collection.json
|-- package.json
|-- .env
```

## Instalación de Dependencias
Ejecuta el siguiente comando para instalar las dependencias necesarias:
```bash
npm install
```

## Ejecución del Servidor
Para iniciar el servidor, usa el comando:
```bash
npm start
```

## Pruebas Automatizadas

### Instalación de Dependencias de Desarrollo
Asegúrate de instalar las herramientas para pruebas automatizadas:
```bash
npm install --save-dev jest supertest
```

### Ejecución de Pruebas
Ejecuta las pruebas con:
```bash
npm test
```

## Pruebas Manuales con curl

### Crear una Nueva Nota
```bash
curl -X POST http://localhost:3000/api/notes -H "Content-Type: application/json" -d '{"name": "test", "content": "This is a test note"}'
```

### Obtener Todas las Notas
```bash
curl http://localhost:3000/api/notes
```

### Obtener el Contenido de una Nota
```bash
curl http://localhost:3000/api/notes/test
```

### Eliminar una Nota
```bash
curl -X DELETE http://localhost:3000/api/notes/test
```

## Pruebas con Postman

### Crear y Exportar la Colección
1. Crear una nueva colección en Postman.
2. Agregar solicitudes para cada una de las rutas de la API.
3. Exportar la colección en formato `Collection v2.1`.
4. Guardar el archivo exportado en `tests/postman/Notas_API.postman_collection.json`.

### Ejecutar Pruebas de Postman con Newman

#### Instalación de Newman
Asegúrate de instalar Newman globalmente:
```bash
npm install -g newman
```

#### Agregar Script en `package.json`
Incluye el siguiente script en el archivo `package.json`:
```json
{
  "scripts": {
    "start": "node src/index.js",
    "test": "jest",
    "postman-test": "newman run tests/postman/Notas_API.postman_collection.json"
  }
}
```

#### Ejecutar Pruebas de Postman
Ejecuta las pruebas con:
```bash
npm run postman-test
```

## Verificación de Resultados
1. **Pruebas Automatizadas**: Asegúrate de que todas las pruebas pasen sin errores.
2. **Pruebas Manuales**: Verifica que las respuestas sean correctas y que las operaciones (crear, obtener, eliminar) funcionen como se espera.
3. **Pruebas de Postman**: Ejecuta las pruebas de Postman utilizando Newman y verifica los resultados en la terminal.

## Notas Adicionales
- Asegúrate de configurar correctamente el archivo `.env` con las variables de entorno necesarias para el funcionamiento del proyecto.
- Puedes utilizar herramientas como [nodemon](https://www.npmjs.com/package/nodemon) durante el desarrollo para reiniciar automáticamente el servidor al realizar cambios.

---
Desarrollado con ❤️ por Jesús.
