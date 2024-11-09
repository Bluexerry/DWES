# Proyecto de Notas y Descomposición de URLs

Este proyecto contiene varios módulos que permiten interactuar con el sistema de archivos, gestionar notas y descomponer URLs. A continuación se describen las funciones principales de los scripts incluidos en el proyecto.

## 1. Editor de Notas

### Descripción

El primer archivo permite crear, editar y eliminar notas guardadas en un directorio específico. Proporciona una interfaz de línea de comandos que guía al usuario para realizar las acciones deseadas.

### Funciones

- **Crear una nueva nota**:
  - Permite al usuario escribir el contenido de una nueva nota, que se guarda en el directorio `notas` con la extensión `.note`. El usuario debe presionar Enter dos veces para finalizar y guardar la nota.
  
- **Editar una nota existente**:
  - Muestra las notas disponibles en el directorio `notas` y permite al usuario elegir una para editar. El contenido de la nota seleccionada se puede modificar, y al finalizar, el archivo se actualiza con el nuevo contenido.
  
- **Eliminar una nota**:
  - Muestra las notas disponibles en el directorio `notas` y permite al usuario elegir una para eliminar. El archivo correspondiente se elimina permanentemente del sistema.
  
### Archivos y Directorios

- **Directorio `notas`**: Contiene todas las notas guardadas como archivos `.note`.

### Uso

1. Al ejecutar el script, se muestra un menú con las opciones disponibles:
   - Crear una nueva nota.
   - Editar una nota existente.
   - Eliminar una nota.
   - Salir.

2. Cada opción ejecuta la función correspondiente, solicitando al usuario información adicional según sea necesario.

---

## 2. Descomposición de URL

### Descripción

El segundo archivo define una función `descomposeUrl` que toma una URL como argumento y la descompone en diferentes componentes como protocolo, dominio, ruta y parámetros de búsqueda.

### Funciones

- **descomposeUrl(url)**:
  - Toma una URL como cadena de texto y la convierte en un objeto `URL` para obtener y manipular los diferentes componentes.
  - Devuelve un objeto con las siguientes propiedades:
    - `protocol`: El protocolo de la URL (e.g., "https").
    - `ipAdress`: No resuelto en este código, se puede implementar con una búsqueda DNS.
    - `subDomain`: Establecido como "www" de manera predeterminada.
    - `domainName`: Establecido como "google.com" de forma estática, aunque podría ser dinámico con `objUrl.hostname`.
    - `folderTree`: Un array con las carpetas de la ruta de la URL.
    - `targetFile`: El archivo o recurso final de la ruta de la URL.
    - `argumentsFile`: Los parámetros de la URL (e.g., "?ok=1").

### Ejemplo de Uso

```javascript
descomposeUrl("https://www.google.com/search/test.js?ok=1");
```

---

## 3. Lectura de Archivos con `fs`

### Descripción

Este módulo permite leer el contenido de un archivo de texto proporcionado como argumento en la línea de comandos. Utiliza el módulo `fs` (file system) para acceder al sistema de archivos y obtener el contenido del archivo.

### Funciones

- **Lectura de un archivo**:
  - El script toma el nombre de un archivo como argumento de la línea de comandos y verifica si ha sido proporcionado.
  - Si el nombre del archivo no se ha especificado, muestra un mensaje pidiendo que se proporcione el nombre del archivo.
  - Si el archivo existe, utiliza el método `readFile` de `fs` para leerlo de manera asíncrona y mostrar su contenido en la consola.
  - Si ocurre un error al intentar leer el archivo (por ejemplo, si el archivo no existe o hay problemas de permisos), se muestra un mensaje de error con la descripción del problema.

### Archivos y Directorios

No hay archivos ni directorios adicionales específicos para este módulo, ya que se trabaja directamente con el archivo cuya ruta se pasa como argumento.

### Uso

1. El usuario debe proporcionar el nombre del archivo como argumento al ejecutar el script.

   Ejemplo de ejecución:

   ```bash
   node leerArchivo.js archivo.txt
   ```

---

## 4. Configuración del Proyecto en `package.json`

### Descripción

Este archivo `package.json` configura el proyecto para gestionar las dependencias y los scripts necesarios para ejecutar las distintas funcionalidades, como la edición de notas y la lectura de archivos. Además, especifica el punto de entrada del proyecto y otros detalles como el nombre y la versión.

### Estructura y Campos

- **name**: El nombre del proyecto. En este caso, se llama `editor_notas`.
- **version**: La versión actual del proyecto, definida como `1.0.0`.
- **main**: El archivo principal del proyecto, en este caso `editorNotas.js`, que es el encargado de gestionar la edición de notas.
- **scripts**: Contiene una serie de comandos personalizados que se pueden ejecutar a través de npm. Algunos ejemplos son:
  - `"notas"`: Ejecuta el script `editorNotas.js` para gestionar las notas.
  - `"crear"`: Ejecuta el script `editorNotas.js` con el parámetro `1` para crear una nueva nota.
  - `"editar"`: Ejecuta el script `editorNotas.js` con el parámetro `2` para editar una nota existente.
  - `"eliminar"`: Ejecuta el script `editorNotas.js` con el parámetro `3` para eliminar una nota.
  - `"salir"`: Ejecuta el script `editorNotas.js` con el parámetro `4` para salir del editor de notas.

- **keywords**: Lista de palabras clave relacionadas con el proyecto. En este caso está vacío.
- **author**: El autor del proyecto, que está vacío en este ejemplo.
- **license**: El tipo de licencia del proyecto, que es `ISC`.
- **description**: Una breve descripción del proyecto, que está vacía en este archivo.
- **dependencies**: Aquí se especifican las dependencias del proyecto. En este caso, `editor_notas` se hace referencia a un archivo local.
