
# Resumen del Proyecto: Subida y Descarga de Ficheros con Express y Multer

## Introducción

En este proyecto, hemos creado un servidor utilizando **Express** y **Multer** para manejar la subida y descarga de ficheros. 
La estructura del proyecto sigue una organización modular que facilita la escalabilidad y el mantenimiento del código.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
express-api/
├── .env
├── env.template
├── escritorio/
│   ├── file1.txt
│   └── file2.txt
├── files/
├── downloads/
├── package.json
├── README.md
├── src/
│   ├── app.js
│   ├── config.js
│   ├── controllers/
│   │   └── files.js
│   ├── index.js
│   ├── loaders/
│   │   ├── express.js
│   │   └── index.js
│   ├── models/
│   │   └── index.js
│   ├── routes/
│   │   ├── files.js
│   │   └── index.js
│   ├── services/
│   │   └── index.js
│   └── utils/
│       └── index.js
└── test/
    ├── controllers/
    │   └── files.test.js
    ├── loaders/
    │   └── express.test.js
    ├── routes/
    │   └── files.test.js
    ├── services/
    └── sonar.js
```

## Archivos Clave y su Contenido

- **`src/index.js`**: Punto de entrada de la aplicación. Inicia el servidor Express.
- **`src/app.js`**: Configura la aplicación Express y carga los middlewares necesarios.
- **`src/config.js`**: Centraliza la configuración de la aplicación.
- **`src/loaders/index.js`**: Carga los servicios necesarios al iniciar la aplicación.
- **`src/loaders/express.js`**: Configura los middlewares de Express.
- **`src/routes/index.js`**: Define las rutas principales de la aplicación.
- **`src/routes/files.js`**: Define las rutas específicas para la subida y descarga de archivos.
- **`src/controllers/files.js`**: Contiene la lógica para manejar la subida y descarga de archivos.

## Teoría

### Subida de Archivos

Para manejar la subida de archivos, utilizamos el middleware **Multer**. Este permite procesar datos de tipo `multipart/form-data`, 
necesarios para subir archivos desde el cliente al servidor. Ejemplo básico:

```javascript
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post("/upload_files", upload.array("files"), (req, res) => {
  console.log(req.files);
  res.json({ message: "Archivos subidos correctamente" });
});
```

### Descarga de Archivos

La descarga de archivos se realiza utilizando el método `res.download()` o `res.sendFile()` de Express, 
permitiendo enviar archivos almacenados en el servidor al cliente.

## Pasos para Realizar las Pruebas

1. **Iniciar el servidor**: Ejecuta el siguiente comando desde la raíz del proyecto:
   ```bash
   npm start
   ```

2. **Subida de archivos**:
   - Sube `file1.txt` y `file2.txt` desde la carpeta `escritorio` al servidor usando `curl`:
     ```bash
     curl -X POST -F "files=@escritorio/file1.txt" -F "files=@escritorio/file2.txt" http://localhost:3000/upload_files
     ```
   - Verifica que los archivos estén en la carpeta `files` del proyecto.

3. **Descarga de archivos**:
   - Descarga los archivos subidos a la carpeta `downloads` usando `curl`:
     ```bash
     curl -o downloads/file1.txt http://localhost:3000/download/uploaded_file1
     curl -o downloads/file2.txt http://localhost:3000/download/uploaded_file2
     ```

4. **Verificación**: Confirma que el contenido de los archivos descargados coincida con los originales.

## Pruebas Adicionales

- **Subida de múltiples archivos**: Prueba cargando varios archivos a la vez.
- **Manejo de errores**: Intenta descargar un archivo inexistente para verificar el manejo de errores.

## Conclusión

Este proyecto demuestra cómo implementar un servidor para la gestión de archivos con **Express** y **Multer**, 
cubriendo tanto la subida como la descarga de ficheros. Además, se aplicaron prácticas modulares para facilitar 
su mantenimiento y escalabilidad.