// Importamos la biblioteca 'chalk' para aplicar colores al texto en la consola
import chalk from 'chalk';

// Importamos la biblioteca 'faker' para generar datos falsos
import { faker } from '@faker-js/faker';

// Función para generar un color aleatorio
function getRandomColor() {
    // Definimos un array con varios nombres de colores
    const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
    // Generamos un índice aleatorio entre 0 y la longitud del array de colores
    const randomIndex = Math.floor(Math.random() * colors.length);
    // Devolvemos un color aleatorio del array
    return colors[randomIndex];
}

// Generar un nombre aleatorio utilizando faker
const randomName = faker.person.fullName(); // Llama a la función para obtener un nombre completo

// Obtener un color aleatorio llamando a la función 'getRandomColor'
const randomColor = getRandomColor();

// Imprimir el nombre en un color aleatorio utilizando chalk
console.log(chalk[randomColor](randomName)); // Aplica el color aleatorio al nombre y lo imprime en la consola
