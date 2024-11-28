const app = require('./app');
const config = require('./config');

const PORT = config.port || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Pruebas:

// Orden ascendente
// http://localhost:3000/api/items?sort=name

// Orden descendente
// http://localhost:3000/api/items?sort=-name

// Filtrar por categoria = A
// http://localhost:3000/api/items?filter=A

// Paginado limite con 5 elementos y página 1
// http://localhost:3000/api/items?page=1&limit=5

// Paginado limite con 5 elementos y página 2
// http://localhost:3000/api/items?page=2&limit=5

// Orden descendente, categoria A, pagina 1 con limite de 5 elementos
// http://localhost:3000/api/items?sort=name&filter=A&page=1&limit=5