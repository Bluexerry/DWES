// src/config/database.js
const mongoose = require('mongoose');
const MONGO_URI = require('../credenciales/credenciales');

const connectDB = async () => {
    try {
        console.log('MONGO_URI:', MONGO_URI);
        if (!MONGO_URI) {
            throw new Error('MONGO_URI no está definida');
        }
        await mongoose.connect(MONGO_URI);
        console.log('Conectado a MongoDB');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;