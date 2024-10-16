import chalk from 'chalk'; // Importar la librería chalk para usar colores en la consola

// Función para obtener la fecha y la hora actual
function getCurrentDateTime() {
    const now = new Date(); // Obtener la fecha y hora actual en el momento en que se llama a la función

    // Sacar el día, mes, año, horas, minutos y segundos, asegurando que tengan siempre dos dígitos
    const day = String(now.getDate()).padStart(2, '0'); // Obtener el día del mes y asegurar que tenga dos dígitos
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Obtener el mes del año. Los meses empiezan desde 0, por eso sumamos 1
    const year = now.getFullYear(); // Obtener el año completo (por ejemplo, 2024)
    const hours = String(now.getHours()).padStart(2, '0'); // Obtener las horas en formato 24 horas y asegurar que tenga dos dígitos
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Obtener los minutos y asegurar que tenga dos dígitos
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Obtener los segundos y asegurar que tenga dos dígitos

    // Devolver un objeto que contiene todos los componentes de la fecha y hora
    return { day, month, year, hours, minutes, seconds };
}

// Función para mostrar la fecha y la hora en la consola
function displayDateTime() {
    // Llamar a la función getCurrentDateTime y desestructurar el objeto resultante para obtener los componentes
    const { day, month, year, hours, minutes, seconds } = getCurrentDateTime(); // Obtener la fecha y hora actual

    // Crear la parte de "HH:mm:ss" (hora:minuto:segundo) a partir de los componentes de la hora
    const time = `${hours}:${minutes}:${seconds}`; // Usar plantillas de cadena para crear el formato de hora

    // Si los segundos son 0 o múltiplos de 10, cambiar el color del tiempo a verde; de lo contrario, dejarlo en el color normal
    const formattedTime = (seconds % 10 === 0) ? chalk.green(time) : time; // Utilizar chalk para dar formato al texto

    // Mostrar el formato completo "dd-MM-YYYY HH:mm:ss" en la consola
    console.log(`${day}-${month}-${year} ${formattedTime}`); // Imprimir la fecha y la hora formateadas en la consola
}

// Llamar a la función displayDateTime cada segundo
setInterval(displayDateTime, 1000); // Usar setInterval para ejecutar la función cada 1000 milisegundos (1 segundo)
