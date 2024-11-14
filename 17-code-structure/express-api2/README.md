
# Ejercicio ExpressJS: API para Cálculo de Fibonacci

Este proyecto implementa una API REST en Node.js utilizando Express, diseñada para calcular el número de Fibonacci de un valor dado. La API recibe una solicitud HTTP con un número y responde con el cálculo correspondiente.

## Estructura del Proyecto

La estructura de carpetas del proyecto es la siguiente:

```
.
├── src
│   ├── app.js                     # Configuración de la aplicación
│   ├── config.js                  # Configuración de variables de entorno
│   ├── controllers
│   │   └── fibonacciController.js # Lógica de cálculo de Fibonacci
│   ├── index.js                   # Archivo principal para iniciar el servidor
│   ├── loader
│   │   └── express.js             # Configuración de middleware y rutas
│   ├── routes
│   │   └── fibonacci.js           # Definición de rutas de Fibonacci
│   ├── test                       # Pruebas unitarias e integración
│   │   ├── controller             # Pruebas para los controladores
│   │   ├── loaders                # Pruebas para los loaders
│   │   └── routes                 # Pruebas para las rutas
│   └── utils
│       └── logger.js              # Logger para eventos y errores
└── README.md
```

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del proyecto usando el siguiente comando:

    ```bash
    npm install
    ```

3. Crea un archivo `.env` en la raíz del proyecto y define el puerto en el que quieres que se ejecute el servidor (opcional):

    ```
    PORT=3000
    ```

## Uso

Para iniciar el servidor, utiliza el siguiente comando:

```bash
npm start
```

La API estará disponible en el puerto definido (por defecto 3000). Puedes probar la funcionalidad de Fibonacci haciendo una solicitud GET a la ruta `/fibonacci/:number`, donde `:number` es el número para el cual deseas calcular el valor de Fibonacci.

Ejemplo de solicitud:

```bash
curl http://localhost:3000/fibonacci/10
```

La respuesta será un JSON con el resultado:

```json
{
  "result": 55
}
```

## Pruebas

El proyecto incluye pruebas unitarias e integradas usando `jest` y `supertest`. Para ejecutarlas, usa el comando:

```bash
npm test
```

## Detalles de Implementación

- **Controlador (`fibonacciController.js`)**: contiene la lógica para calcular el número de Fibonacci de manera recursiva. También valida que el número sea un entero no negativo antes de realizar el cálculo.
- **Logger (`logger.js`)**: utiliza `winston` para registrar los eventos y errores en la consola.
- **Configuración de Rutas (`fibonacci.js`)**: define la ruta `GET /fibonacci/:number` que llama al controlador `calculateFibonacci`.
- **Carga de Express (`express.js`)**: configura los middlewares de Express, incluyendo el enrutador de Fibonacci y un manejador de rutas 404.

## Créditos

Este proyecto fue realizado como ejercicio de aprendizaje en Node.js y Express.
