// src/controllers/notesController.js

const Note = require('../models/note');
const path = require('path');
const fs = require('fs');
const { paginationItems } = require('../middlewares/pagination');

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
        // Ordenación por defecto por nombre
        notes = notes.sort((a, b) => {
            const aNum = a.name.match(/\d+/g);
            const bNum = b.name.match(/\d+/g);
            if (aNum && bNum) {
                return parseInt(aNum[0]) - parseInt(bNum[0]);
            }
            return a.name.localeCompare(b.name);
        });
    }

    const hasPagination = req.query.offset !== undefined && req.query.limit !== undefined;

    if (hasPagination) {
        const offset = parseInt(req.query.offset, 10) || 0;
        const limit = parseInt(req.query.limit, 10) || notes.length; // Si limit no está definido, devuelve todas las notas
        const paginatedNotes = notes.slice(offset, offset + limit);

        // Utilizar la función de paginación middleware
        const paginatedResult = paginationItems(req, { total: notes.length, values: paginatedNotes }, offset, limit);

        res.json(paginatedResult);
    } else {
        // Devolver todas las notas sin paginación
        res.json({
            total: notes.length,
            results: notes
        });
    }
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

// Función para manejar la subida de archivos
function uploadNote(req, res) {
    res.send(`Archivo subido exitosamente: <a href="/api/notes/download/${req.file.filename}">Descargar archivo</a>`);
}

// Función para manejar la descarga de archivos
function downloadNote(req, res) {
    const filePath = path.join(__dirname, '../../uploads', req.params.filename);
    if (fs.existsSync(filePath)) {
        res.download(filePath, req.params.filename, (err) => {
            if (err) {
                console.error('Error al descargar el archivo:', err);
                res.status(500).send('Error al descargar el archivo.');
            }
        });
    } else {
        res.status(404).send('Archivo no encontrado');
    }
}

module.exports = { 
    getAllNotes, 
    getNoteContent, 
    createNote, 
    deleteNote, 
    updateNote, 
    uploadNote, 
    downloadNote 
};