const request = require('supertest');
const app = require('../../src/app');

describe('Notes API', () => {
    it('should create a new note', async () => {
        const res = await request(app)
            .post('/api/notes')
            .send({ name: 'test', content: 'This is a test note' });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'Note created');
    });

    it('should get all notes', async () => {
        const res = await request(app).get('/api/notes');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should get note content', async () => {
        const res = await request(app).get('/api/notes/test');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('content', 'This is a test note');
    });

    it('should delete a note', async () => {
        const res = await request(app).delete('/api/notes/test');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Note deleted');
    });
});