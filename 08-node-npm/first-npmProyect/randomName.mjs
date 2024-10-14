import chalk from 'chalk';
import { faker } from '@faker-js/faker';

// Función para generar un color aleatorio
function getRandomColor() {
    const colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Generar un nombre aleatorio
const randomName = faker.person.fullName();

// Obtener un color aleatorio
const randomColor = getRandomColor();

// Imprimir el nombre en un color aleatorio
console.log(chalk[randomColor](randomName));