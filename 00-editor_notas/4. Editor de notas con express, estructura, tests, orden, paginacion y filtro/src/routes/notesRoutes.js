const express = require('express');
const { getAllNotes, getNoteContent, createNote, deleteNote, updateNote } = require('../controllers/notesController');
const router = express.Router();

router.get('/', getAllNotes);
router.get('/:name', getNoteContent);
router.post('/', createNote);
router.delete('/:name', deleteNote);
router.put('/', updateNote);

module.exports = router;