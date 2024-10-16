// Importamos la biblioteca 'axios' para realizar solicitudes HTTP
const axios = require('axios');

// Realizamos una solicitud GET a la URL especificada
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        // Si la solicitud es exitosa, se ejecuta este bloque
        console.log(response.data); // Imprimimos los datos de la respuesta en la consola
    })
    .catch(error => {
        // Si hay un error en la solicitud, se ejecuta este bloque
        console.log(error); // Imprimimos el error en la consola
    });
