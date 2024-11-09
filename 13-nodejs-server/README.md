# Resumen del Documento: Servidor HTTP con NodeJS

---

## Contenidos Principales

1. **Teoría**
   - **Servidor Web**  
     Conceptos sobre servidores web, cómo funcionan y su papel en la comunicación entre clientes y servidores a través de la red.

   - **URL**  
     La estructura de una URL incluye: `protocolo://dominio:puerto/path?query`. La **query string** contiene parámetros clave-valor que permiten enviar información adicional en la solicitud.

     Ejemplo de uso de la librería `querystring` para analizar y crear query strings:

     ```javascript
     const querystring = require('querystring');
     const str = 'prop1=value1&prop2=value2';
     const parsed = querystring.parse(str);  // { prop1: 'value1', prop2: 'value2' }
     const newStr = querystring.stringify(parsed);  // 'prop1=value1&prop2=value2'
     ```

   - **Protocolo HTTP y Códigos de Estado**  
     El protocolo HTTP define la forma en que los clientes y servidores se comunican. Incluye códigos de estado (200 para éxito, 404 para no encontrado, 500 para error del servidor) que indican el resultado de la solicitud.

   - **Crear un Servidor Básico en NodeJS**  
     Para montar un servidor HTTP en Node.js, es necesario importar el módulo `http`, crear un servidor y definir el puerto de escucha:

     ```javascript
     const http = require('http');

     const server = http.createServer((req, res) => {
       res.end('Hello World!');
     });

     server.listen(3000, '127.0.0.1');
     ```

     **Objetos REQ y RES**  
     `req` contiene información sobre la solicitud (método, URL, headers), y `res` es el objeto de respuesta, que permite enviar datos de vuelta al cliente.

2. **Ejemplos de Configuración del Servidor**
   - **Editar la Respuesta de la Petición**  
     Permite enviar una respuesta al cliente. Por ejemplo, en lugar de un mensaje de texto, se puede enviar un HTML o un JSON.

     ```javascript
     const http = require('http');

     http.createServer((req, res) => {
       res.writeHead(200, { 'Content-Type': 'text/html' });
       res.end('<h1>Hello World!</h1>');
     }).listen(3000);
     ```

   - **Editar la Cabecera de la Petición**  
     Se pueden personalizar los headers, como el tipo de contenido, para ajustar la respuesta al cliente:

     ```javascript
     const http = require('http');

     http.createServer((req, res) => {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain');
       res.end('Hello World!');
     }).listen(3000);
     ```

   - **Establecer Rutas**  
     Permite responder de forma diferente según la URL solicitada. Por ejemplo, se puede crear una ruta `/ping` que devuelva "pong":

     ```javascript
     const http = require('http');

     http.createServer((req, res) => {
       if (req.url === '/ping') {
         res.writeHead(200, { 'Content-Type': 'text/plain' });
         res.end('pong');
       } else {
         res.writeHead(404);
         res.end('Not Found');
       }
     }).listen(3000);
     ```

---

Este resumen proporciona una guía para crear un servidor básico en Node.js, manejar solicitudes HTTP y configurar diferentes rutas y respuestas. Es útil para desarrolladores que buscan construir servicios web sin frameworks adicionales.
