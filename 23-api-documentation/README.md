
# Documentación de una API con OpenAPI (Swagger)

## Introducción a OpenAPI (Swagger)
OpenAPI, anteriormente conocido como Swagger, es un estándar abierto para describir y documentar APIs RESTful. Facilita la comunicación entre desarrolladores y permite la generación automática de documentación interactiva, pruebas y código.

### ¿Por qué OpenAPI?
1. **Estandarización**: Proporciona un formato estándar para describir APIs.
2. **Documentación automatizada**: Genera documentación clara y completa.
3. **Compatibilidad con herramientas**: Muchas herramientas de desarrollo y prueba integran soporte para OpenAPI.

### Componentes principales de OpenAPI
- **Especificación OpenAPI**: Define cómo se describe la estructura y funcionamiento de una API.
- **Swagger UI**: Una interfaz visual interactiva para probar endpoints.
- **Herramientas relacionadas**: Incluyen editores en línea, generadores de código y más.

---

## Conceptos clave de OpenAPI
1. **Path**: Define las rutas de acceso a los recursos de la API.
2. **Parameters**: 
   - **Query**: Parámetros enviados en la URL.
   - **Path**: Parámetros que forman parte de la ruta.
   - **Body**: Datos enviados en el cuerpo de las solicitudes.
3. **Responses**: Estructura de las respuestas de la API, incluyendo códigos de estado (e.g., 200, 404).
4. **Formats**: Especifica formatos de datos como JSON, XML, etc.
5. **Esquemas avanzados**:
   - **oneOf / anyOf / allOf**: Combinaciones de estructuras de datos.
   - **ReadOnly / WriteOnly**: Restricciones en propiedades de los esquemas.
   - **Discriminators**: Para manejar herencias en esquemas.
6. **Security**: Métodos de autenticación como OAuth, API Keys, etc.

---

## Documentación y buenas prácticas
1. **Documentación oficial**:
   - Se encuentra en [swagger.io/docs](https://swagger.io/docs/specification/about/).
   - Incluye ejemplos, especificaciones y prácticas recomendadas.
2. **Buenas prácticas**:
   - Estructura modular: Dividir especificaciones en archivos pequeños.
   - Uso de herramientas de validación para mantener la precisión de la documentación.
3. **Herramientas clave**:
   - **Editor online**: [editor.swagger.io](https://editor.swagger.io/).
   - Generadores de código: Facilitan la implementación inicial.

---

## División y estructuración en archivos
La modularización es una técnica recomendada para manejar especificaciones grandes.

### Archivos comunes
1. **Base**: Contiene metadatos generales como título, versión y descripciones.
2. **Paths**: Define los endpoints y métodos soportados por la API.
3. **Schemas**: Describe los modelos de datos utilizados en las respuestas y solicitudes.
4. **Responses**: Estructura de las posibles respuestas.
5. **Security**: Configuración de autenticación.
6. **Examples**: Proporciona ejemplos de solicitudes y respuestas.

### Implementación en Node.js
El siguiente ejemplo muestra cómo transformar archivos YAML en JSON:

```javascript
const jsYaml = require('js-yaml');
const path = require('path');
const fs = require('fs');

function parseYamlFolder(folder) {
  return fs.readdirSync(path.join(__dirname, folder)).reduce((acc, file) => {
    const json = jsYaml.safeLoad(fs.readFileSync(path.resolve(__dirname, folder, file), 'utf8'));
    return { ...acc, ...json };
  }, {});
}

module.exports = {
  apiDoc: {
    openapi: '3.0.2',
    info: { title: 'Mi Aplicación', version: '1.0.0' },
    components: {
      schemas: parseYamlFolder('./schemas'),
      responses: parseYamlFolder('./responses'),
    },
    paths: {},
  },
};
```

---

## Recursos adicionales
- Documentación oficial: [OpenAPI Specification](https://swagger.io/specification/).
- Ejemplo práctico: [PetStore](https://petstore.swagger.io/).