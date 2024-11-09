// Definimos la URL de donde vamos a obtener los datos (en este caso, un API de prueba llamada jsonplaceholder).
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Usamos la función "fetch" para hacer una petición HTTP a la URL definida.
// "fetch" devuelve una promesa que se resuelve cuando la respuesta está disponible.
fetch(url)
    // La primera promesa recibe la respuesta HTTP y la convierte en un objeto JSON usando el método ".json()".
    .then(response => response.json())

    // El resultado de ".json()" es otra promesa que, cuando se resuelve, contiene los datos en formato JSON.
    // Aquí accedemos a esos datos y los imprimimos en la consola.
    .then(data => {
        console.log('Datos obtenidos:', data);
    })

    // Si ocurre algún error durante la petición o al procesar la respuesta (como un problema de red), 
    // se captura en este bloque ".catch" y mostramos el error en la consola.
    .catch(error => {
        console.error('Error:', error);
    });
