@echo off
set "base_dir=express-api"
mkdir "%base_dir%"
cd "%base_dir%"

rem Crear carpetas principales
mkdir src
mkdir test

rem Crear subcarpetas y archivos en src
cd src
mkdir controllers loaders models routes services utils
echo // users controller > controllers\users.js
echo // express loader > loaders\express.js
echo // index loader > loaders\index.js
echo // model index > models\index.js
echo // route index > routes\index.js
echo // users route > routes\users.js
echo // service index > services\index.js
echo // utils index > utils\index.js
echo // app > app.js
echo // config > config.js
echo // main index > index.js

cd ..

rem Crear subcarpetas y archivos en test
cd test
mkdir controllers loaders routes services
echo // users controller test > controllers\users.test.js
echo // express loader test > loaders\express.test.js
echo // users route test > routes\users.test.js
echo // sonar config > sonar.js

cd ..

rem Crear archivos en la raíz
echo // .env file > .env
echo // README file > README.md
echo // env template > env.template
echo {} > package-lock.json
echo {} > package.json

echo Estructura de carpetas y archivos creada con éxito.
pause
