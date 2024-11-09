# Resumen del Documento: Servidor HTTP con Express y NodeJS

---

## Contenidos Principales

1. **Teoría**
   - **Express**
     - **Instalación y uso básico**  
       Express es un framework para Node.js que simplifica la creación de aplicaciones y servidores HTTP. Para instalarlo, se utiliza el siguiente comando en la terminal:

       ```bash
       npm i express
       ```

       Después de instalarlo, se importa el módulo y se configura un servidor básico:

       ```javascript
       const express = require('express');
       const server = express();
       server.get('/', (req, res) => {
         res.send('Hello World!');
       });
       server.listen(3000, () => {
         console.log('App escuchando en http://localhost:3000');
       });
       ```

       Este ejemplo crea un servidor que escucha en el puerto 3000 y responde con "Hello World!" cuando recibe una solicitud en la ruta raíz (`/`).

     - **Generador de aplicaciones Express**  
       Express ofrece una herramienta para generar la estructura básica de una aplicación con un solo comando. Esto se hace mediante el comando:

       ```bash
       npx express-generator
       ```

       Este generador crea una estructura estándar de carpetas y archivos, ideal para comenzar rápidamente un proyecto en Express.

     - **Direccionamiento básico**  
       Express permite definir rutas de forma sencilla para manejar solicitudes HTTP GET, POST, PUT, y DELETE. Ejemplos de configuración de rutas básicas:

       ```javascript
       app.get('/', (req, res) => res.send('Hello World!'));
       app.post('/', (req, res) => res.send('Got a POST request'));
       app.put('/user', (req, res) => res.send('Got a PUT request at /user'));
       app.delete('/user', (req, res) => res.send('Got a DELETE request at /user'));
       ```

       En este ejemplo, cada ruta y método HTTP especifica una respuesta diferente. Esto permite crear múltiples endpoints en la misma aplicación, manejando cada tipo de solicitud de manera particular.

     - **Servicio de archivos estáticos en Express**  
       Express facilita el servir archivos estáticos (como imágenes, CSS, o JavaScript) mediante el uso de `express.static()`. Esto permite que el servidor entregue archivos ubicados en una carpeta pública al cliente, como se muestra a continuación:

       ```javascript
       app.use(express.static('public'));
       app.use('/static', express.static(__dirname + '/public'));
       ```

       El primer ejemplo sirve archivos directamente desde la carpeta `public`. En el segundo ejemplo, los archivos están disponibles en la ruta `/static`. Esta funcionalidad es útil para aplicaciones que necesitan servir contenido estático, como archivos HTML o recursos multimedia.

2. **Ejemplos de Configuración del Servidor**
   - **Ejemplo Base**  
     A continuación, se presenta un ejemplo completo de un servidor básico con Express, que responde con "Hello World!" en la ruta raíz (`/`):

     ```javascript
     const express = require('express');
     const app = express();
     const port = 3000;

     app.get('/', (req, res) => {
       res.send('Hello World!');
     });

     app.listen(port, () => {
       console.log(`App escuchando en http://localhost:${port}`);
     });
     ```

     Este código configura un servidor que escucha en el puerto 3000 y responde a las solicitudes con un mensaje simple. Esta base se puede ampliar para incluir otras rutas y funcionalidades según las necesidades de la aplicación.

---

Este resumen proporciona una guía para montar un servidor HTTP con Express en Node.js, configurar rutas y servir archivos estáticos. Es ideal para desarrolladores que buscan una solución ligera y eficiente para construir aplicaciones web en Node.js.
