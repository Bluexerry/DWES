# Resumen del Documento: Debug NodeJS con VSCode

---

## Contenidos Principales

1. **Teoría**
   - **Debug con Chrome (Nativo en NodeJS)**:  
     Node.js permite realizar debugging en el navegador Chrome utilizando la opción `--inspect`. Esto se logra insertando la instrucción `debugger` en el código y ejecutándolo en modo depuración:

     ```bash
     node --inspect index.js
     ```

     Al abrir `chrome://inspect` en el navegador, es posible establecer puntos de interrupción y avanzar paso a paso en el código. Si hay conflictos con el puerto en Windows, se recomienda usar `--inspect-brk`.

   - **Debug con VSCode**:  
     Visual Studio Code ofrece una integración de depuración completa y más automatizada que el uso en navegador. A través del panel de depuración (Ctrl+Shift+D), es posible configurar un archivo `launch.json` en la carpeta `.vscode`, el cual permite definir las configuraciones de depuración de manera personalizada.

     - **Primera Configuración Básica**:  
       La configuración inicial en VSCode permite depurar el archivo abierto en el editor. Al crear `launch.json`, la configuración mínima para un archivo de Node.js se vería así:

       ```json
       {
         "version": "0.2.0",
         "configurations": [
           {
             "type": "pwa-node",
             "request": "launch",
             "name": "Launch Program",
             "program": "${file}",
             "skipFiles": ["<node_internals>/**"]
           }
         ]
       }
       ```

       Esto permite ejecutar y depurar el archivo actual en el editor.

     - **Launch.json**:  
       Este archivo permite personalizar las configuraciones de depuración para proyectos en Node.js, especificando variables y directorios. Se pueden definir configuraciones para ejecutar un archivo específico, establecer argumentos y parámetros adicionales, o capturar la salida en la consola de depuración.

     - **Breakpoints y Estado de Variables**:  
       Los puntos de interrupción (breakpoints) se pueden activar o desactivar individual o globalmente, y se muestran en el panel lateral de variables, el cual organiza las variables por alcance (scope). Esto permite observar y manipular el estado del programa en tiempo real.

     - **Panel de Inspección**:  
       Permite ver el valor de variables y expresiones, haciendo posible evaluar los estados intermedios del programa y realizar cambios sin detener la ejecución.

     - **Consola de Depuración**:  
       La consola permite ejecutar comandos y evaluar expresiones directamente mientras se está en modo de depuración. Esta herramienta es útil para pruebas rápidas de funciones o verificación de valores.

2. **Ejemplos de Configuración en `launch.json`**

   - **Configuración Básica para un Archivo Fijo**:  
     Ejecuta un archivo específico (por ejemplo, `index.js`), sin importar cuál esté abierto en el editor.

     ```json
     {
       "version": "0.2.0",
       "configurations": [
         {
           "type": "node",
           "request": "launch",
           "name": "Launch API",
           "program": "${workspaceFolder}/src/index.js",
           "cwd": "${workspaceFolder}",
           "skipFiles": ["<node_internals>/**"]
         }
       ]
     }
     ```

   - **Configuración para Ejecutar el Archivo Actual**:  
     Ideal para ejecutar y depurar el archivo que se encuentra abierto en el editor.

     ```json
     {
       "version": "0.2.0",
       "configurations": [
         {
           "type": "node",
           "request": "launch",
           "name": "Launch Current Opened File",
           "program": "${file}"
         }
       ]
     }
     ```

   - **Configuración con Argumentos para Tests**:  
     Configuración extendida para ejecutar tests con argumentos específicos (por ejemplo, usando AVA). Esto permite personalizar las pruebas y capturar la salida en un formato específico.

     ```json
     {
       "version": "0.2.0",
       "configurations": [
         {
           "type": "node",
           "request": "launch",
           "name": "Launch API Test",
           "cwd": "${workspaceFolder}",
           "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/ava",
           "runtimeArgs": ["${file}"],
           "port": 9229,
           "skipFiles": ["<node_internals>/**/*.js"]
         }
       ]
     }
     ```

   - **Configuración Extendida**:  
     Configuración que incluye opciones para ejecutar archivos específicos, manejar tests y utilizar el archivo abierto en el editor, permitiendo alternar entre diferentes modos de depuración en un solo archivo de configuración.

---

## Recursos Adicionales

El documento incluye enlaces a la documentación oficial de Visual Studio Code y referencias de configuración para `launch.json`, lo cual facilita la personalización avanzada de entornos de depuración.

---

Este resumen proporciona una guía práctica para configurar y utilizar las herramientas de depuración de Node.js en VSCode, abarcando desde configuraciones básicas hasta ajustes personalizados en `launch.json` para diferentes necesidades de desarrollo y testing.
