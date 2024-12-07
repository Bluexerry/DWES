// src/routes/notesRoutes.js

const express = require('express');
const jwt = require('jsonwebtoken');
const {
    getAllNotes,
    getNoteContent,
    createNote,
    deleteNote,
    updateNote,
    uploadNote,
    downloadNote
} = require('../controllers/notesController');
const upload = require('../middlewares/upload');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

// Ruta para servir el formulario de subida de archivos en GET /
router.get('/', (req, res) => {
    res.send(`
        <h1>Sube y descarga archivos .note</h1>
        <form action="/api/notes/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="file" accept=".note" required />
            <button type="submit">Subir archivo</button>
        </form>
    `);
});

// Ruta de login para obtener un token
router.post('/login', (req, res) => {
    const { name } = req.body;
    const adminName = process.env.ADMIN_NAME;

    if (name !== adminName) {
        return res.status(403).json({ message: 'Credenciales inválidas' });
    }

    const jwtSecret = process.env.JWT_SECRET;
    const token = jwt.sign({ name }, jwtSecret, { expiresIn: '1h' });
    res.json({ token });
});

// Rutas Públicas (Sin Autenticación)

// Obtener todas las notas
router.get('/all', getAllNotes);

// Obtener el contenido de una nota específica
router.get('/:name', getNoteContent);

// Descargar un archivo `.note`
router.get('/download/:filename', downloadNote);

// Rutas Protegidas (Con Autenticación)

// Crear una nueva nota
router.post('/', authenticateToken, createNote);

// Actualizar una nota existente
router.put('/', authenticateToken, updateNote);

// Eliminar una nota específica
router.delete('/:name', authenticateToken, deleteNote);

// Subir un archivo `.note` (Sin Autenticación)
router.post('/upload', upload.single('file'), uploadNote);

module.exports = router;