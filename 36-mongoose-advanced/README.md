# Introducción al desarrollo web entorno servidor

## Contenidos

1. [Teoría](#teoría)  
   - [Hooks](#hooks)  
     - [Pre](#pre)  
     - [Post](#post)  
   - [Tipos de schemas](#tipos-de-schemas)  

---

## Teoría

### Hooks

Mongoose permite definir hooks para ejecutar código antes o después de ciertas acciones.

**Sintaxis:**

```js
schema.HOOK(METHOD, FUNCTION);
```

#### Pre

Se ejecuta antes de una acción específica:

```js
schema.pre('save', function (next) {
  // Código a ejecutar antes de guardar
  next();
});
```

#### Post

Se ejecuta después de una acción específica:

```js
schema.post('save', function (doc, next) {
  // Código a ejecutar después de guardar
  next();
});
```

También es posible definir hooks para múltiples métodos:

```js
schema.post(['findOne', 'findOneAndUpdate'], function (next) {
  // Código a ejecutar después de findOne y findOneAndUpdate
  next();
});
```

---

### Tipos de Schemas

Mongoose ofrece diferentes tipos de datos para definir esquemas en MongoDB:

```js
const schema = new Schema({
  name: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now },
  age: { type: Number, min: 18, max: 65, required: true },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  decimal: Schema.Types.Decimal128,
  array: [],
  ofString: [String],
  ofNumber: [Number],
  ofDates: [Date],
  ofBuffer: [Buffer],
  ofBoolean: [Boolean],
  ofMixed: [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  ofArrays: [[]],
  ofArrayOfNumbers: [[Number]],
  nested: {
    stuff: { type: String, lowercase: true, trim: true },
  },
  map: Map,
  mapOfString: {
    type: Map,
    of: String,
  },
});
```

---

**Referencias:**  

- [Mongoose Hooks](https://mongoosejs.com/docs/middleware.html)  
- [Mongoose Schema Types](https://mongoosejs.com/docs/schematypes.html)  
