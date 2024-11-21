const Note = require('../models/note');

function getAllNotes(req, res) {
    const notes = Note.getAllNotes();
    res.json(notes);
}

function getNoteContent(req, res) {
    try {
        const content = Note.getNoteContent(req.params.name);
        res.json({ content });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

function createNote(req, res) {
    const { name, content } = req.body;
    Note.createNote(name, content);
    res.status(201).json({ message: 'Note created' });
}

function deleteNote(req, res) {
    try {
        Note.deleteNote(req.params.name);
        res.json({ message: 'Note deleted' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = { getAllNotes, getNoteContent, createNote, deleteNote };