// Definimos la función invert que recibe un objeto como argumento
function invert(o) {
  // Creamos un objeto vacío donde almacenaremos la inversión de claves y valores
  let inverted = {};

  // Recorremos las claves del objeto original
  for (let key in o) {
    // Para cada clave, asignamos el valor correspondiente como clave en el objeto 'inverted'
    // y la clave como valor en 'inverted'
    inverted[o[key]] = key;
  }

  // Devolvemos el objeto invertido
  return inverted;
}

// Ejemplo 1: Invertir un objeto con claves alfabéticas y valores numéricos
console.log(invert({ a: 1, b: 2, c: 3 }));
// Resultado esperado: { 1: "a", 2: "b", 3: "c" }

// Ejemplo 2: Invertir un objeto con claves de texto y valores de texto
console.log(invert({ a: "hola", b: "mundo", c: "!" }));
// Resultado esperado: { hola: "a", mundo: "b", "!": "c" }
