# Peticiones a Servicios Externos

---

## Contenido

1. [Teoría](#teoría)
   - [Introducción a Peticiones a Servicios Externos](#introducción-a-peticiones-a-servicios-externos)
   - [Bibliotecas Comunes para Peticiones](#bibliotecas-comunes-para-peticiones)

2. [Ejemplos](#ejemplos)
   - [Uso de Axios](#uso-de-axios)
     - [GET](#get-con-axios)
     - [POST](#post-con-axios)
   - [Uso de Got](#uso-de-got)
     - [GET](#get-con-got)
     - [POST](#post-con-got)

3. [Ejercicios](#ejercicios)

4. [Entregables](#entregables)
   - [En clase](#en-clase)
   - [Tarea](#tarea)

---

## Teoría

### Introducción a Peticiones a Servicios Externos

Cuando desarrollamos aplicaciones, a menudo necesitamos interactuar con servicios externos para obtener o enviar datos. Esto se logra a través de peticiones a APIs (Interfaces de Programación de Aplicaciones) y otros servicios web.

### Bibliotecas Comunes para Peticiones

A partir de la versión 18, Node.js cuenta con el módulo `fetch` de forma nativa.

Existen varias bibliotecas en Node.js que facilitan la realización de peticiones HTTP. Algunas de las más utilizadas son:

- **axios**: Una biblioteca Promise-based que proporciona una interfaz fácil de usar para realizar peticiones HTTP.
- **got**: Una biblioteca liviana y rápida para realizar peticiones HTTP con soporte para streams y Promise.
- **node-fetch**: Un módulo que ofrece una interfaz de `window.fetch` compatible con Node.js.

---

## Ejemplos

### Uso de Axios

#### GET con Axios
```javascript
const axios = require('axios');

async function getUserData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        console.log('Datos del usuario:', response.data);
    } catch (error) {
        console.error('Error al obtener datos del usuario:', error.message);
    }
}

getUserData();
```

#### POST con Axios
```javascript
const axios = require('axios');

async function sendDataToApi() {
    const dataToSend = {
        // ... datos a enviar
    };

    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', dataToSend);
        console.log('Respuesta de la API después de enviar datos:', response.data);
    } catch (error) {
        console.error('Error al enviar datos a la API:', error.message);
    }
}

sendDataToApi();
```

### Uso de Got

#### GET con Got
```javascript
const got = require('got');

async function getPostData() {
    try {
        const response = await got('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Datos del post:', response.body);
    } catch (error) {
        console.error('Error al obtener datos del post:', error.message);
    }
}

getPostData();
```

#### POST con Got
```javascript
const got = require('got');

async function postDataToApi() {
    const dataToSend = {
        title: 'Nuevo Post',
        body: 'Contenido del nuevo post',
        userId: 1,
    };

    try {
        const response = await got.post('https://jsonplaceholder.typicode.com/posts', {
            json: dataToSend,
            responseType: 'json',
        });

        console.log('Respuesta de la API después de enviar datos:', response.body);
    } catch (error) {
        console.error('Error al enviar datos a la API:', error.message);
    }
}

postDataToApi();
```

---

## Ejercicios

Buscar e integrar una API en nuestro servidor.

Fuentes sugeridas:
- [RapidAPI](https://rapidapi.com/)
- [Zylalabs](https://zylalabs.com/)
- [Public APIs by Anna](https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/)
- [Public APIs GitHub](https://github.com/public-apis/public-apis)
- [Public APIs by Sergio](https://sergiofrancodev.com/recursos/10-apis-gratuitas-que-todo-desarrollador-deberia-conocer/)

Ideas:
- [Notion API](https://developers.notion.com/)

---

## Entregables

### En clase

1. Explorar la documentación de una API de tu elección.
2. Crear un servicio que consuma una API.

### Tarea

1. Crear una aplicación (servidor) simple que realice peticiones a esa API y muestre la información obtenida.
   - Crear una ruta GET que haga de puente entre el usuario y la API a consultar.
   - Adaptar el uso de filtros, orden y paginado si procede.
