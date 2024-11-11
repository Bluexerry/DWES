# ExpressJS: Middlewares y Control de Errores

## 1. Teoría

### 1.1 Middlewares

Un middleware en Express es un componente que se coloca entre la solicitud y la respuesta en el ciclo de vida de la aplicación, permitiendo intervenir en este proceso para realizar diversas tareas. Los middlewares pueden ser utilizados para tareas como autenticación, validación de datos, manejo de errores, o simplemente para registrar las solicitudes entrantes.

#### Tipos de Middlewares

1. **Middleware de aplicación**: Se ejecuta en todas las rutas de la aplicación. Ejemplo: Autenticación en toda la aplicación.
2. **Middleware de ruta**: Se ejecuta solo en rutas específicas.
3. **Middleware de manejo de errores**: Especial para capturar y manejar errores en las solicitudes.

#### Ejemplos de uso

- **Autenticación**: Un middleware puede verificar si el usuario tiene permisos antes de acceder a una ruta.
- **Registro de solicitudes**: Registrar detalles de cada solicitud HTTP, como el método, la URL y el tiempo de respuesta.
- **Compresión**: Comprimir la respuesta para optimizar el rendimiento de la aplicación.

Un ejemplo simple es el middleware de registro, que muestra información de cada solicitud en la consola, lo que puede ser útil para el monitoreo y la depuración.

### 1.2 Control de Errores

El manejo de errores en Express se realiza comúnmente con middlewares específicos para tal fin. Estos middlewares interceptan cualquier error que ocurra en la aplicación, envían una respuesta coherente al cliente y previenen que la aplicación se bloquee.

- **Errores del Cliente (4XX)**: Estos errores son específicos de problemas en la solicitud, como solicitudes mal formadas o falta de autenticación. Express permite enviar una respuesta detallada para informar al cliente de estos problemas.
- **Errores del Servidor (5XX)**: Estos errores ocurren cuando hay un fallo en el servidor. Por razones de seguridad, se suele enmascarar el mensaje de error, enviando solo información general para evitar exponer detalles internos.

Ejemplo de manejo de errores: Si un usuario intenta acceder a un recurso sin los permisos adecuados, el middleware de manejo de errores puede responder con un código 401 (no autorizado) y un mensaje explicativo.

### 1.3 Winston

Winston es una biblioteca de logging que facilita la creación de logs personalizados en Express. Permite definir niveles de log como "info", "warn" y "error", y configurar cómo y dónde se guardan estos registros, como en consola o archivos.

#### Ventajas de Winston

- **Multiples Niveles de Log**: Permite diferenciar entre mensajes de información, advertencias y errores críticos.
- **Formato Personalizado**: Los logs pueden personalizarse con formatos específicos, como añadir fechas, códigos de estado y detalles de la solicitud.
- **Soporte para Múltiples Salidas**: Winston permite enviar logs tanto a la consola como a archivos de forma simultánea, útil para análisis de logs históricos.

#### Ejemplo de Winston

Un ejemplo común es registrar todas las solicitudes con detalles específicos en archivos separados, donde las solicitudes exitosas se registran como "info", los problemas menores como "warn", y los errores críticos como "error".

### 1.4 Morgan

Morgan es un middleware especializado en registrar las solicitudes HTTP en Express. Se usa comúnmente para visualizar en tiempo real detalles de las solicitudes en la consola, aunque también permite la salida de los logs en archivos.

Morgan intercepta las solicitudes entrantes y puede aplicar varios formatos para el registro, como el formato "combined", que muestra información detallada sobre la solicitud y la respuesta.

#### Ejemplo de uso de Morgan

Morgan puede configurarse para mostrar cada solicitud con el método HTTP, la ruta solicitada, el código de estado y el tiempo de respuesta. Esto es útil para el monitoreo, ya que permite identificar patrones en el tráfico y posibles problemas de rendimiento.

### 1.5 Integración Winston + Morgan

La combinación de Winston y Morgan permite una solución completa de registro de eventos en Express:

- **Morgan** captura y registra todas las solicitudes HTTP.
- **Winston** organiza estos registros y permite configurarlos en diferentes niveles.

Este enfoque permite visualizar en consola cada solicitud en tiempo real y almacenar los registros en archivos para su análisis posterior. Por ejemplo, Morgan puede capturar cada solicitud entrante y enviarla a Winston, que luego clasificará las solicitudes en niveles de log según el código de estado: 2XX (información), 4XX (advertencias) y 5XX (errores).

## 2. Ejemplos en Acción

- **Middleware de Registro de Solicitudes**: Se usa Morgan para registrar todas las solicitudes entrantes. Esto permite ver cada solicitud en la consola junto con su método, ruta y tiempo de respuesta.
- **Middleware de Control de Errores**: Si ocurre un error en una solicitud, un middleware especializado captura el error y envía una respuesta al cliente sin mostrar información sensible sobre el servidor.
- **Logger de Winston para Errores Críticos**: Winston puede configurarse para capturar errores de nivel "error" en archivos específicos, lo que permite revisar y analizar problemas críticos de la aplicación en caso de que ocurran fallas en producción.

Este conjunto de middlewares y herramientas de logging mejora la seguridad, el rendimiento y la facilidad de monitoreo de las aplicaciones Express, proporcionando una solución robusta para el manejo de solicitudes y errores en tiempo real.
