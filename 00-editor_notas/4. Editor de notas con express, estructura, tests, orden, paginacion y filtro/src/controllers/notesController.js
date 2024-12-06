const Note = require('../models/note');

function getAllNotes(req, res) {
    let notes = Note.getAllNotes();

    // Filtrado
    if (req.query.filter) {
        const filter = req.query.filter.toLowerCase();
        notes = notes.filter(note => {
            if (note.name.toLowerCase() === filter) return true;
            try {
                return Note.getNoteContent(note.name).toLowerCase().includes(filter);
            } catch (error) {
                console.error(error);
                return false;
            }
        });
    }

    // Ordenación
    if (req.query.sort) {
        const sortField = req.query.sort.replace('-', '');
        const sortOrder = req.query.sort.startsWith('-') ? -1 : 1;
        notes = notes.sort((a, b) => {
            if (typeof a[sortField] === 'string') {
                const aNum = a[sortField].match(/\d+/g);
                const bNum = b[sortField].match(/\d+/g);
                if (aNum && bNum) {
                    return (parseInt(aNum[0]) - parseInt(bNum[0])) * sortOrder;
                }
                return a[sortField].localeCompare(b[sortField]) * sortOrder;
            } else if (a[sortField] instanceof Date) {
                return (a[sortField] - b[sortField]) * sortOrder;
            } else {
                return (a[sortField] - b[sortField]) * sortOrder;
            }
        });
    } else {
        // Default sorting by name
        notes = notes.sort((a, b) => {
            const aNum = a.name.match(/\d+/g);
            const bNum = b.name.match(/\d+/g);
            if (aNum && bNum) {
                return parseInt(aNum[0]) - parseInt(bNum[0]);
            }
            return a.name.localeCompare(b.name);
        });
    }

    // Paginado
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const paginatedNotes = notes.slice(offset, offset + limit);

    res.json({
        total: notes.length,
        pages: Math.ceil(notes.length / limit),
        results: paginatedNotes
    });
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
    const { name, content } = req.body;
    try {
        Note.updateNoteContent(name, content);
        res.json({ message: 'Note updated' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = { getAllNotes, getNoteContent, createNote, deleteNote, updateNote };