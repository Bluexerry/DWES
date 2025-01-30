// src/routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
    searchMovies,
    getMoviesByGenre,
    getMoviesByCast,
} = require('../controllers/movieControllers');

// @route   GET /api/movies
// @desc    Obtener todas las películas
router.get('/', getAllMovies);

// @route   GET /api/movies/search
// @desc    Buscar películas por título
router.get('/search', searchMovies);

// @route   GET /api/movies/genre/:genre
// @desc    Obtener películas por género
router.get('/genre/:genre', getMoviesByGenre);

// @route   GET /api/movies/cast/:castMember
// @desc    Obtener películas por miembro del reparto
router.get('/cast/:castMember', getMoviesByCast);

// @route   GET /api/movies/:id
// @desc    Obtener una película por ID
router.get('/:id', getMovieById);

// @route   POST /api/movies
// @desc    Crear una nueva película
router.post('/', createMovie);

// @route   PUT /api/movies/:id
// @desc    Actualizar una película
router.put('/:id', updateMovie);

// @route   DELETE /api/movies/:id
// @desc    Eliminar una película
router.delete('/:id', deleteMovie);

module.exports = router;