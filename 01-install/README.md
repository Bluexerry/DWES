# Resumen del Documento: Instalación del IDE y Entorno de Desarrollo

---

## Contenidos Principales

1. **Teoría**
   - **Introducción a la programación web en el servidor**  
     Conceptos fundamentales sobre arquitectura web (monolítica vs cliente/servidor) y diferencias entre web estática y dinámica.

   - **Estado del arte de la programación web**  
     Descripción de lenguajes y frameworks de backend, y un esquema de arquitectura completa que incluye relaciones con bases de datos y despliegue.

   - **Stack tecnológico**  
     Stack seleccionado para el entorno de desarrollo:
     - **Lenguaje**: NodeJS
     - **Framework web**: ExpressJS
     - **Base de datos**: MongoDB
     - **Despliegue de servicios**: Docker
     - **CI/CD**: Heroku + GitHub

   - **Entorno de desarrollo**  
     Herramientas y configuraciones necesarias para el desarrollo:
     - **NodeJS / NPM / NVM**: Instalación según sistema operativo (Linux/Mac o Windows).
     - **VSCode**: Instalación recomendada de plugins:
       - Imprescindibles: Docker, ESLint/Prettify, Git Lens, Git Graph.
       - Opcionales: Beautify JSON, Better Comments, Bracket Pair Colorizer 2.
     - **Otras herramientas**:
       - Git/GitHub para control de versiones.
       - Docker y Docker Compose para contenedores.
       - **Recomendaciones adicionales**: Uso de Ubuntu como sistema operativo y de ZSH con Oh-my-ZSH para la terminal.

   - **Markdown**  
     Herramienta para la escritura en texto plano con formato. Se recomienda el uso de:
     - **CommonMark** y **Pandoc** para conversión.
     - Plugins de VSCode como Markdown Table, markdownlint y vscode-pandoc.

   - **Repaso de GIT**  
     Revisión de comandos básicos de Git para la gestión de versiones:
     - `clone`: Descargar un repositorio.
     - `status`, `add`, `commit`, `push`, `pull`: Comandos de uso frecuente.
     - `stash` y `branch`: Para guardar temporalmente cambios y gestionar ramas.
     - Secuencia para subir todo al repositorio:

       ```bash
       git status
       git add .
       git commit -m "MENSAJE"
       git push
       ```

---

Este resumen proporciona una guía paso a paso para la instalación y configuración del entorno de desarrollo con VSCode, Git, NodeJS, Docker y otras herramientas esenciales, así como el uso de Markdown y Git.
