# Proyecto FizzBuzz

Este proyecto implementa el juego FizzBuzz, que es un ejercicio clásico de programación, y se complementa con pruebas unitarias utilizando AVA, además de una integración de SonarQube para análisis de código.

## Contenido

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características](#características)
- [Configuración del Entorno](#configuración-del-entorno)
- [Estructura de Archivos](#estructura-de-archivos)

## Descripción del Proyecto

El proyecto consiste en una implementación de FizzBuzz que cumple con las siguientes condiciones:

- Por cada número que es divisible por 3, imprime "fizz".
- Por cada número que es divisible por 5, imprime "buzz".
- Por cada número que es divisible por 15, imprime "foo".
- Si un número no es divisible por ninguno de los anteriores, imprime el número mismo.

## Características

- Función `fizzBuzz` que implementa la lógica del juego.
- Pruebas unitarias escritas con AVA para asegurar el correcto funcionamiento de la función.
- Cobertura de código del 100%.
- Configuración inicial para la integración de SonarQube (aunque no se está utilizando actualmente).

## Configuración del Entorno

1. Clona el repositorio en tu máquina local.
2. Instala las dependencias necesarias:

   ```bash
   npm install
   npm test
   npm run test:watch