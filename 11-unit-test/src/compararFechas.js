// dateCompare.js
function dateCompare(date1, date2) {
    // Si solo hay una fecha, comparamos con la fecha actual
    if (!date2) {
        date2 = new Date(); // Asignamos la fecha actual si no se proporciona la segunda fecha
    }

    // Convertimos las fechas a objetos de tipo Date para asegurarnos de que son válidas
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    // Comprobamos cuál es la fecha anterior y cuál es la posterior
    if (d1 < d2) {
        return {
            startDate: d1.toISOString(), // La fecha de inicio en formato ISO
            endDate: d2.toISOString() // La fecha final en formato ISO
        };
    } else {
        return {
            startDate: d2.toISOString(),
            endDate: d1.toISOString()
        };
    }
}

// Exportamos la función para poder usarla en los tests
module.exports = dateCompare;
