const express = require('express');
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

// Ruta para obtener todas las notas en GET /all
router.get('/all', getAllNotes);

// Rutas de la API para operaciones CRUD
router.get('/:name', getNoteContent);
router.post('/', createNote);
router.delete('/:name', deleteNote);
router.put('/', updateNote);

// Rutas para subir y descargar archivos
router.post('/upload', upload.single('file'), uploadNote);
router.get('/download/:filename', downloadNote);

module.exports = router;