let inicio = 0;
let limite = 30;

while (inicio != limite) {
    inicio++;

    if (inicio % 3 === 0 && inicio % 5 === 0) {
        fizzbazz();
    } else if (inicio % 3 === 0) {
        fizz();
    } else if (inicio % 5 === 0) {
        bazz();
    } else {
        console.log(inicio);
    }
}

function fizz() {
    console.log("Fizz");
}

function bazz() {
    console.log("Bazz");
}

function fizzbazz() {
    console.log("Fizzbuzz");
}