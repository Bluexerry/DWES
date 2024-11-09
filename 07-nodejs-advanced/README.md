# Resumen del Documento: NodeJS Avanzado - Callback y Promesas

---

## Contenidos Principales

1. **Teoría**
   - **Event Loop**:  
     Node.js utiliza el *event loop* para manejar la asincronía de manera no bloqueante. El *event loop* se encarga de gestionar las tareas de entrada y salida (I/O), así como las funciones asíncronas, colocando cada tarea en una pila de ejecución y ejecutándolas en el orden en que están listas para ser procesadas. Esto permite a Node.js manejar múltiples solicitudes sin necesidad de hilos adicionales, optimizando así el rendimiento y la eficiencia.

   - **Callbacks**:  
     Un callback es una función que se pasa como argumento a otra función y se ejecuta una vez que la operación inicial ha finalizado. En Node.js, los callbacks son muy comunes para manejar operaciones asíncronas, como la lectura de archivos o las solicitudes de red. Sin embargo, el uso excesivo de callbacks anidados puede llevar al llamado *callback hell*, un problema de legibilidad y mantenimiento en el código.

     - **Callback Hell**:  
       *Callback hell* ocurre cuando se utilizan múltiples callbacks anidados, generando un código difícil de leer y mantener. Este problema se vuelve más evidente cuando se necesitan varios pasos secuenciales y cada paso depende del anterior. Para mitigar el callback hell, se pueden utilizar alternativas como las promesas o `async/await`.

   - **Promesas**:  
     Las promesas son una alternativa a los callbacks que facilitan la gestión de la asincronía y mejoran la legibilidad del código. Una promesa representa un valor que estará disponible ahora, en el futuro o nunca, y permite manejar el éxito o fallo de una operación con métodos como `then` y `catch`. Las promesas pueden encadenarse para simplificar el flujo de control en operaciones asíncronas complejas.

     - **Métodos de Resolución de Promesas**:
       - **`.then()` y `.catch()`**: Estos métodos permiten manejar el éxito (`resolve`) o el fallo (`reject`) de una promesa. `then` se ejecuta si la promesa se resuelve correctamente, mientras que `catch` maneja cualquier error.
       - **Promise.resolve() y Promise.all()**: `Promise.resolve()` crea una promesa resuelta inmediatamente. `Promise.all()` permite ejecutar múltiples promesas en paralelo y se resuelve cuando todas han terminado; es útil para optimizar y sincronizar operaciones dependientes.

   - **Sync vs Async**:  
     En la programación síncrona, cada tarea se ejecuta en secuencia, una después de otra. Sin embargo, esto puede resultar ineficiente en operaciones de I/O, ya que el programa debe esperar a que termine cada operación. En Node.js, la asincronía permite que el programa continúe con otras tareas mientras espera que una operación finalice.

     - **Async/Await**:  
       `async/await` es una sintaxis simplificada para manejar promesas, introducida en ES2017. `async` convierte una función en una función asíncrona que devuelve una promesa, mientras que `await` permite esperar la resolución de una promesa dentro de una función `async`, lo que facilita la lectura y evita el callback hell.

   - **Buenas Prácticas**:
     - **Evitar Resolución de Promesas en Bucles**: En vez de resolver promesas dentro de un bucle, es mejor crear un array de promesas y resolverlas al final usando `Promise.all()`. Esto mejora el rendimiento y reduce la complejidad.
     - **Encadenamiento de Promesas**: Utilizar un estilo claro de encadenamiento y evitar anidaciones innecesarias.
     - **Manejo de Errores**: Asegurar que todas las promesas tengan un bloque `catch` para capturar errores, especialmente en aplicaciones críticas.

2. **Ejemplos**

   - **Ejemplo de Temporizador Asíncrono**:  
     Este ejemplo muestra cómo funcionan las funciones asíncronas en Node.js:

     ```javascript
     console.log('Espera');
     setTimeout(() => console.log('...'), 1000);
     console.log('Ya!');
     ```

     Aquí, `setTimeout` retrasa la ejecución de la función de impresión un segundo, demostrando que el flujo continúa mientras la función espera.

   - **Uso Básico de Promesas**:  
     Este ejemplo ilustra cómo definir y manejar una promesa:

     ```javascript
     const promise = new Promise((resolve, reject) => {
       resolve('¡Éxito!');
       // reject('Error!'); // Para manejar errores
     });

     promise
       .then(value => console.log(value)) // ¡Éxito!
       .catch(error => console.log(error)); // Error
     ```

     La promesa se resuelve con el mensaje de éxito, pero si ocurriese un error, `catch` lo capturaría.

   - **Implementación de `Async/Await`**:  
     Para simplificar el manejo de promesas, se usa `async/await`:

     ```javascript
     function sleep(ms) {
       return new Promise(resolve => setTimeout(resolve, ms));
     }

     async function init() {
       console.log('1');
       await sleep(1000);
       console.log('2');
     }

     init();
     console.log('3');
     ```

     Aquí, `await` pausa la función `init` hasta que `sleep` termine, mostrando una ejecución secuencial en un contexto asíncrono.

   - **Promesas en Bucles**:  
     Se muestra cómo evitar problemas al usar promesas en bucles. En lugar de esperar dentro del bucle, se crea un array de promesas y se resuelve con `Promise.all()`:

     ```javascript
     async function init() {
       const promises = [];
       for (let i = 0; i < 5; i++) {
         const promise = new Promise(resolve => setTimeout(() => resolve(i), i * 1000));
         promises.push(promise);
       }
       const results = await Promise.all(promises);
       console.log(results); // [0, 1, 2, 3, 4]
     }

     init();
     ```

     Esto optimiza el rendimiento y evita bloqueos en el flujo de ejecución.

---

## Recursos Adicionales

El documento incluye enlaces a recursos útiles para profundizar en el *event loop*, callbacks, promesas y `async/await`. Estos recursos incluyen artículos, tutoriales y la documentación oficial de Mozilla Developer Network (MDN), así como guías sobre cómo evitar el callback hell y mejorar el rendimiento en aplicaciones Node.js.

---

Este documento ofrece una introducción detallada para comprender y aplicar el manejo de asincronía en Node.js, cubriendo desde callbacks básicos hasta prácticas avanzadas con promesas y `async/await`.
