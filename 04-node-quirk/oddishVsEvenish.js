function oddishOrEvenish(num) {
    let suma = num.toString().split('');
    let total = 0;

    for (let index = 0; index < suma.length; index++) {
        total += parseInt(suma[index]);
    }

    if (suma % 2 == 0) {
        return "Oddish";
    } else {
        return "Evenish";
    }
}

console.log(oddishOrEvenish(86));

/*const oddishOrEvenishGabri = num =>
    num.toString().split('').reduce((sum, n) => sum + parseInt(n), 0) % 2 === 0
        ? "Oddish"
        : "Evenish";

console.log(oddishOrEvenishGabri(76)); */
