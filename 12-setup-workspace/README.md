# Resumen del Documento: Preparación del Espacio de Trabajo

---

## Contenidos Principales

1. **Teoría**
   - **Nodemon**  
     Herramienta para reiniciar automáticamente la ejecución de un proyecto Node.js cuando se detectan cambios en los archivos. Para instalar y usar Nodemon:

     ```bash
     npm i -D nodemon
     nodemon index.js
     ```

     Esto permite una mayor eficiencia al desarrollar, eliminando la necesidad de reiniciar manualmente el servidor después de cada cambio.

   - **ESLint**  
     ESLint ayuda a mantener un código limpio y consistente. Para comenzar, se instala en modo desarrollo y luego se inicializa con el siguiente comando:

     ```bash
     npm i -D eslint
     npx eslint --init
     ```

     Esto generará un archivo `.eslintrc` donde se pueden personalizar las reglas y excepciones. Por ejemplo, si se desea seguir la guía de estilos de Airbnb, se puede configurar de la siguiente manera:

     ```json
     {
       "extends": ["airbnb-base"],
       "rules": {
         "arrow-parens": ["error", "as-needed"],
         "no-underscore-dangle": ["error", { "allow": ["_id"] }]
       }
     }
     ```

     **Plugins de ESLint**  
     ESLint permite ampliar su funcionalidad con plugins. Algunos ejemplos útiles incluyen:
     - **Airbnb Base**: `npm i -D eslint-config-airbnb-base`
     - **Plugin para módulos importados**: `npm i -D eslint-plugin-import`
     - **Plugin para AVA**: `npm i -D eslint-plugin-ava`

     **Uso de ESLint**  
     Comandos básicos para verificar y corregir errores de estilo:

     ```bash
     npx eslint .        # Ver errores
     npx eslint --fix .  # Corregir errores automáticamente
     ```

     Además, en el archivo `package.json`, se pueden añadir scripts para facilitar el uso de ESLint:

     ```json
     "scripts": {
       "lint": "eslint --ignore-path .gitignore .",
       "lint:fix": "eslint --fix --ignore-path .gitignore ."
     }
     ```

   - **Configuración del Entorno VSCode**  
     La configuración de Visual Studio Code permite personalizar el editor tanto a nivel global como en el espacio de trabajo. Se puede configurar, por ejemplo, para que aplique automáticamente las correcciones de ESLint al guardar cambios. Esto se hace editando `settings.json`:

     ```json
     {
       "editor.codeActionsOnSave": {
         "source.fixAll": true
       }
     }
     ```

     Otros ajustes recomendados incluyen establecer límites de caracteres por línea y personalizar la visualización del terminal integrado.

2. **Ejemplos de Configuración en `package.json` y `.eslintrc`**
   - **Ejemplo de `.eslintrc` con Reglas Personalizadas**  
     Para configurar excepciones y reglas específicas en `.eslintrc`, se puede utilizar un archivo como este:

     ```json
     {
       "extends": ["airbnb-base"],
       "rules": {
         "arrow-parens": ["error", "as-needed"],
         "no-underscore-dangle": ["error", { "allow": ["_id"] }],
         "no-unused-vars": ["warn", { "argsIgnorePattern": "next" }]
       }
     }
     ```

   - **Ejemplo de Configuración de VSCode para Aplicar ESLint al Guardar**  
     En `settings.json`, habilita la corrección automática al guardar con el siguiente ajuste:

     ```json
     {
       "editor.codeActionsOnSave": {
         "source.fixAll": true
       }
     }
     ```

---

Este resumen detalla la configuración inicial y ajustes de estilo recomendados para un entorno de desarrollo en Node.js usando Nodemon, ESLint y Visual Studio Code. Estas configuraciones facilitan un flujo de trabajo más ágil y aseguran la calidad y consistencia del código en el proyecto.
