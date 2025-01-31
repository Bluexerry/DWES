# Introducción al desarrollo web entorno servidor

## Contenidos

1. [Teoría](#teoría)  
   - [Queries](#queries)  
     - [Métodos](#métodos)  
     - [Paginado y orden](#paginado-y-orden)  
     - [Populate](#populate)  
     - [Virtuals](#virtuals)  
     - [Discriminators](#discriminators)  
   - [Plugins](#plugins)  
     - [mongoose-pagination-v2](#mongoose-pagination-v2)  
2. [Ejemplos](#ejemplos)  
   - [Paginado](#paginado)  
3. [Ejercicios](#ejercicios)  
   - [Validaciones](#validaciones)  
4. [Entregables](#entregables)  
   - [En clase](#en-clase)  
   - [Tarea](#tarea)  

---

## Teoría

### Queries

#### Métodos

- `find`
- `findBy`
- `findOne`
- `findAndUpdate`

#### Paginado y orden

- `skip`
- `limit`
- `sort`

#### Populate

**Ejemplo:**

```js
const result = await Model.find(filters).populate('field');
```

#### Virtuals

**Ejemplo:**

```js
const schema = new Schema({
  name: {
    first: String,
    last: String,
  },
});

schema.virtual('fullName').get(function () {
  return this.name.first + ' ' + this.name.last;
});
```

#### Discriminators

**Ejemplo con notificaciones:**

```js
const options = { discriminatorKey: 'kind' };

const notificationSchema = new Schema({
  message: String,
}, options);

const Notification = mongoose.model('Notification', notificationSchema);

const smsNotificationSchema = new Schema({
  phoneNumber: String,
}, options);

const SmsNotification = Notification.discriminator('SmsNotification', smsNotificationSchema);

const emailNotificationSchema = new Schema({
  emailAddress: String,
}, options);

const EmailNotification = Notification.discriminator('EmailNotification', emailNotificationSchema);

const smsNotification = new SmsNotification({ message: 'Your meeting is in 15 minutes' });

console.log(smsNotification.kind); // 'SmsNotification'
console.log(smsNotification instanceof SmsNotification); // true
console.log(smsNotification instanceof Notification); // true
```

---

## Plugins

### mongoose-pagination-v2

- [Documentación oficial](https://www.npmjs.com/package/mongoose-paginate-v2)
- [Videotutorial](https://www.youtube.com/watch?v=6hUUOZxVVCo)

---

## Ejemplos

### Paginado

```js
const result = await Model.find(filters).skip(offset).limit(limit);
```

---

**Referencias:**  

- [Mongoose Populate](https://mongoosejs.com/docs/populate.html)  
- [Mongoose Virtuals](https://mongoosejs.com/docs/guide.html#virtuals)  
- [Mongoose Discriminators](https://mongoosejs.com/docs/discriminators.html)  
- [Mongoose Pagination](https://www.bezkoder.com/node-js-mongodb-pagination/)  
