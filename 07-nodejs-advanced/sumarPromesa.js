// funciones.js

function sumarAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const suma = a + b;
            resolve(suma);
        }, 2000);
    });
}

sumarAsync(20, 30)
    .then((resultado) => {
        console.log(`La suma con Promesa es: ${resultado}`);
    })
    .catch((error) => {
        console.error(error);
    });
