# DWES - Desarrollo Web en Entorno Servidor

Este repositorio contiene los trabajos, prácticas y ejemplos realizados en el curso de **Desarrollo Web en Entorno Servidor (DWES)**, con un enfoque en el desarrollo de aplicaciones web del lado del servidor utilizando tecnologías modernas como **Node.js**, **Express**, **Docker**, y **GitHub**. Está organizado para que sirva como una referencia práctica y un recurso de estudio, facilitando tanto el aprendizaje como la implementación de conceptos y tecnologías utilizadas en el desarrollo web actual.

## Contenidos

El repositorio abarca temas clave del desarrollo web en el servidor, desde la configuración inicial del entorno hasta el despliegue y la gestión de versiones. Cada sección contiene documentación detallada y ejemplos prácticos que te permitirán afianzar los conocimientos adquiridos.

### Temas principales

1. **Instalación y Configuración del Entorno**
   - **Configuración de herramientas esenciales** como **Node.js**, **NPM**, **NVM**, **Docker** y **Docker Compose**.
   - **IDE y Plugins Recomendados**: Configuración de Visual Studio Code con plugins útiles como ESLint, Prettify, Git Lens, Git Graph, entre otros.

2. **Desarrollo con Node.js y Express**
   - **Creación de Servidores HTTP**: Ejemplos de creación de servidores básicos con Node.js y manejo de peticiones HTTP.
   - **ExpressJS**: Configuración de aplicaciones Express, manejo de rutas, respuestas HTTP y configuración de servicios de archivos estáticos.
   - **Peticiones y Respuestas**: Explicación detallada de los objetos `request` y `response` en Express, incluyendo el uso de `query`, `params`, `headers`, y `body`.

3. **Docker y Docker Compose**
   - **Introducción a Docker**: Conceptos básicos sobre imágenes, contenedores, volúmenes y redes en Docker.
   - **Despliegue con Docker Compose**: Ejemplo de un archivo `docker-compose.yml` para gestionar servicios de desarrollo en contenedores.
   - Uso de Docker para ejecutar **Node-RED** y servicios externos, permitiendo una fácil integración en contenedores aislados.

4. **Node-RED y NGrok**
   - **Node-RED**: Configuración de flujos de trabajo mediante una interfaz gráfica en el navegador, ideal para programación **low-code**.
   - **NGrok**: Herramienta para exponer servicios locales a través de internet, útil para pruebas externas de servicios desplegados en Node-RED o cualquier otra aplicación.

5. **Markdown para Documentación**
   - Uso de **Markdown** para documentar el código y los proyectos, con herramientas como **CommonMark** y **Pandoc**.
   - Plugins de **VSCode** recomendados para facilitar la edición de Markdown: Markdown Table, markdownlint y vscode-pandoc.

6. **Control de Versiones con Git y GitHub**
   - **Comandos de Git**: Clonar, agregar, hacer commits, push, pull, stash, y branch.
   - **Flujo de trabajo básico**: Secuencia recomendada para gestionar y subir cambios en el repositorio.
   - Mejores prácticas para trabajo colaborativo, manejo de ramas y CI/CD, incluyendo integración con plataformas como **GitHub Actions**.

7. **Despliegue y Testing**
   - Despliegue de aplicaciones usando **Docker**, incluyendo la integración con GitHub para automatizar el flujo de trabajo.
   - Pruebas de servicios web con herramientas como **Curl** para realizar solicitudes HTTP y verificar respuestas.
   - Técnicas para realizar pruebas de integración y pruebas de carga para evaluar el rendimiento de aplicaciones desplegadas.

## Estructura del Repositorio

Cada tema está organizado en carpetas específicas y contiene ejemplos prácticos y documentación para facilitar el seguimiento. Las carpetas están organizadas por módulos y prácticas para un acceso rápido y ordenado a los materiales del curso.

## Requisitos

Para aprovechar el contenido de este repositorio, asegúrate de tener instalado:

- [Node.js y NPM](https://nodejs.org/) (preferiblemente usando **NVM** para gestión de versiones).
- [Docker y Docker Compose](https://www.docker.com/).
- [VSCode](https://code.visualstudio.com/) o un editor compatible con los plugins recomendados.

## Uso del Repositorio

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu_usuario/dwes-repo.git
   cd dwes-repo
   ```

2. Instala las dependencias necesarias en tu entorno local, por ejemplo:

   ```bash
   npm install
   ```

3. Si estás utilizando Docker, puedes levantar los servicios utilizando:

   ```bash
   docker-compose up
   ```

4. Para contribuir o agregar ejemplos, crea una nueva rama y realiza los cambios correspondientes:

   ```bash
    gitcheckout -b nueva-funcionalidad
    git commit -m "Descripción de los cambios"
    git push origin nueva-funcionalidad
   ```
