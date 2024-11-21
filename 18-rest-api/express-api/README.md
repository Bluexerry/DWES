
# Comparativa: REST vs OData vs GraphQL

## Introducción

Las APIs son una parte esencial del desarrollo web y móvil, y existen diversas tecnologías para implementarlas. En este documento, comparamos tres enfoques populares: REST, OData y GraphQL.

## REST

- **Definición**: Es un estilo arquitectónico para diseñar servicios web basado en recursos. Usa métodos HTTP (GET, POST, PUT, DELETE, etc.).
- **Ventajas**:
  - Simplicidad y amplia adopción.
  - Basado en estándares.
  - Compatible con caché HTTP.
- **Desventajas**:
  - Overfetching: se obtienen más datos de los necesarios.
  - Subfetching: múltiples llamadas para datos relacionados.

## OData

- **Definición**: Protocolo basado en REST para consultas y manipulación de datos.
- **Ventajas**:
  - Incluye capacidades avanzadas como filtrado, ordenación y paginación.
  - Estandarizado por OASIS.
- **Desventajas**:
  - Más complejo que REST estándar.
  - Comunidad más pequeña.

## GraphQL

- **Definición**: Lenguaje de consulta para APIs desarrollado por Facebook.
- **Ventajas**:
  - Permite obtener exactamente los datos necesarios.
  - Ideal para aplicaciones con datos complejos y relaciones.
  - Reduce el número de llamadas.
- **Desventajas**:
  - Mayor curva de aprendizaje.
  - Complejidad en la configuración inicial.

## Comparativa

| Característica       | REST               | OData              | GraphQL           |
|----------------------|--------------------|--------------------|-------------------|
| Simplicidad          | Alta               | Media              | Baja              |
| Flexibilidad         | Baja               | Media              | Alta              |
| Overfetching/Subfetching | Sí                | Parcial            | No                |
| Comunidad y Soporte  | Muy amplia         | Limitada           | Amplia            |
| Curva de Aprendizaje | Baja               | Media              | Alta              |

---

## Ejemplo práctico: GraphQL con Node.js

Este ejemplo implementa un servidor GraphQL básico para gestionar usuarios.

### Dependencias

```bash
npm init -y
npm install express express-graphql graphql
```

### Código

```javascript
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Definir esquema GraphQL
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUser(id: ID!): User
    listUsers: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`);

// Datos en memoria
const users = [];
let idCounter = 1;

// Resolver funciones
const root = {
  getUser: ({ id }) => users.find(user => user.id == id),
  listUsers: () => users,
  createUser: ({ name, email }) => {
    const user = { id: idCounter++, name, email };
    users.push(user);
    return user;
  },
};

// Configuración del servidor
const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true, // Interfaz gráfica para pruebas
}));

app.listen(4000, () => console.log('Servidor GraphQL corriendo en http://localhost:4000/graphql'));
```

### Cómo probar

1. Arranca el servidor con `node server.js`.
2. Visita `http://localhost:4000/graphql` y realiza consultas como:
   - Crear usuario:

     ```graphql
     mutation {
       createUser(name: "John Doe", email: "john@example.com") {
         id
         name
         email
       }
     }
     ```

   - Listar usuarios:

     ```graphql
     query {
       listUsers {
         id
         name
         email
       }
     }
     ```

   - Obtener usuario por ID:

     ```graphql
     query {
       getUser(id: 1) {
         name
         email
       }
     }
     ```

---

## Conclusión

Aunque REST sigue siendo popular y útil para aplicaciones simples, GraphQL ofrece una mayor flexibilidad y eficiencia en la gestión de datos. Para este ejercicio, hemos seleccionado GraphQL por su capacidad de adaptarse a las necesidades modernas.
