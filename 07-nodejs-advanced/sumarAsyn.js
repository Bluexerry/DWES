// funciones.js

function sumarAsync(a, b, callback) {
    setTimeout(() => {
        const suma = a + b;
        callback(suma);
    }, 2000);
}

sumarAsync(10, 15, (resultado) => {
    console.log(`La suma asíncrona es: ${resultado}`);
});
