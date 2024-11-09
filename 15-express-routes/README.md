# Resumen del Documento: Peticiones, Respuestas y Rutas en ExpressJS

---

## Contenidos Principales

1. **Teoría**
   - **Request (Solicitud)**  
     En Express, el objeto `request` (`req`) contiene toda la información sobre la solicitud realizada por el cliente. Entre las propiedades más relevantes de `req` están:

     - **Headers**  
       Los headers contienen metadatos de la solicitud, como el tipo de contenido o tokens de autenticación. Ejemplo de acceso a un header personalizado:

       ```javascript
       const myHeader = req.headers['my-custom-header'];
       ```

     - **Query**  
       Los parámetros de consulta o query son datos opcionales en formato `clave=valor` al final de la URL, precedidos por `?` y unidos por `&`. Ejemplo:

       ```javascript
       const { name, age } = req.query;
       ```

     - **Params**  
       Los parámetros en la URL se definen usando el formato `/:param`. Son útiles para valores dinámicos en rutas. Ejemplo:

       ```javascript
       const { id } = req.params;
       ```

     - **Body**  
       El cuerpo de la solicitud (`req.body`) es utilizado en métodos POST, PUT y PATCH. A partir de Express v4.16.0, el análisis del cuerpo se hace con `express.json()` y `express.urlencoded()`:

       ```javascript
       server.use(express.json());
       server.use(express.urlencoded({ extended: true }));
       ```

   - **Response (Respuesta)**  
     El objeto `response` (`res`) permite enviar respuestas al cliente. Entre los métodos más importantes están:

     - **status** y **statusCode**  
       Estos métodos establecen el código de estado HTTP de la respuesta, como `200` para éxito o `404` para recurso no encontrado:

       ```javascript
       res.status(200).send('OK');
       res.status(404).json({ error: 'Not Found' });
       ```

     - **send** y **json**  
       `res.send()` envía una respuesta en texto plano o HTML, mientras que `res.json()` se usa para enviar datos en formato JSON.

   - **Router (Enrutador)**  
     Express permite agrupar y organizar rutas con el método `route` y la clase `Router`:

     - **Método `route`**  
       Define múltiples métodos HTTP en una misma ruta. Ejemplo:

       ```javascript
       app.route('/book')
         .get((req, res) => res.send('Get a book'))
         .post((req, res) => res.send('Add a book'))
         .put((req, res) => res.send('Update the book'));
       ```

     - **Clase `Router`**  
       Permite crear grupos de rutas y organizarlas modularmente:

       ```javascript
       const router = express.Router();
       router.get('/birds', (req, res) => res.send('Birds home page'));
       app.use('/api', router);
       ```

2. **Ejemplos de Uso**
   - **Request**  
     Ejemplos para acceder a diferentes partes de la solicitud:

     - **Recoger datos de la cabecera**:

       ```javascript
       app.get('/', (req, res) => {
         const { mycustomheader } = req.headers;
         res.send(mycustomheader);
       });
       ```

     - **Recoger datos de la URL**:

       ```javascript
       app.get('/:name', (req, res) => {
         const { name } = req.params;
         res.send(`Hello ${name}`);
       });
       ```

     - **Recoger datos de la query**:

       ```javascript
       app.get('/', (req, res) => {
         const { name = 'World', age } = req.query;
         res.send(`Hello ${name}, you are ${age} years old`);
       });
       ```

     - **Recoger datos del body**:

       ```javascript
       app.post('/data', (req, res) => {
         res.send(req.body);
       });
       ```

   - **Response**  
     Ejemplos de respuestas:

     - **Enviar respuesta 200 OK**:

       ```javascript
       app.get('/', (req, res) => {
         res.status(200).send('OK');
       });
       ```

     - **Enviar respuesta 404 Not Found**:

       ```javascript
       app.get('*', (req, res) => {
         res.status(404).json({ error: 'Not Found' });
       });
       ```

   - **Uso del Enrutador**  
     Ejemplo de un enrutador modular para agrupar rutas relacionadas bajo `/animals`:

     ```javascript
     const express = require('express');
     const animals = express.Router();

     animals.get('/dog', (req, res) => res.json({ sound: 'woof' }));
     animals.get('/cat', (req, res) => res.json({ sound: 'meow' }));
     app.use('/animals', animals);
     ```

---

Este resumen abarca los aspectos principales de las solicitudes, respuestas y organización de rutas en ExpressJS, proporcionando ejemplos para una implementación práctica y modular en aplicaciones Node.js.
