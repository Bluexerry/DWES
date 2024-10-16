// Definimos la URL del API a la que vamos a hacer la solicitud POST.
// En este caso, estamos usando jsonplaceholder, que es una API de prueba.
const url = 'https://jsonplaceholder.typicode.com/posts';

// Creamos un objeto "data" que representa la información que queremos enviar en la solicitud POST.
// Este objeto contiene tres campos: "title", "body" y "userId".
const data = {
    title: 'Mi Nuevo Post', // Título del post.
    body: 'Este es el contenido de mi nuevo post.', // Contenido del post.
    userId: 1 // ID del usuario que está creando el post.
};

// Usamos la función "fetch" para hacer la solicitud HTTP.
// Esta vez, además de la URL, pasamos un segundo argumento que es un objeto con opciones.
fetch(url, {
    method: 'POST', // Indicamos que el método HTTP es POST, lo cual significa que vamos a enviar datos.
    headers: {
        'Content-Type': 'application/json' // Establecemos el tipo de contenido como JSON.
    },
    body: JSON.stringify(data) // Convertimos el objeto "data" en una cadena JSON para enviarlo en el cuerpo de la solicitud.
})
    // Cuando obtenemos una respuesta del servidor, verificamos si fue exitosa.
    .then(response => {
        // Si la respuesta no es exitosa (response.ok es false), lanzamos un error con el estado de la respuesta.
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }
        // Si la respuesta es correcta, convertimos los datos de la respuesta en formato JSON.
        return response.json();
    })
    // Una vez que los datos han sido convertidos a JSON, los imprimimos en la consola.
    .then(data => {
        console.log('Respuesta de la API:', data);
    })
    // Si ocurre un error en algún punto de la solicitud o procesamiento, lo capturamos aquí.
    .catch(error => {
        console.error(`Hubo un problema con la solicitud Fetch: ${error.message}`);
    });
