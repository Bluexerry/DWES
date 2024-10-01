/* Guardo la función en una variable */
const test = function (arg) {
    console.log(arg);
}

/* Paso una función como argumento */
function main(miFunc) {
    const texto = 'texto';
    miFunc(texto);
}

main(test);