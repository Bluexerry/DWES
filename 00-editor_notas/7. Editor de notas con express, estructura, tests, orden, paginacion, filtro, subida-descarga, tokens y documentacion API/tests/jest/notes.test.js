const request = require('supertest');
const app = require('../../src/app');
const fs = require('fs');
const path = require('path');

describe('Notes API', () => {
    const notesDir = path.join(__dirname, '../../notas');
    const uploadsDir = path.join(__dirname, '../../uploads');

    beforeAll(() => {
        // Crear los directorios 'notas' y 'uploads' si no existen
        if (!fs.existsSync(notesDir)) {
            fs.mkdirSync(notesDir, { recursive: true });
        }
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir, { recursive: true });
        }
    });

    test('Obtener todas las notas', async () => {
        const response = await request(app).get('/api/notes/all');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('total');
        expect(response.body).toHaveProperty('results');
    });

    test('Obtener el contenido de una nota', async () => {
        const noteName = 'note1';
        const noteContent = 'Contenido de la nota 1';
        const filePath = path.join(notesDir, `${noteName}.note`);

        // Crear la nota
        fs.writeFileSync(filePath, noteContent);

        const response = await request(app).get(`/api/notes/${noteName}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('content', noteContent);
    });

    test('Paginado - Primeras 5 notas', async () => {
        const response = await request(app).get('/api/notes/all?offset=0&limit=5');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('results');
        expect(response.body.results.length).toBeLessThanOrEqual(5);
    });

    test('Paginado - Siguientes 5 notas', async () => {
        const response = await request(app).get('/api/notes/all?offset=5&limit=5');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('results');
        expect(response.body.results.length).toBeLessThanOrEqual(5);
    });

    test('Paginado - Últimas 5 notas', async () => {
        const response = await request(app).get('/api/notes/all?offset=10&limit=5');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('results');
        expect(response.body.results.length).toBeLessThanOrEqual(5);
    });

    test('Filtro - Obtener "note1"', async () => {
        const noteName = 'note1';
        const noteContent = 'Contenido de note1';
        fs.writeFileSync(path.join(notesDir, `${noteName}.note`), noteContent);

        const response = await request(app).get('/api/notes/all?filter=note1');
        expect(response.statusCode).toBe(200);
        expect(response.body.results).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ name: noteName })
            ])
        );
    });

    test('Filtro - Obtener "projectPlan"', async () => {
        const noteName = 'projectPlan';
        const noteContent = 'Contenido de projectPlan';
        fs.writeFileSync(path.join(notesDir, `${noteName}.note`), noteContent);

        const response = await request(app).get('/api/notes/all?filter=projectPlan');
        expect(response.statusCode).toBe(200);
        expect(response.body.results).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ name: noteName })
            ])
        );
    });

    test('Orden - Ascendente', async () => {
        const response = await request(app).get('/api/notes/all?sort=name');
        expect(response.statusCode).toBe(200);
        expect(response.body.results).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ name: expect.any(String) })
            ])
        );
    });

    test('Orden - Descendente por orden de creación', async () => {
        const response = await request(app).get('/api/notes/all?sort=-createdAt');
        expect(response.statusCode).toBe(200);
        expect(response.body.results).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ name: expect.any(String) })
            ])
        );
    });

    test('Subida y descarga de un archivo `.note`', async () => {
        const response = await request(app)
            .post('/api/notes/upload')
            .attach('file', path.join(__dirname, 'test.note'))
            .expect(200);
        expect(response.text).toContain('Archivo subido exitosamente');

        // Extraer el nombre del archivo subido usando métodos de cadena en lugar de regex
        const downloadKeyword = 'download/';
        const downloadIndex = response.text.indexOf(downloadKeyword);
        expect(downloadIndex).toBeGreaterThan(-1);

        // Extraer el substring que contiene el nombre del archivo
        const filenameStart = downloadIndex + downloadKeyword.length;
        const filenameEnd = response.text.indexOf('"', filenameStart);
        const filename = response.text.substring(filenameStart, filenameEnd);
        expect(filename).toBeDefined();
        expect(filename).not.toBe('');
    });

});