const express = require('express');
const jwt = require('jsonwebtoken');
const {
  getAllNotes,
  getNoteContent,
  createNote,
  deleteNote,
  updateNote,
  uploadNote,
  downloadNote,
} = require('../controllers/notesController');
const upload = require('../middlewares/upload');
const authenticateToken = require('../middlewares/auth');
const { swaggerUi, swaggerDocument } = require('../utils/swagger'); // Importar Swagger

const router = express.Router();

// Ruta para la documentación Swagger
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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

// Descargar un archivo `.note`
router.get('/download/:filename', downloadNote);

// Rutas Protegidas (Con Autenticación)

// Crear una nueva nota
router.post('/', authenticateToken, createNote);

// Actualizar una nota existente
router.put('/', authenticateToken, updateNote);

// Eliminar una nota específica
router.delete('/:name', authenticateToken, deleteNote);

// Obtener el contenido de una nota específica (Debe definirse después de rutas más específicas)
router.get('/:name', getNoteContent);

// Subir un archivo `.note` (Sin Autenticación)
router.post('/upload', upload.single('file'), uploadNote);

module.exports = router;