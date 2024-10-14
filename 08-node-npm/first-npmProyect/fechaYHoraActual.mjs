import chalk from 'chalk'; // Importar la librería chalk para usar colores

// Función para obtener la fecha y la hora actual
function getCurrentDateTime() {
    const now = new Date(); // Obtener la fecha y hora actual

    // Sacar el día, mes, año, horas, minutos y segundos, asegurando que tengan siempre dos dígitos
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0, por eso sumamos 1
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Devolver un objeto con la fecha y hora
    return { day, month, year, hours, minutes, seconds };
}

// Función para mostrar la fecha y la hora en la consola
function displayDateTime() {
    const { day, month, year, hours, minutes, seconds } = getCurrentDateTime(); // Llamar a la función anterior

    // Crear la parte de "HH:mm:ss" (hora:minuto:segundo)
    const time = `${hours}:${minutes}:${seconds}`;

    // Si los segundos son 0 o múltiplos de 10, poner el tiempo en verde, si no, dejarlo normal
    const formattedTime = (seconds % 10 === 0) ? chalk.green(time) : time;

    // Mostrar el formato completo "dd-MM-YYYY HH:mm:ss" en la consola
    console.log(`${day}-${month}-${year} ${formattedTime}`);
}

// Llamar a la función displayDateTime cada segundo
setInterval(displayDateTime, 1000);
