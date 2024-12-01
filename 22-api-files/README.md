
# Resumen Teórico: API de Subida y Descarga de Ficheros

## 1. Subida de Ficheros (Upload)

Para manejar la subida de archivos en aplicaciones Node.js con Express se recomienda el uso de **Multer**, un middleware especializado. Este middleware:

- Facilita la gestión de datos tipo `multipart/form-data` (formato usado en formularios de subida de archivos).
- Permite configurar directorios de almacenamiento y nombres de archivos.
- Soporta validación de ficheros y cargas múltiples.

> **Nota**: Puede ser necesario ajustar el tiempo de respuesta predeterminado de Express para manejar archivos grandes.

### Recursos sobre Multer
- Documentación oficial y tutoriales básicos/avanzados.
- Ejemplos prácticos de validación y carga de imágenes.
- Aplicaciones full-stack integrando subida de archivos.

## 2. Descarga de Ficheros (Download)

Express incluye funcionalidades para enviar archivos al cliente mediante:

- `res.sendFile()`: Ideal para servir archivos estáticos.
- `res.download()`: Ofrece al usuario la descarga directa del archivo.
- Descarga múltiple: Puede implementarse empaquetando archivos en un ZIP antes de enviarlos.

### Recursos sobre Descargas
- Guías y ejemplos de uso de `sendFile` y `res.download`.
- Implementaciones para gestionar archivos ZIP.

## 3. Consideraciones Adicionales

- Implementar un middleware para ajustar el tiempo de respuesta de Express en operaciones que involucren archivos grandes.
- Integración con sistemas más complejos (como importación/exportación de datos o manipulación avanzada de archivos).