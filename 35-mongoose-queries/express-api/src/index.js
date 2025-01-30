// src/index.js
const express = require('express');
const dotenv = require('dotenv');

// 1. Cargar las variables de entorno antes de cualquier otra cosa
dotenv.config();

const connectDB = require('./config/database');
const movieRoutes = require('./routes/movieRoutes');

const app = express();

// 2. Conectar a la base de datos después de cargar las variables de entorno
connectDB();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/movies', movieRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

// Rutas de API

//curl http://localhost:5000/api/movies
// Obteniendo todas las películas

// curl "http://localhost:5000/api/movies/genre/Sci-Fi"
// Obteniendo películas por género

// curl "http://localhost:5000/api/movies/cast/Matthew%20McConaughey"
// Obteniendo películas por miembro del reparto

// curl -X GET "http://localhost:5000/api/movies/search?title=Interstellar"
// Buscando películas por título

// curl -X GET http://localhost:5000/api/movies/573a139af29313caabcf0480
// Obteniendo una película por ID

/*curl -X POST http://localhost:5000/api/movies \
  -H "Content-Type: application/json" \
  -d '{
        "title": "Pelicula XXX",
        "year": 9099,
        "genres": ["Adventure", "Drama", "Sci-Fi"],
        "cast": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
      }' */
// Creando una nueva película

/*curl -X PUT http://localhost:5000/api/movies/ (AÑADIR ID) \
  -H "Content-Type: application/json" \
  -d '{
        "year": 2015,
        "genres": ["Adventure", "Drama", "Sci-Fi"]
      }'*/
// Actualizando una película

// curl -X DELETE http://localhost:5000/api/movies/ (AÑADIR ID)
// Eliminando una película