// Definimos la función toArray que recibe un objeto como argumento
function toArray(obj) {
  // Usamos Object.entries(obj) para convertir el objeto en un array de arrays,
  // donde cada subarray contiene una clave y su valor correspondiente del objeto.
  return Object.entries(obj);
}

// Ejemplo 1: Se pasa un objeto con claves alfabéticas y valores numéricos
console.log(toArray({ a: 1, b: 2 }));

// Ejemplo 2: Se pasa un objeto con claves de texto y valores numéricos
console.log(toArray({ shrimp: 15, tots: 12 }));

// Ejemplo 3: Se pasa un objeto vacío
console.log(toArray({}));
