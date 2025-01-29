# MongoDB Aggregation Framework

## Introducción

MongoDB proporciona el **Aggregation Framework**, una poderosa herramienta para realizar consultas avanzadas y procesamiento de datos en colecciones. Funciona mediante un **pipeline de agregación**, donde los documentos pasan por una serie de etapas que transforman y filtran la información según sea necesario.

## Sintaxis

El método `aggregate` se aplica a una colección y recibe un array de etapas (`stages`):

```json
 db.getCollection('movies').aggregate([
   { /* Primera etapa del pipeline */ },
   { /* Segunda etapa - Usa los datos de la primera */ },
   ...
   { /* Última etapa */ }
 ])
```

Cada **etapa** transforma los datos antes de pasarlos a la siguiente, permitiendo operaciones como filtrado, agrupamiento y cálculo de valores agregados.

## Operadores y Etapas Principales

### `$match` - Filtrado de Documentos

Funciona de manera similar a `find`, permitiendo aplicar condiciones de filtrado:

```json
 db.getCollection('movies').aggregate([
   { $match: { year: { $gte: 1993 } } }
 ])
```

### `$group` - Agrupación de Documentos

Permite agrupar documentos según un campo específico y aplicar funciones de agregación:

```json
 db.getCollection('movies').aggregate([
   { $group: {
       _id: "$year",
       first: { $first: "$$ROOT" },
       last: { $last: "$$ROOT" },
       all: { $push: "$$ROOT" },
       total: { $count: {} },
       imdbAverage: { $avg: "$imdb.rating" }
     }
   }
 ])
```

### `$addFields` - Agregar Nuevos Campos

Crea nuevos campos en los documentos resultantes:

```json
 db.getCollection('movies').aggregate([
   { $addFields: {
       rating: {
         $avg: [ "$imdb.rating", { $multiply: [2, "$tomatoes.viewer.rating"] }, "$tomatoes.critic.rating" ]
       }
     }
   }
 ])
```

### `$lookup` - Realizar Uniones (Joins)

Permite combinar documentos de diferentes colecciones (similar a `JOIN` en SQL):

```json
 db.getCollection('movies').aggregate([
   { $lookup: {
       from: "comments",
       localField: "_id",
       foreignField: "movie_id",
       as: "comments"
     }
   }
 ])
```

### `$unwind` - Descomponer Arrays

Convierte elementos de un array en documentos separados:

```json
 db.getCollection('movies').aggregate([
   { $unwind: "$genres" }
 ])
```

### `$project` - Seleccionar Campos

Define qué campos deben incluirse o excluirse del resultado:

```json
 db.getCollection('movies').aggregate([
   { $project: {
       _id: 0,
       title: 1,
       genres: 1,
       year: 1,
       poster: 1
     }
   }
 ])
```

### `$facet` - Múltiples Pipelines en una Consulta

Ejecuta varias consultas en paralelo y devuelve los resultados en un solo documento:

```json
 db.getCollection('movies').aggregate([
   { $facet: {
       moviesSortedByYear: [
         { $sort: { year: -1 } },
         { $project: { _id: 0, title: 1, year: 1 } }
       ],
       moviesSortedByImdbRating: [
         { $sort: { "imdb.rating": -1 } },
         { $project: { _id: 0, title: 1, "imdb.rating": 1 } }
       ]
     }
   }
 ])
```

## Optimización en el Uso de `aggregate`

Algunas estrategias para mejorar el rendimiento incluyen:

- **Filtrar temprano:** Usar `$match` al inicio del pipeline para reducir el número de documentos procesados.
- **Índices:** Asegurar que los campos utilizados en `$match` y `$group` estén indexados.
- **Uso de `$project`:** Eliminar campos innecesarios para reducir el tamaño de los documentos.
- **Limitaciones:** Usar `$limit` y `$skip` para optimizar la paginación de resultados.

---

Para más información, consulta la documentación oficial:

- [MongoDB Aggregation Framework](https://www.mongodb.com/docs/manual/aggregation/)
- [Operadores de Agregación](https://www.mongodb.com/docs/manual/reference/operator/aggregation/)
