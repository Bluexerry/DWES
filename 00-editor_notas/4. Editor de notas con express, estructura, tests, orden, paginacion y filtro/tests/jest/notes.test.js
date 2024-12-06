const request = require('supertest');
const app = require('../../src/app');
const Note = require('../../src/models/note');

describe('Notes API', () => {
    beforeAll(() => {
        // Crear algunas notas de prueba
        Note.createNote('note1', 'This is note 1');
        Note.createNote('note2', 'This is note 2');
        Note.createNote('note3', 'This is note 3');
        Note.createNote('note10', 'This is note 10');
    });

    afterAll(() => {
        // Eliminar las notas de prueba
        Note.deleteNote('note1');
        Note.deleteNote('note2');
        Note.deleteNote('note3');
        Note.deleteNote('note10');
    });

    it('should create a new note', async () => {
        const res = await request(app)
            .post('/api/notes')
            .send({ name: 'note4', content: 'This is a test note' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'Note created');
        // Cleanup
        Note.deleteNote('note4');
    });

    it('should get all notes', async () => {
        const res = await request(app).get('/api/notes');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('total');
        expect(res.body).toHaveProperty('pages');
        expect(res.body.results).toBeInstanceOf(Array);
    });

    it('should get note content', async () => {
        const res = await request(app).get('/api/notes/note1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('content', 'This is note 1');
    });

    it('should update a note', async () => {
        const res = await request(app)
            .put('/api/notes')
            .send({ name: 'note1', content: 'Updated content' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Note updated');
        // Verify update
        const updatedNote = await request(app).get('/api/notes/note1');
        expect(updatedNote.body).toHaveProperty('content', 'Updated content');
    });

    it('should delete a note', async () => {
        Note.createNote('note5', 'This is a test note to delete');
        const res = await request(app).delete('/api/notes/note5');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Note deleted');
    });

    it('should filter notes', async () => {
        const res = await request(app).get('/api/notes?filter=note1');
        expect(res.statusCode).toEqual(200);
        expect(res.body.results).toBeInstanceOf(Array);
        expect(res.body.results.length).toBeGreaterThan(0);
    });

    it('should sort notes by name', async () => {
        const res = await request(app).get('/api/notes?sort=name');
        expect(res.statusCode).toEqual(200);
        expect(res.body.results).toBeInstanceOf(Array);
        expect(res.body.results[0].name).toBe('note1');
    });

    it('should paginate notes', async () => {
        const res = await request(app).get('/api/notes?offset=0&limit=2');
        expect(res.statusCode).toEqual(200);
        expect(res.body.results).toBeInstanceOf(Array);
        expect(res.body.results.length).toBe(2);
    });
});