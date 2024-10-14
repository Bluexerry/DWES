const flecha = (arg) => {
    console.log(arg);
};
/* Devuelve sin especificar return */
const flechaCorta = arg => arg * 2;

/* Sin parámetros y devolviendo un objeto */
const flechaObjeto = () => (
    {
        nombre: 'Gabri',
        apellido: 'Rodríguez Flores'
    });

console.log(flechaObjeto()); // { nombre: 'Gabri', apellido: 'Rodríguez Flores' }