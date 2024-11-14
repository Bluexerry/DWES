
# Editor de Notas

Este proyecto es una aplicación de consola en Node.js que permite crear, editar y eliminar notas. Las notas se guardan en archivos con extensión `.note` dentro de una carpeta `notas`. La estructura del proyecto sigue el patrón MVC (Model-View-Controller) para organizar las distintas responsabilidades de la aplicación.

## Estructura del Proyecto

```plaintext
project-root
|-- src
|   |-- controllers
|   |   `-- notesController.js  # Controlador principal de la lógica de notas
|   |-- loaders
|   |   `-- loader.js          # Inicialización de la aplicación
|   |-- routes
|   |   `-- notesRoute.js       # Rutas (no utilizadas en esta implementación de consola)
|   |-- app.js                  # Arranque de la aplicación
|   |-- index.js                # Entrada de la aplicación
|   |-- eslint.config.mjs       # Configuración de ESLint
|-- package.json                # Configuración y scripts del proyecto
|-- .env                        # Variables de entorno
```

## Funcionalidades Principales

1. **Crear Nota**
   - Permite al usuario crear una nueva nota.
   - El usuario introduce el nombre y el contenido de la nota, terminando con dos líneas vacías.
   - La nota se guarda como un archivo `.note` en la carpeta `notas`.

2. **Editar Nota**
   - Permite seleccionar una nota existente para editar su contenido.
   - Muestra el contenido actual y permite sobrescribirlo.
   - El nuevo contenido se guarda después de introducir dos líneas vacías.

3. **Eliminar Nota**
   - Muestra una lista de notas disponibles y permite eliminar una seleccionada.

4. **Salir**
   - Finaliza el programa.

## Ejecución

Para ejecutar la aplicación:

```bash
node src/index.js
# o usando el script npm
npm start
```

### Comandos npm

- `npm run crear`: Ejecuta el editor para crear una nueva nota.
- `npm run editar`: Permite editar una nota existente.
- `npm run eliminar`: Elimina una nota.
- `npm run salir`: Finaliza la aplicación.
- `npm run dev`: Ejecuta la aplicación en modo desarrollo con `nodemon`.
- `npm run lint`: Ejecuta ESLint para verificación de código.
- `npm run lint:fix`: Ejecuta ESLint y corrige errores de formato.

## Dependencias y Configuración de ESLint

- **Nodemon**: Ayuda a reiniciar la aplicación automáticamente en desarrollo.
- **ESLint**: Configurado para mantener un estilo de código consistente.
- **Globals**: Para definir variables globales.

## Ejemplo de Uso

```plaintext
--- Editor de Notas ---
1. Crear nueva nota
2. Editar nota existente
3. Eliminar nota
4. Salir
```

Este menú permite al usuario navegar entre las opciones y gestionar sus notas desde la consola.
