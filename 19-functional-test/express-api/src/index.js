const app = require('./app');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Pruebas:
// Mantener los archivos de test/postman tanto de la API como del environment
// node src/index.js
// Probar en bash con la ruta de ~/Desktop/DWES/19-functional-test/express-api/src
//npm test