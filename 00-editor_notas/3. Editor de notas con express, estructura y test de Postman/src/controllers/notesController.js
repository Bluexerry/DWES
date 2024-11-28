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

function updateNote(req, res) {
    const notes = Note.getAllNotes();
    if (notes.length === 0) {
        return res.status(404).json({ error: 'No notes available' });
    }

    const { name, content } = req.body;
    if (!name || !content) {
        return res.status(400).json({ error: 'Name and content are required' });
    }

    try {
        Note.updateNoteContent(name, content);
        res.json({ message: 'Note updated' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = { getAllNotes, getNoteContent, createNote, deleteNote, updateNote };