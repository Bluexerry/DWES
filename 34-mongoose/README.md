# Introducción a Mongoose

Mongoose es una biblioteca de modelado de datos para MongoDB y Node.js. Facilita la gestión de datos en bases de datos NoSQL al proporcionar una estructura similar a los ORM utilizados en bases de datos relacionales.

## Instalación

Para instalar Mongoose en un proyecto de Node.js, usa el siguiente comando:

```sh
npm i mongoose
```

## Conexión a MongoDB

Para conectarte a una base de datos MongoDB, puedes utilizar el siguiente código:

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
```

Este fragmento de código establece una conexión con una base de datos llamada `mydb` en un servidor local.

## Schemas en Mongoose

Mongoose permite definir esquemas para estructurar los documentos en MongoDB.

Ejemplo de un esquema básico para un usuario:

```js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

### Nested Schemas (Esquemas Anidados)

Puedes anidar esquemas dentro de otros para representar estructuras de datos más complejas.

```js
const addressSchema = new Schema({
  street: String,
  city: String,
  state: String,
  country: String,
  postalCode: String,
});

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
  address: addressSchema,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
```

## Operaciones CRUD con Mongoose

### Buscar Documentos

```js
const user = await User.find({ name: 'John Doe' });
```

### Insertar Documentos

```js
const user = new User({
  name: 'John Doe',
  email: 'johndoe@example.com',
  age: 30,
});

user.save();
```

### Actualizar Documentos

```js
User.updateOne({ name: 'John Doe' }, { age: 31 });
User.updateMany({ name: 'John Doe' }, { age: 31 });
```

### Eliminar Documentos

```js
User.deleteOne({ name: 'John Doe' });
User.deleteMany({ name: 'John Doe' });
```

## Optimización y Eficiencia en Mongoose

Para mejorar el rendimiento al trabajar con Mongoose:

- Usa `lean()` en consultas para reducir la carga de procesamiento.
- Indexa campos que se consultan frecuentemente.
- Usa `populate()` con precaución para evitar consultas innecesarias.
- Implementa paginación eficiente en grandes conjuntos de datos.

### Recursos Adicionales

- [Crear una API REST con Node.js y MongoDB](https://carlosazaustre.es/como-crear-una-api-rest-usando-node-js)
- [Paginación avanzada en MongoDB](https://dev.to/max_vynohradov/the-right-way-to-make-advanced-and-efficient-mongodb-pagination-16oa)
