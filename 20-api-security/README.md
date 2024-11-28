
# API: Seguridad

## Contenidos

### 1. Teoría
La seguridad en APIs es fundamental para garantizar la integridad y confidencialidad de los datos. A continuación, se detallan conceptos clave y herramientas:

#### 1.1 Encriptado
- **JWT (JSON Web Tokens):**  
  - Es un estándar para transmitir información entre partes como un objeto JSON, asegurado mediante firma digital.  
  - Uso principal: autentificación y autorización.  
  - Ventajas: compacto, seguro y fácil de validar en cualquier lenguaje.  
  - **Comparación JWT vs Cookies/Sessions:**  
    - JWT es ideal para aplicaciones sin estado (stateless), mientras que las cookies y sesiones suelen requerir un servidor centralizado para almacenar información.  
  - Recursos:  
    - [jwt.io](https://jwt.io) para generar y validar tokens.  
    - [Qué es JWT y cómo funciona](https://openwebinars.net/blog/que-es-json-web-token-y-como-funciona/).  

- **Hash:**  
  - Técnica de cifrado unidireccional, comúnmente utilizada para proteger contraseñas.  
  - A diferencia de la encriptación, los datos no pueden ser revertidos a su forma original.  

- **Bcrypt:**  
  - Herramienta popular para crear y validar hashes seguros, utilizada ampliamente en Node.js.  
  - Beneficios: incorpora sal (salt) y múltiples rondas de encriptado para mayor seguridad.  
  - Ejemplos:  
    - [npmjs.com](https://www.npmjs.com/package/bcrypt).  
    - [Hash y verificación de contraseñas](https://jasonwatmore.com/post/2020/07/20/nodejs-hash-and-verify-passwords-with-bcrypt).  

#### 1.2 Autentificación en API
- **Métodos de autentificación:**  
  - Básico (usuario y contraseña).  
  - Token basado en sesiones.  
  - OAuth2 para accesos delegados.  

- **Bearer Token:**  
  - Método común en APIs REST, donde el cliente envía un token en el encabezado de la solicitud.  
  - Ejemplo con middleware: verifica el token y los permisos antes de permitir el acceso.  
  - Recursos adicionales:  
    - [Autentificación con tokens](https://carlosazaustre.es/autenticacion-con-token-en-node-js).  
    - [Manejo de JWT en Express.js](https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js).  

---

### 2. Ejemplos

#### Ejemplo 1: Uso de JWT en Node.js
1. Generar un token con una firma secreta:  
    ```javascript
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({ id: 123 }, 'mi_secreto', { expiresIn: '1h' });
    console.log(token);
    ```

2. Verificar un token en un middleware:  
    ```javascript
    const verifyToken = (req, res, next) => {
      const token = req.headers['authorization'];
      if (!token) return res.status(403).send('No token provided');
      jwt.verify(token, 'mi_secreto', (err, decoded) => {
        if (err) return res.status(500).send('Failed to authenticate token');
        req.userId = decoded.id;
        next();
      });
    };
    ```

#### Ejemplo 2: Hashing con Bcrypt
1. Crear un hash:  
    ```javascript
    const bcrypt = require('bcrypt');
    const password = 'mi_contraseña';
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) throw err;
      console.log('Hash generado:', hash);
    });
    ```

2. Validar un hash:  
    ```javascript
    bcrypt.compare('mi_contraseña', hash, (err, result) => {
      if (result) {
        console.log('La contraseña es válida');
      } else {
        console.log('Contraseña incorrecta');
      }
    });
    ```

Estos ejemplos son fundamentales para implementar seguridad robusta en aplicaciones modernas.

---

### Recursos Adicionales
- **JWT**: [jwt.io](https://jwt.io)  
- **Node.js y Seguridad**:  
  - [Sqreen Blog](https://blog.sqreen.com/nodejs-security-best-practices/)  
  - [Carlos Azaustre](https://carlosazaustre.es/autenticacion-con-token-en-node-js)  
- **Bcrypt**:  
  - [Documentación oficial](https://www.npmjs.com/package/bcrypt)  
  - [Ejemplos prácticos](https://jasonwatmore.com/post/2020/07/20/nodejs-hash-and-verify-passwords-with-bcrypt)  