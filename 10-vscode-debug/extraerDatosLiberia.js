const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020
};

// Acceder a las propiedades
console.log(car.brand);  // 'Toyota'
console.log(car.model);  // 'Corolla'

const calculator = {
    sum: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    }
};

// Usar métodos
console.log(calculator.sum(5, 3));  // 8
console.log(calculator.subtract(10, 4));  // 6