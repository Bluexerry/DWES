const url = 'https://jsonplaceholder.typicode.com/posts';
const data = {
    title: 'Mi Nuevo Post',
    body: 'Este es el contenido de mi nuevo post.',
    userId: 1
};

fetch(url, {
    method: 'POST', // Método de la solicitud
    headers: {
        'Content-Type': 'application/json' // Tipo de contenido
    },
    body: JSON.stringify(data) // Cuerpo de la solicitud en formato JSON
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Respuesta de la API:', data);
    })
    .catch(error => {
        console.error(`Hubo un problema con la solicitud Fetch: ${error.message}`);
    });
