
# Resumen Ampliado: API - Paginado

Este documento proporciona una guía detallada sobre cómo implementar filtrado, ordenación y paginado en una API utilizando Node.js. Estas técnicas son esenciales para optimizar el acceso y la presentación de datos en aplicaciones modernas.

## 1. Filtrado

El filtrado en una API permite a los usuarios definir parámetros en la query para buscar datos específicos. Esto puede lograrse mediante:

- **Búsquedas exactas**: Comparar un campo con un valor exacto.
- **Búsquedas parciales**: Utilizar patrones o fracciones de contenido para encontrar coincidencias.

### Consideraciones:
- Los parámetros de filtrado deben ser claros y predecibles para los usuarios.
- Las combinaciones de múltiples filtros pueden mejorar la precisión de las consultas.

**Ejemplo de implementación**:

```javascript
// Búsqueda en base a un parámetro "nombre"
app.get('/items', (req, res) => {
    const nombre = req.query.nombre;
    const resultados = datos.filter(item => item.nombre.includes(nombre));
    res.json(resultados);
});
```

## 2. Ordenación

La ordenación permite gestionar el orden en que los datos son devueltos por la API. Esto se realiza especificando un parámetro como `sort` en la query:

- **Ascendente**: `sort=campo`
- **Descendente**: `sort=-campo`

### Ventajas:
- Mejora la experiencia del usuario al presentar los datos en un orden significativo.
- Compatible con diferentes tipos de datos (numéricos, texto, fechas).

**Ejemplo de implementación**:

```javascript
// Ordenar por un campo específico
app.get('/items', (req, res) => {
    const sort = req.query.sort;
    const orden = sort.startsWith('-') ? -1 : 1;
    const campo = sort.replace('-', '');
    const resultados = datos.sort((a, b) => (a[campo] > b[campo] ? orden : -orden));
    res.json(resultados);
});
```

## 3. Paginado

El paginado controla cuántos elementos se muestran por página y facilita la navegación a través de grandes conjuntos de datos.

### Parámetros básicos:
- **offset**: Indica el punto de inicio de los datos.
- **limit**: Define el número máximo de elementos por página.

### Ventajas:
- Reduce la carga en el servidor y cliente al limitar la cantidad de datos enviados.
- Mejora la velocidad de carga y la usabilidad.

**Ejemplo de middleware para paginado**:

```javascript
const paginationItems = (req, items, offset, limit) => {
    const first = parseInt(offset, 10);
    const step = parseInt(limit, 10);
    const last = first + step;
    const lastPage = Math.floor((items.total - 1) / step) * step;

    return {
        links: {
            first: first !== 0 ? `?offset=0&limit=${step}` : undefined,
            previous: first >= step ? `?offset=${first - step}&limit=${step}` : undefined,
            next: first < lastPage ? `?offset=${last}&limit=${step}` : undefined,
            last: first < lastPage ? `?offset=${lastPage}&limit=${step}` : undefined,
        },
        total: items.total,
        pages: Math.ceil(items.total / step),
        results: items.values.slice(first, last),
    };
};
```

### Implementación en SQL:
Al trabajar con bases de datos, la lógica del paginado cambia ligeramente. Por ejemplo:

```sql
SELECT * FROM items
ORDER BY fecha_creacion DESC
LIMIT 10 OFFSET 20;
```

---

## Recursos adicionales
- [OpenStack Guidelines](https://specs.openstack.org/openstack/api-wg/guidelines/pagination_filter_sort.html)
- [Tutorial en GitConnected](https://levelup.gitconnected.com/node-js-filtering-sorting-and-pagination-50ce6c90d0ad)
- [Artículo de Tania Rascia](https://www.taniarascia.com/rest-api-sorting-filtering-pagination/)
- [GeeksForGeeks](https://www.geeksforgeeks.org/how-to-implement-search-and-filtering-in-a-rest-api-with-node-js-and-express-js/)
- [Video tutorial en YouTube](https://www.youtube.com/watch?v=VKuY8QscZwY)
