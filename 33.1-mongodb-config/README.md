# Configuración de MongoDB

## Exportar e Importar Datos

### Exportar Datos con `mongodump`

MongoDB permite exportar bases de datos y colecciones con `mongodump`.

- **Exportar una base de datos completa:**
  ```bash
  mongodump --db mydb
  mongodump --db mydb --out /ruta/de/salida
  ```
- **Exportar una colección específica:**
  ```bash
  mongodump --db mydb --collection mycollection
  mongodump --db mydb --collection mycollection --out /ruta/de/salida
  ```

### Importar Datos con `mongorestore`

Para restaurar datos exportados con `mongodump`, se usa `mongorestore`.

- **Restaurar una base de datos completa:**
  ```bash
  mongorestore --db mydb /ruta/de/salida/mydb
  ```
- **Restaurar una colección específica:**
  ```bash
  mongorestore --db mydb --collection mycollection /ruta/de/salida/mycollection.bson
  ```

## Índices en MongoDB

### Listar Índices

- Mostrar todos los índices de una colección:
  ```js
  db.collection.getIndexes();
  ```
- Mostrar información detallada de los índices:
  ```js
  db.collection.getIndexes({ full: true });
  ```

### Eliminar Índices

- Eliminar un índice específico:
  ```js
  db.collection.dropIndex({ campo: 1 });
  ```
- Eliminar todos los índices (excepto `_id`):
  ```js
  db.collection.dropIndexes();
  ```

### Crear Índices

MongoDB ofrece varios tipos de índices:

- **Índice simple:**
  ```js
  db.collection.createIndex({ campo: 1 });
  ```
- **Índice compuesto:**
  ```js
  db.collection.createIndex({ campo1: 1, campo2: -1 });
  ```
- **Índice de texto:**
  ```js
  db.collection.createIndex({ campo: "text" });
  ```
- **Índice hash:**
  ```js
  db.collection.createIndex({ campo: "hashed" });
  ```
- **Índice wildcard (comodín):**
  ```js
  db.collection.createIndex({ "$**": 1 });
  ```

### Opciones de Índices

Algunas opciones adicionales al crear índices:

```js
 db.collection.createIndex({ campo: 1 }, {
   name: 'index_name',
   unique: true,
   sparse: true,
   expireAfterSeconds: 3600,
   partialFilterExpression: { campo: { $gt: 0 } }
 });
```

## Gestión de Usuarios en MongoDB

### Listar Usuarios

```js
 db.getUsers();
```

### Crear Usuarios

- **Usuario administrador:**
  ```js
  db.createUser({
    user: "adminUser",
    pwd: "password",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
  });
  ```
- **Usuario con permisos sobre una base de datos específica:**
  ```js
  db.createUser({
    user: "appUser",
    pwd: "password",
    roles: [ { role: "readWrite", db: "myDatabase" } ]
  });
  ```

### Modificar Usuarios

```js
 db.updateUser("appUser", {
   roles: [ { role: "read", db: "otherDatabase" } ],
   pwd: "newPassword"
 });
```

### Eliminar Usuarios

```js
 db.dropUser("appUser");
```

### Autenticación de Usuarios

```js
 db.auth("appUser", "password");
```

## Despliegue de MongoDB

MongoDB permite diferentes configuraciones de despliegue:

- **Standalone (instancia única):** Ideal para pruebas y desarrollo.
- **Replica Set:** Para alta disponibilidad y redundancia de datos.
- **Sharded Cluster:** Para distribuir la carga entre múltiples servidores.

Para más información, consulta la [documentación oficial](https://www.mongodb.com/docs/manual/).