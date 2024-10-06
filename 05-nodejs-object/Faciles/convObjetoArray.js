function toArray(obj) { // Función que recibe un objeto
  return Object.entries(obj); // Devolver un array con las claves y los valores
}

console.log(toArray({ a: 1, b: 2 }));

console.log(toArray({ shrimp: 15, tots: 12 }));

console.log(toArray({}));
