# Resumen del Documento: NodeJS - Test Unitarios

---

## Contenidos Principales

1. **Teoría**
   - **AVA y Jest**  
     Ambos son frameworks para realizar pruebas unitarias en Node.js. La instalación de estos módulos se hace en modo desarrollo (`-D`) para garantizar que no se incluyan en el entorno de producción:

     ```bash
     npm i -D ava
     npm i -D jest
     ```

     **Configuración de AVA en `package.json`**  
     Para configurar AVA, se deben definir los archivos de pruebas dentro del archivo `package.json`:

     ```json
     {
       "ava": {
         "files": [
           "test/**/*.test.js"
         ]
       }
     }
     ```

     **Jest** también se puede configurar de manera similar, y ambas herramientas permiten ejecutar los tests definidos en carpetas específicas. Cada prueba unitaria verifica que el comportamiento de funciones o módulos de código sea el esperado bajo condiciones controladas.

   - **Mocking con Sinon**  
     Cuando se prueba una función que depende de servicios externos, como una API, es ideal simular el comportamiento de estos servicios para evitar que las pruebas dependan de datos o redes externas. Esto se logra con la librería Sinon, que permite crear "stubs" y "mocks" para simular funciones o comportamientos específicos.

     Ejemplo de uso de `stub` en Sinon para simular diferentes respuestas de una función según el argumento de entrada:

     ```javascript
     const sinon = require('sinon');

     const callback = sinon.stub();
     callback.withArgs(42).returns(1);
     callback.withArgs(1).throws("Error");

     console.log(callback(42)); // Devuelve 1
     console.log(callback(1));  // Lanza "Error"
     ```

     Estos mocks permiten controlar y verificar cómo se comporta el código sin necesidad de realizar las operaciones reales.

   - **Cobertura de Código con Istanbul**  
     La cobertura de código evalúa qué porcentaje del código fuente es ejecutado durante las pruebas. Istanbul, mediante su herramienta `nyc`, permite generar reportes detallados de la cobertura de cada función y archivo en un proyecto. Se puede instalar con el siguiente comando:

     ```bash
     npm i -D nyc
     ```

     Para generar un reporte en formato HTML de la cobertura con AVA, se puede ejecutar:

     ```bash
     nyc --reporter=html ava
     ```

     Esto crea un directorio `coverage` que contiene un resumen visual de las partes del código que fueron o no ejecutadas durante los tests. La práctica recomienda que se logre al menos una cobertura del 80%.

   - **Revisión de Código con SonarQube**  
     SonarQube permite un análisis más exhaustivo de la calidad del código, evaluando no solo la cobertura de pruebas, sino también posibles vulnerabilidades y problemas de calidad. Se recomienda ejecutar SonarQube en Docker y configurarlo para integrarse con Node.js usando `sonarqube-scanner`:

     ```bash
     npm i -D sonarqube-scanner
     ```

     **Configuración de Docker Compose para SonarQube**  
     Para lanzar SonarQube, se recomienda usar un archivo `docker-compose.yml` con la siguiente configuración básica:

     ```yaml
     version: "3"
     services:
       sonarqube:
         image: "sonarqube"
         ports:
           - "9000:9000"
     ```

     **Integración de SonarQube en Node.js**  
     Para configurar SonarQube con Node.js, se puede crear un archivo `sonar.js` con las siguientes opciones de configuración:

     ```javascript
     const sonarqubeScanner = require('sonarqube-scanner');

     sonarqubeScanner({
       serverUrl: 'http://localhost:9000',
       options: {
         'sonar.sources': '.',
         'sonar.tests': 'test',
         'sonar.inclusions': 'src/**',
         'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info'
       }
     }, () => {});
     ```

     Esto permite que SonarQube capture la cobertura de código generada por `nyc` y muestre análisis detallados en su interfaz web.

2. **Ejemplos de Configuración en `package.json`**
   - **Configuración Básica de Scripts de Pruebas**  
     En `package.json`, se pueden definir scripts específicos para ejecutar pruebas y generar reportes de cobertura. Aquí se muestra una configuración típica para ejecutar AVA con cobertura de código y generar reportes HTML:

     ```json
     {
       "scripts": {
         "test": "nyc ava",
         "test:html": "nyc --reporter=html ava",
         "test:watch": "ava --watch",
         "test:report": "nyc --reporter=lcov --reporter=text-lcov ava"
       },
       "devDependencies": {
         "ava": "^3.15.0",
         "nyc": "^15.1.0",
         "sonarqube-scanner": "^2.8.1"
       }
     }
     ```

     Este ejemplo incluye scripts para diferentes escenarios de pruebas:
     - `"test"`: ejecuta AVA con cobertura.
     - `"test:html"`: genera un reporte de cobertura en formato HTML.
     - `"test:watch"`: ejecuta las pruebas de forma continua al detectar cambios.
     - `"test:report"`: genera un reporte en formato `lcov` compatible con SonarQube.

   - **Integración con SonarQube para CI/CD**  
     Al integrar SonarQube en un flujo de CI/CD, estos scripts permiten automatizar la ejecución de pruebas, el análisis de cobertura y la revisión de código en un solo paso, facilitando la detección temprana de problemas de calidad.

---

Este resumen proporciona una guía para implementar y configurar pruebas unitarias en Node.js usando AVA, Jest, y herramientas de cobertura y calidad de código como Istanbul y SonarQube. La configuración de `package.json` permite un flujo de pruebas completo y adaptable para diferentes necesidades de desarrollo.
