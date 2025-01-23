# Teoría sobre MongoDB

MongoDB es una base de datos NoSQL orientada a documentos, ampliamente utilizada por su flexibilidad y escalabilidad. A diferencia de las bases de datos relacionales tradicionales, MongoDB almacena los datos en formato BSON (Binary JSON), lo que permite manejar estructuras complejas de datos de manera eficiente.

## Tipos de datos en BSON

BSON es una representación binaria de JSON que incluye una variedad de tipos de datos para almacenar información en MongoDB. Algunos de los tipos de datos principales incluyen:

- **ObjectId**: Identificador único generado automáticamente para cada documento almacenado en una colección. Proporciona un identificador compacto y eficiente que incluye información temporal, un identificador de máquina y un contador incremental.

### Características de ObjectId

- Longitud fija de 12 bytes.
- Los primeros 4 bytes representan un timestamp basado en la hora de creación del documento.
- Los siguientes 5 bytes identifican de manera única al host que creó el documento.
- Los últimos 3 bytes son un contador que asegura unicidad incluso en operaciones concurrentes.

### Uso de ObjectId en MongoDB

El tipo ObjectId es particularmente útil para identificar de manera única cada documento dentro de una colección. También facilita la indexación y mejora la eficiencia en las búsquedas.

## Herramientas para trabajar con MongoDB

Existen varias herramientas que simplifican el uso y la administración de MongoDB, entre las que destacan:

- **Robo 3T/Studio 3T**: Interfaces gráficas que permiten a los desarrolladores interactuar con bases de datos MongoDB de manera intuitiva.
- **MongoDB Compass**: Herramienta oficial de MongoDB para visualizar y consultar datos sin necesidad de utilizar la línea de comandos.
- **Extensiones de Visual Studio Code**: Proveen una integración fluida con MongoDB desde un entorno de desarrollo popular.

## MongoDB Atlas

MongoDB Atlas es una solución de base de datos como servicio (DBaaS) que facilita la configuración y gestión de bases de datos MongoDB en la nube. Ofrece:

- **Escalabilidad automática**: Ajuste de recursos en función de la demanda.
- **Seguridad avanzada**: Encriptación de datos en reposo y en tránsito, así como autenticación robusta.
- **Alta disponibilidad**: Replicación automática para garantizar la disponibilidad de los datos.

## Queries básicas

MongoDB proporciona una sintaxis de consulta potente para manipular y recuperar datos. Algunos ejemplos incluyen:

- **Búsqueda por campo específico**:
  ```javascript
  db.collection.find({ campo: "valor" })
  ```

- **Búsqueda dentro de un array**:
  ```javascript
  db.collection.find({ array: { $in: ["valor"] } })
  ```

- **Contar documentos que cumplen con una condición**:
  ```javascript
  db.collection.countDocuments({ campo: { $exists: true } })
  ```

Estas funcionalidades hacen de MongoDB una herramienta poderosa para trabajar con datos no estructurados o semi-estructurados, adaptándose a una amplia variedad de casos de uso.
