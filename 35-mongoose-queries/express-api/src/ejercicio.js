const mongoose = require('mongoose');

// Conectar a la base de datos
mongoose.connect('mongodb+srv://Jesus:daw2325@cluster0.mimwy.mongodb.net/sample_mflix');


const db = mongoose.connection;
db.once('open', () => console.log('Conectado a MongoDB'));
db.on('error', console.error.bind(console, 'Error de conexión:'));

// Definir esquemas
const commentSchema = new mongoose.Schema({
    movie_id: mongoose.Schema.Types.ObjectId,
    text: String,
});

const movieSchema = new mongoose.Schema({
    title: String,
    genres: [String],
    year: Number,
    rated: String,
    type: String,
});

const Comment = mongoose.model('Comment', commentSchema, 'comments');
const Movie = mongoose.model('Movie', movieSchema, 'movies');

// 1. Recoger un comentario y los datos de una película específica
async function getCommentWithMovie(movieTitle) {
    const comment = await Comment.findOne().populate({
        path: 'movie_id',
        select: 'title genres year rated type',
        model: Movie,
    });
    console.log('--- Comentario con Película ---');
    console.log(comment);
}

// 2. Recoger todos los comentarios de una película específica
async function getCommentsForMovie(movieTitle) {
    const result = await Comment.aggregate([
        {
            $lookup: {
                from: 'movies',
                localField: 'movie_id',
                foreignField: '_id',
                as: 'movie',
            },
        },
        { $unwind: '$movie' },
        { $match: { 'movie.title': movieTitle } },
        {
            $project: {
                text: 1,
                'movie.title': 1,
                'movie.genres': 1,
                'movie.year': 1,
                'movie.rated': 1,
                'movie.type': 1,
            },
        },
        { $limit: 10 },
    ]);
    console.log('--- Comentarios de la Película ---');
    console.log(result);
}

// Ejecutar y cerrar la conexión tras esperar los resultados
async function runQueries() {
    const movieTitle = 'The Godfather';
    await getCommentWithMovie(movieTitle);
    await getCommentsForMovie(movieTitle);
    mongoose.disconnect();
}

runQueries();