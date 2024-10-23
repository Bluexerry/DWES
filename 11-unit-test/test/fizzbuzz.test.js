// fizzbuzz.test.js
const test = require('ava');
const fizzBuzz = require('../src/fizzbuzz');

// Condiciones personalizadas para los tests
const conditions = {
    15: 'foo',
    2: 'poo',
    3: 'fizz',
    5: 'buzz',
};

// Test para el número 1, que no cumple ninguna condición
test('Should return 1', t => {
    const result = fizzBuzz(1, conditions);
    t.is(result, 1); // Comprobamos que devuelve 1
});

// Test para el número 3, que es divisible por 3
test('Should return fizz', t => {
    const result = fizzBuzz(3, conditions);
    t.is(result, 'fizz'); // Comprobamos que devuelve "fizz"
});

// Test para el número 5, que es divisible por 5
test('Should return buzz', t => {
    const result = fizzBuzz(5, conditions);
    t.is(result, 'buzz'); // Comprobamos que devuelve "buzz"
});

// Test para el número 6, que es divisible por 2 y 3
test('Should return "poofizz" for divisible by 2 and 3', t => {
    const result = fizzBuzz(6, conditions);
    t.is(result, 'poofizz'); // Comprobamos que devuelve "poofizz"
});

// Test para el número 15, que es divisible por 15 (y también por 3 y 5)
test('Should return foo (for 15)', t => {
    const result = fizzBuzz(15, conditions);
    t.is(result, 'foo'); // Comprobamos que devuelve "foo"
});
