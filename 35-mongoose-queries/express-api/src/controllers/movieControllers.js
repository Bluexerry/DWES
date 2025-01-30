// src/controllers/movieController.js
const Movie = require('../model/Movie');

// Obtener todas las películas
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find()
      .select('_id title genres cast year') // Seleccionar campos específicos
      .limit(10); // Limitar a 10 películas
    res.json(movies);
  } catch (err) {
    res.status(500).send('Error del servidor');
  }
};

// Obtener una película por ID
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
      .select('_id title genres cast year'); // Seleccionar campos específicos
    if (!movie) {
      return res.status(404).json({ msg: 'Película no encontrada' });
    }
    res.json(movie);
  } catch (err) {
    res.status(500).send('Error del servidor');
  }
};

// Crear una nueva película
exports.createMovie = async (req, res) => {
  const { title, year, genres, cast, runtime, plot, poster } = req.body;
  try {
    const newMovie = new Movie({
      title,
      year,
      genres,
      cast,
      runtime,
      plot,
      poster,
    });
    const movie = await newMovie.save();
    res.json(movie);
  } catch (err) {
    res.status(500).send('Error del servidor');
  }
};

// Actualizar una película
exports.updateMovie = async (req, res) => {
  try {
    let movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ msg: 'Película no encontrada' });
    }

    movie = await Movie.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    ).select('_id title genres cast year'); // Seleccionar campos específicos tras la actualización

    res.json(movie);
  } catch (err) {
    res.status(500).send('Error del servidor');
  }
};

// Eliminar una película
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ msg: 'Película no encontrada' });
    }
    res.json({ msg: 'Película eliminada exitosamente' });
  } catch (err) {
    res.status(500).send('Error del servidor');
  }
};

// Buscar películas por título
exports.searchMovies = async (req, res) => {
  const { title } = req.query;
  try {
    const movies = await Movie.find({
      title: { $regex: title, $options: 'i' }, // Búsqueda insensible a mayúsculas
    })
      .select('_id title genres cast year') // Seleccionar campos específicos
      .limit(10); // Limitar a 10 películas
    res.json(movies);
  } catch (err) {
    res.status(500).send('Error del servidor');
  }
};

// Obtener películas por género
exports.getMoviesByGenre = async (req, res) => {
  const { genre } = req.params;
  try {
    const movies = await Movie.find({ genres: genre })
      .select('_id title genres cast year') // Seleccionar campos específicos
      .limit(10); // Limitar a 10 películas
    res.json(movies);
  } catch (err) {
    res.status(500).send('Error del servidor');
  }
};

// Obtener películas por miembro del reparto
exports.getMoviesByCast = async (req, res) => {
  const { castMember } = req.params;
  try {
    const movies = await Movie.find({ cast: castMember })
      .select('_id title genres cast year') // Seleccionar campos específicos
      .limit(10); // Limitar a 10 películas
    res.json(movies);
  } catch (err) {
    res.status(500).send('Error del servidor');
  }
};