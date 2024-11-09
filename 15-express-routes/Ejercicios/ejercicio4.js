// Importamos el módulo 'express' para poder usarlo y crear el servidor
const express = require('express');

// Creamos una instancia de Express, que es la aplicación que manejará las rutas
const app = express();

// Definimos el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Habilitamos el middleware express.json() para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Ruta /body que muestra los parámetros de la consulta (query params) en una lista HTML
app.get('/body', (req, res) => {
    // Obtenemos los parámetros de la consulta (query params) de la URL
    const params = req.query;

    // Creamos una lista HTML donde cada elemento contiene una clave y su valor
    let htmlList = '<ul>';
    // Iteramos sobre cada parámetro en 'params' y lo agregamos a la lista HTML
    for (const key in params) {
        htmlList += `<li><strong>${key}</strong>: ${params[key]}</li>`;
    }
    // Cerramos la lista HTML
    htmlList += '</ul>';

    // Enviamos la lista HTML como respuesta al cliente
    res.send(htmlList);
});

// Iniciamos el servidor para que escuche en el puerto 3000
app.listen(PORT, () => {
    // Imprimimos un mensaje en la consola cuando el servidor esté en ejecución
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});



//Pruebas:
// curl "http://localhost:3000/body?param1=value1&param2=value2"
//http://localhost:3000/body?param1=value1&param2=value2

//Respuestas:
//<ul><li><strong>param1</strong>: value1</li><li><strong>param2</strong>: value2</li></ul>
/*param1: value1
param2: value2*/
