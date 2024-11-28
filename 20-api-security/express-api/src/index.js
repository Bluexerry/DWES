import './app.js';

// Pruebas:
// npm start
// node src/utils/tokenGenerator.js
// NOTA: Cuando ejecutes tokenGenerator.js, CUIDADO con copiar el token directamente desde la consola ya que esta misma crea espacios entre letras, eso invalida el token. Debes pegar el token en un editor de texto y eliminar los espacios.

// curl -X GET http://localhost:3000/public
// Public access

// curl -X GET http://localhost:3000/vip -H "Authorization: Bearer (token que te genera tokenGenerator.js)"
// VIP access

// curl -X GET http://localhost:3000/admin -H "Authorization: Bearer (token que te genera tokenGenerator.js)"
// Admin access