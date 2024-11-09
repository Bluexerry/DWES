# Editor de Notas

Este proyecto implementa una herramienta en Node.js para crear, editar y eliminar notas desde la terminal. Utiliza módulos nativos como `fs`, `path` y `readline` para gestionar el sistema de archivos y la interacción con el usuario.

## Funcionalidades

El editor ofrece un menú interactivo con las siguientes opciones:

1. **Crear nueva nota**: Permite al usuario crear una nueva nota escribiendo su contenido, que se guarda en un archivo con la extensión `.note`.
2. **Editar nota existente**: Muestra las notas disponibles y permite al usuario elegir una para modificar su contenido.
3. **Eliminar nota**: Muestra las notas disponibles y permite al usuario elegir una para eliminarla.
4. **Salir**: Cierra el programa.

## Estructura del Proyecto

El proyecto incluye un archivo principal `editorNotas.js` que gestiona la lógica de las notas, y un archivo de configuración para ESLint.

### Archivos principales

- **editorNotas.js**: Script principal que maneja la creación, edición y eliminación de notas. Implementa un menú interactivo en la terminal y gestiona el flujo de las operaciones de notas.
- **package.json**: Archivo de configuración de npm que define scripts útiles como `start`, `dev`, y `lint`, y las dependencias del proyecto.
- **.eslintrc.js**: Configuración de ESLint para asegurar el código JavaScript sigue las mejores prácticas.

## Requisitos

Para ejecutar este proyecto, asegúrate de tener los siguientes programas instalados:

- **Node.js**: Necesario para ejecutar el código JavaScript.
- **Nodemon**: Para desarrollo en tiempo real (opcional).
- **ESLint**: Para garantizar que el código siga las convenciones definidas.
