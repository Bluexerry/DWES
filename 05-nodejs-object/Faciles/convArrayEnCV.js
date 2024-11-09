// Definimos la función keysAndValues que toma un objeto 'obj' como argumento
function keysAndValues(obj) {
  // Obtener las claves del objeto usando Object.keys() y ordenarlas alfabéticamente con sort()
  let clave = Object.keys(obj).sort();

  // Obtener los valores correspondientes a las claves ordenadas con map()
  let valor = clave.map((key) => obj[key]);

  // Devolver un array que contiene dos arrays: el primero con las claves y el segundo con los valores
  return [clave, valor];
}

// Ejemplo 1: Se pasa un objeto con claves alfabéticas y valores numéricos
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

// Ejemplo 2: Se pasa un objeto con claves alfabéticas y valores de texto
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));

// Ejemplo 3: Se pasa un objeto con claves y valores booleanos y undefined
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));
