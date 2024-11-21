
# Resumen ampliado: RESTful API

## Introducción a RESTful API
Una RESTful API sigue principios arquitectónicos para estructurar servicios web basados en recursos, utilizando métodos HTTP para interactuar con ellos. Este diseño permite una comunicación eficiente y escalable entre clientes y servidores.

### Principios clave de REST
1. **Recursos identificables**: Cada recurso es único y se identifica con una URI.
   - Ejemplo: `/users` para listar usuarios o `/users/{id}` para obtener uno específico.
2. **Uso de métodos HTTP**: Define las acciones que se pueden realizar sobre los recursos.
3. **Sin estado (Stateless)**: Cada solicitud del cliente contiene toda la información necesaria.
4. **Caché**: Facilita la reutilización de respuestas para mejorar el rendimiento.
5. **HATEOAS**: Los clientes reciben enlaces para interactuar con recursos relacionados.

---

## Métodos HTTP en REST y ejemplos prácticos
1. **GET**: Recuperar información de un recurso.
   - Ejemplo:
     ```http
     GET /users HTTP/1.1
     Host: api.ejemplo.com
     ```
     Respuesta:
     ```json
     [
       {"id": 1, "name": "Alice"},
       {"id": 2, "name": "Bob"}
     ]
     ```
2. **POST**: Crear un nuevo recurso.
   - Ejemplo:
     ```http
     POST /users HTTP/1.1
     Content-Type: application/json
     
     {
       "name": "Charlie",
       "email": "charlie@example.com"
     }
     ```
3. **PUT**: Sobrescribir completamente un recurso.
   - Ejemplo:
     ```http
     PUT /users/1 HTTP/1.1
     Content-Type: application/json
     
     {
       "name": "Alice Updated",
       "email": "alice_updated@example.com"
     }
     ```
4. **PATCH**: Actualizar parcialmente un recurso.
   - Ejemplo:
     ```http
     PATCH /users/1 HTTP/1.1
     Content-Type: application/json
     
     {
       "email": "alice_new@example.com"
     }
     ```
5. **DELETE**: Eliminar un recurso.
   - Ejemplo:
     ```http
     DELETE /users/1 HTTP/1.1
     ```

---

## Buenas prácticas en REST
1. **Rutas basadas en sustantivos**:
   - Evita el uso de verbos en las rutas, ya que las acciones están implícitas en los métodos HTTP.
   - Correcto: `/users`, `/products`
   - Incorrecto: `/getUsers`, `/createUser`

2. **Uso adecuado de códigos HTTP**:
   - **200 OK**: Respuesta exitosa.
   - **201 Created**: Recurso creado correctamente.
   - **400 Bad Request**: Solicitud malformada.
   - **404 Not Found**: Recurso no encontrado.
   - **500 Internal Server Error**: Error del servidor.

3. **Estructura de errores clara y consistente**:
   - Ejemplo de respuesta de error:
     ```json
     {
       "code": 404,
       "error": "Not Found",
       "message": "El recurso solicitado no existe"
     }
     ```

4. **Filtrado, ordenación y paginación**:
   - **Filtrado**:
     ```http
     GET /users?role=admin
     ```
   - **Ordenación**:
     ```http
     GET /users?sort=created_at&order=desc
     ```
   - **Paginación**:
     ```http
     GET /users?page=2&limit=10
     ```

5. **Versionado de API**:
   - Incluye la versión en la URI para evitar conflictos al realizar cambios mayores.
   - Ejemplo: `/api/v1/users`.

---

## Alternativas a REST
1. **SOAP**:
   - Basado en XML, ofrece un protocolo rígido para la comunicación entre sistemas.
   - Desventajas: Complejidad y sobrecarga en comparación con REST.
2. **GraphQL**:
   - Permite a los clientes solicitar únicamente los datos que necesitan.
   - Ejemplo de consulta:
     ```graphql
     query {
       user(id: 1) {
         name
         email
       }
     }
     ```
3. **OData**:
   - Extensión de REST con funcionalidades avanzadas para consultas.
   - Ejemplo de consulta filtrada:
     ```http
     GET /users?$filter=age gt 20&$orderby=name asc
     ```

---

## Conclusión
RESTful API sigue siendo un estándar versátil y ampliamente adoptado, mientras que alternativas como GraphQL y OData destacan en casos específicos donde la flexibilidad o las capacidades avanzadas son críticas.
