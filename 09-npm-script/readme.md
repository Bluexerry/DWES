# Documentación de Scripts en package.json

Este documento describe cómo acceder y utilizar los scripts definidos en el archivo `package.json` de tu proyecto. Los scripts son comandos predefinidos que facilitan diversas tareas, como la creación de archivos y carpetas, la eliminación de contenido y la ejecución de scripts de Node.js.

## Scripts Disponibles

A continuación, se presentan los scripts disponibles en la sección `scripts` de tu `package.json`, junto con sus descripciones y ejemplos de uso.

### Scripts

```bash
npm run crear
npm run crear:js "nombre-del-archivo"
npm run crear:carpeta "nombre-de-la-carpeta"
npm run borrar
npm run borrar:js
npm run fecha
npm run imprime
```

### Ejemplos de uso

 Para ejecutar el script imprimir.js con el texto "HolaMundo" en color azul, debes ejecutar el siguiente comando:

> npm run imprime -- azul "Texto en azul"
> npm run imprime -- rojo "Texto en rojo"
> npm run imprime -- verde "Texto en verde"

Para ejecutar npm run crear:js y npm run crear:carpeta debes darle el nombre del argumento tras un espacio en blanco:

> npm run crear:js ejemplo
> npm run crear:carpeta ejemplo



