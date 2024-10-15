// fetch.js

const url = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log('Datos obtenidos:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
