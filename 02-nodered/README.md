# Resumen del Documento: Despliegue Básico con Docker para Desarrollo

---

## Contenidos Principales

1. **Teoría**
   - **Docker Básico**  
     Docker es una plataforma que permite ejecutar y gestionar contenedores, los cuales encapsulan aplicaciones y sus dependencias en entornos aislados. Docker utiliza:

     - **Imágenes**: Plantillas para crear contenedores. Las imágenes pueden descargarse de repositorios si no están disponibles localmente.
     - **Contenedores**: Instancias de imágenes que ejecutan aplicaciones.
     - **Volúmenes**: Almacenan datos persistentes entre reinicios de contenedores.
     - **Redes**: Facilitan la comunicación entre contenedores y con el sistema host.

     Ejemplo para arrancar Node-RED en un contenedor Docker:

     ```bash
     docker run -it -p 1880:1880 -v node_red_data:/data --name mynodered nodered/node-red
     ```

   - **Docker-Compose**  
     Docker Compose permite definir y gestionar múltiples contenedores en un solo archivo YAML. Comandos básicos:

     - `docker-compose up -d`: Inicia los servicios en segundo plano.
     - `docker-compose down`: Detiene y elimina los contenedores.
     - `docker-compose -f <archivo.yml> up -d`: Ejecuta un archivo específico de configuración.

     Ejemplo de archivo `docker-compose.yml` para Node-RED:

     ```yaml
     version: "3.7"
     services:
       node-red:
         image: nodered/node-red:latest
         ports:
           - "1880:1880"
         volumes:
           - node-red-data:/data
     volumes:
       node-red-data:
     ```

   - **Node-RED**  
     Node-RED es una herramienta de programación low-code que permite crear flujos de datos mediante una interfaz gráfica en el navegador, conectando nodos para realizar procesos automatizados. Muy útil para desarrollo rápido y pruebas.

   - **Curl**  
     Curl es una herramienta de línea de comandos para realizar solicitudes HTTP, útil para probar y consultar servicios web. Ejemplo:

     ```bash
     curl http://wttr.in/El+Puerto+de+Santa+Maria
     ```

   - **NGrok**  
     NGrok permite exponer un servicio local a través de internet mediante la creación de túneles seguros. Útil para pruebas remotas.

2. **Ejemplos de Despliegue y Flujo**
   - **Básico**  
     Ejemplo de contenedor simple de Node-RED ejecutando un flujo mínimo de inyección y visualización.
   - **Flujo Completo de Servicio Web**  
     Ejemplo de creación de un servicio web en Node-RED, desde la inyección de datos hasta la visualización del resultado en un navegador, mediante NGrok para pruebas externas.

---

Este resumen ofrece una guía para implementar un entorno de desarrollo en Docker con Node-RED, desde la instalación y configuración básica hasta el despliegue de servicios accesibles externamente mediante NGrok.
