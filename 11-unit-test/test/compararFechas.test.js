// dateCompare.test.js
const test = require('ava');
const dateCompare = require('../src/compararFechas');

// Test para comparar dos fechas, donde la primera es anterior a la segunda
test('Should return startDate and endDate correctly for two given dates', t => {
    const result = dateCompare('2024-01-01', '2024-12-31');

    // Comprobamos que las fechas están en el orden correcto
    t.deepEqual(result, {
        startDate: '2024-01-01T00:00:00.000Z',
        endDate: '2024-12-31T00:00:00.000Z'
    });
});

// Test para comparar una fecha con la actual
test('Should return the given date as startDate and current date as endDate', t => {
    const result = dateCompare('2024-01-01');

    // La fecha actual será "dinámica", por lo que no la podemos comprobar con precisión.
    t.is(result.startDate, '2024-01-01T00:00:00.000Z');
    t.truthy(result.endDate); // Verificamos que la fecha final (actual) existe y es válida
});

// Test para dos fechas, donde la segunda es anterior a la primera
test('Should return the correct order when the second date is earlier', t => {
    const result = dateCompare('2024-12-31', '2024-01-01');

    // Comprobamos que las fechas están en el orden correcto
    t.deepEqual(result, {
        startDate: '2024-01-01T00:00:00.000Z',
        endDate: '2024-12-31T00:00:00.000Z'
    });
});
