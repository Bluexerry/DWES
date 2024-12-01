const config = require('./config');
const app = require('./app');

app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
});

// Pruebas:

// Desde la carpeta del directorio del proyecto
// cd ~/Desktop/DWES/22-api-files/express-api

// Prueba de subida de archivos desde la carpeta "escritorio" a "files"
// curl -X POST http://localhost:3000/api/files/upload -F "files=@escritorio/file1.txt" -F "files=@escritorio/file2.txt"
// Los archivos creados serán renombrados con un hash y se guardarán en la carpeta "files"

// Prueba de descarga de archivos desde "files" a "download"
// curl -o downloads/file1.txt http://localhost:3000/api/files/download/4bc4d6e6ffa66cb3f1e4de987b9a0867
// curl -o downloads/file2.txt http://localhost:3000/api/files/download/7ddb3f9fca03a8e57aa2ee4022986198
// Debes renombrar tras download/ (nombre del archivo en files que debes copiar) para que se descargue correctamente

// Manejo de errores
// curl -o downloads/non_existent_file.txt http://localhost:3000/api/files/download/non_existent_file
// Debe dar un error "Error: ENOENT: no such file or directory, stat 'C:\Users\jesus\Desktop\DWES\22\express-api\files\non_existent_file'"
// Ademas de crear un archivo de error en "downloads" con el mensaje de error