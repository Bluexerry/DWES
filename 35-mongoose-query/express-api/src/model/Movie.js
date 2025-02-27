// src/model/Movie.js
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    genres: [String],
    cast: [String],
    runtime: Number,
    plot: String,
    poster: String,
});

module.exports = mongoose.model('Movie', MovieSchema);