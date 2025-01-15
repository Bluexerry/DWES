# Proyecto: Aplicación Servidor con Express.js

## Resumen del Proyecto

Este proyecto es una aplicación servidor construida con Express.js que permite realizar peticiones a una API externa para obtener información de usuarios. A continuación, se detalla el funcionamiento y la estructura principal del proyecto:

---

## Estructura del Proyecto

### **Entrada del Servidor (index.js):**
- Importa la instancia de la aplicación desde `app.js` y la configuración desde `config.js`.
- Define el puerto en el que se ejecutará el servidor (por defecto, 3000).
- Inicia el servidor y lo pone en escucha en el puerto especificado, mostrando un mensaje en la consola cuando está corriendo.

### **Configuración de la Aplicación (src/app.js):**
- Crea una instancia de una aplicación Express.
- Configura middleware para parsear cuerpos de solicitudes JSON.
- Define las rutas principales de la API utilizando `apiRoutes.js` bajo el prefijo `/api`.
- Establece una ruta raíz (`/`) que responde con un mensaje de bienvenida.

### **Configuración General (src/config.js):**
- Centraliza la configuración de la aplicación:
  - Especifica el puerto de ejecución.
  - Define la URL base de la API externa (`https://jsonplaceholder.typicode.com`) que será consumida.

### **Rutas de la API (src/routes/apiRoutes.js):**
- Define una ruta `GET /user/:id` que actúa como puente entre el usuario y la API externa.
- Utiliza el servicio definido en `apiService.js` para obtener los datos del usuario basado en el ID proporcionado en la URL.
- Maneja posibles errores y devuelve respuestas adecuadas al cliente.

### **Servicios (src/services/apiService.js):**
- Implementa la lógica para consumir la API externa utilizando la biblioteca `axios`.
- La función `getUser(id)` realiza una petición `GET` a la API externa para obtener los datos del usuario especificado por su ID.
- Maneja errores en caso de que la petición falle, lanzando una excepción con un mensaje adecuado.

### **Configuración del Proyecto (package.json):**
- Define las dependencias necesarias como `express` y `axios`.
- Configura scripts básicos, como el script de test (actualmente configurado para mostrar un error si se ejecuta).

### **Documentación (README.md):**
- Proporciona una descripción general del proyecto y las instrucciones básicas para la instalación de dependencias.

### **Archivos y Carpetas Adicionales:**
- **Loaders, Controllers, Models, Utils:** Actualmente contienen comentarios indicando su propósito y están preparados para futuras implementaciones.

### **ESLint Configuración (eslint.config.mjs):**
- Configura ESLint para mantener la calidad y consistencia del código siguiendo las configuraciones recomendadas.

---

## Flujo de Funcionamiento

### **Inicio del Servidor:**
- Al ejecutar `index.js`, el servidor Express se inicia y comienza a escuchar en el puerto configurado.

### **Recepción de una Solicitud:**
- Cuando un cliente realiza una solicitud `GET` a la ruta `/api/user/:id`, la aplicación maneja la petición mediante el enrutador definido en `apiRoutes.js`.

### **Consumo de la API Externa:**
- El enrutador llama al servicio `getUser(id)` en `apiService.js`, que realiza una petición HTTP a la API externa `https://jsonplaceholder.typicode.com/users/:id` para obtener los datos del usuario solicitado.

### **Respuesta al Cliente:**
- Si la petición a la API externa es exitosa, los datos del usuario se envían de vuelta al cliente en formato JSON.
- Si ocurre un error durante la petición, se devuelve una respuesta de error con un mensaje apropiado.

---

## Características del Diseño

Este diseño modular permite una fácil escalabilidad y mantenimiento del proyecto, separando claramente las responsabilidades entre configuración, enrutamiento, servicios y controladores.