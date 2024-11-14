
# Resumen: Estructuración del Código Según el Patrón MVC

Este resumen cubre la organización del código según el patrón de diseño MVC (Model-View-Controller). MVC es un estándar que separa las responsabilidades de la aplicación en módulos, facilitando el mantenimiento y escalabilidad del proyecto.

## 1. Estructura de Carpetas

### Estructura Básica

La estructura típica de un proyecto organizado bajo MVC podría verse así:

```
project-root
|-- src
|   |-- controllers
|   |   `-- users.js
|   |-- loaders
|   |   `-- express.js
|   |-- models
|   |   `-- user.js
|   |-- routes
|   |   `-- index.js
|   |-- services
|   |   `-- userService.js
|   |-- utils
|   |   `-- logger.js
|-- .env
|-- README.md
|-- package.json
```

Cada carpeta tiene una función específica que se explica a continuación.

### 1.1 `src`

Contiene todo el código fuente de la aplicación.

#### - `loaders`

Aquí se colocan configuraciones de servicios que deben ejecutarse una vez al iniciar el servidor. Ejemplo: conexión a la base de datos.

#### - `routes`

Define las rutas (endpoints) de la aplicación y distribuye las peticiones a los controladores. Por ejemplo, en `routes/users.js`, podríamos tener rutas como `/users` para manejar operaciones de usuarios.

#### - `controllers`

Los controladores procesan las peticiones y llaman a los servicios necesarios. Son el "cerebro" de la aplicación, manejando la lógica principal. Ejemplo:

```javascript
const getUser = (req, res) => {
  const user = userService.findById(req.params.id);
  res.send(user);
};
```

#### - `services`

Los servicios encapsulan las interacciones con bases de datos o APIs externas. Esto permite que los controladores no tengan que preocuparse por detalles de implementación. Ejemplo:

```javascript
const createUser = (userData) => {
  // Aquí se guarda el usuario en la base de datos
};
```

#### - `models`

Define la estructura de los datos. Aquí se define el modelo de los datos tal como se almacenarán en la base de datos. Ejemplo de esquema de usuario:

```javascript
const userSchema = {
  name: String,
  email: String,
  password: String
};
```

#### - `utils`

Aquí se colocan funciones de apoyo, como el sistema de logs o manipulación de datos. Ejemplo:

```javascript
const logMessage = (message) => {
  console.log(`[LOG] ${message}`);
};
```

### 1.2 Ficheros en la Raíz

#### `.env`

Archivo que contiene variables de entorno, como configuraciones sensibles (API keys). Este archivo no debe incluirse en el repositorio.

#### `README.md`

Documentación básica del proyecto.

#### `package.json`

Configuración y dependencias del proyecto.

## 2. Pruebas (Tests)

Las pruebas se dividen en unitarias (evalúan pequeñas funciones o componentes) y de integración (evalúan cómo interactúan los componentes). Cada módulo puede tener sus pruebas específicas en la carpeta `test`, replicando la estructura de `src`.
