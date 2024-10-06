function keysAndValues(obj) {
  let clave = Object.keys(obj).sort(); // Obtener las claves y ordenarlas
  let valor = clave.map((key) => obj[key]); // Obtener los valores de las claves
  return [clave, valor]; // Devolver un array con las claves y los valores
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));

console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));