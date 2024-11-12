# NPM: Package.json y Scripting

---

## Contenido

### 1. Teoría

El archivo `package.json` es el núcleo de configuración de un proyecto Node.js. Este archivo define las dependencias y scripts que facilitan la gestión del proyecto. Los elementos más importantes incluyen:

- **name y version**: Definen el nombre y la versión del proyecto, lo cual es fundamental para la identificación y el manejo de versiones.
- **description y author**: Información adicional sobre el proyecto y su autor, útil para la documentación y distribución.
- **main**: Archivo de entrada principal para el proyecto, como `index.js`.
  
#### Scripts en `package.json`

Los scripts en `package.json` permiten automatizar tareas comunes y definir comandos personalizados para el proyecto. Los scripts se configuran en el campo `"scripts"` de `package.json`, y se pueden ejecutar con el comando `npm run <nombre-del-script>`. Algunos ejemplos comunes son:

- `"start"`: Ejecuta el servidor o aplicación principal. Ejemplo: `"start": "node index.js"`.
- `"dev"`: Script de desarrollo que recarga automáticamente la aplicación. Ejemplo: `"dev": "nodemon index.js"`.
- `"test"`: Define comandos de prueba, que pueden incluir pruebas unitarias o de integración.

#### Dependencias y DevDependencies

- **dependencies**: Son las bibliotecas esenciales para que la aplicación funcione en producción. Se instalan con `npm install <nombre> --save` y se especifican en el campo `"dependencies"` del archivo `package.json`.
  
- **devDependencies**: Son dependencias necesarias solo para el desarrollo, como herramientas de prueba o linters. Se instalan con `npm install <nombre> --save-dev` y se agregan al campo `"devDependencies"` de `package.json`.

Este enfoque facilita la instalación de todos los paquetes necesarios con solo ejecutar `npm install`, lo que ahorra tiempo al configurar el proyecto en nuevos entornos o servidores.

### 2. Ejemplos de Automatización

1. **Automatizar distintos tipos de arranque**

   Se pueden definir múltiples scripts para iniciar la aplicación en diferentes modos. Por ejemplo, uno para producción y otro para desarrollo:

   ```json
   {
     "scripts": {
       "start": "node index.js",  // Para producción
       "dev": "nodemon index.js"  // Para desarrollo con recarga automática
     }
   }

# Automatizar la limpieza del proyecto

Para mantener el proyecto ordenado, es común que los desarrolladores eliminen archivos innecesarios como `node_modules` o `package-lock.json` antes de realizar una nueva instalación de dependencias. Se pueden definir scripts que faciliten este proceso:

```json
{
  "scripts": {
    "clear:env": "rimraf **/.env",
    "copy:env": "for d in workspaces/*; do cp ${d}/.env.template ${d}/.env; done"
  }
}
```

```

Con estos comandos, ejecutar `npm run clear` eliminará tanto la carpeta `node_modules` como el archivo `package-lock.json`, asegurando que el entorno esté limpio.

## Gestión de variables de entorno

En aplicaciones que requieren configuración específica en distintos entornos, es útil gestionar las variables de entorno mediante archivos `.env`. Los scripts de `package.json` pueden ayudar a configurar y mantener estos archivos de manera eficiente:



- `"clear:env"` elimina archivos `.env` para limpiar configuraciones de entorno.
- `"copy:env"` copia una plantilla `.env.template` para crear un archivo `.env` en los directorios especificados, permitiendo configurar variables rápidamente en múltiples entornos.

## Recursos Adicionales

Para ampliar los conocimientos sobre la configuración y el uso de `package.json`, consulta la [Documentación oficial de NPM](https://docs.npmjs.com/), donde encontrarás secciones detalladas sobre:

- Configuración y uso de `package.json`
- Uso avanzado de scripts en NPM
- Gestión de dependencias y devDependencies

Este README proporciona una guía general para estructurar y automatizar proyectos en Node.js usando `package.json`, simplificando tareas de desarrollo y despliegue.
