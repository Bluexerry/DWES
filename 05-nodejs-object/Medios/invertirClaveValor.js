function invert(o) {
  let inverted = {}; // Creamos un objeto vacío
  for (let key in o) {
    // Recorremos el objeto
    inverted[o[key]] = key; // Invertimos la clave y el valor
  }
  return inverted;
}

console.log(invert({ a: 1, b: 2, c: 3 }));
console.log(invert({ a: "hola", b: "mundo", c: "!" }));