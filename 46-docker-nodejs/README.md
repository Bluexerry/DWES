# Crear Imagen de Node.js con Docker

## Teoría

### Dockerfile

El `Dockerfile` es un archivo de texto que contiene instrucciones para construir una imagen de Docker.

#### Referencias

- [Dockerfile reference - Official](https://docs.docker.com/engine/reference/builder/)
- [Node.js Docker Best Practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)

#### Instrucciones Principales

- `FROM`: Define la imagen base.
- `WORKDIR`: Establece el directorio de trabajo.
- `COPY`: Copia archivos desde el host al contenedor.
- `RUN`: Ejecuta comandos en la imagen.
- `CMD`: Define el comando por defecto del contenedor.
- `EXPOSE`: Expone puertos de la imagen.
- `USER`: Especifica el usuario por defecto.
- `ENTRYPOINT`: Define el punto de entrada del contenedor.
- `ARG`: Define argumentos de compilación.
- `ENV`: Establece variables de entorno.
- `ADD`: Copia archivos y directorios con más funcionalidades que `COPY`.

### .dockerignore

El archivo `.dockerignore` funciona de manera similar a `.gitignore`. Permite excluir archivos y directorios no deseados dentro de la imagen de Docker. Ejemplo de un archivo `.dockerignore`:

```plaintext
node_modules
coverage
.env
.nyc_output
```

### Docker Compose

`docker-compose` permite definir y ejecutar aplicaciones multi-contenedor en Docker utilizando un archivo YAML.

#### Propiedad `build`

Para construir una imagen personalizada desde un `Dockerfile`, se usa la propiedad `build` en `docker-compose.yml`:

```yaml
version: '3.8'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
```

### Solución a Errores Comunes

#### No puedo eliminar una red en Docker

1. Inspeccionar la red bloqueada:

   ```sh
   docker network inspect <networkID>
   ```

2. Desconectar la red:

   ```sh
   docker network disconnect -f <networkID> <containerID>
   ```

3. Eliminar redes no utilizadas:

   ```sh
   docker network prune
   ```

## Ejemplos

### Dockerfile para API Node.js

```dockerfile
FROM node:14.15.4-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --production --no-optional
COPY ./src ./src
EXPOSE 3000
USER node
CMD [ "node", "src/index" ]
```

### Dockerfile para API Node.js con TypeScript

```dockerfile
# Fase de compilación
FROM node:latest as build
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY src ./src
RUN npm ci
RUN npm run build

# Fase de ejecución
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=build /app/dist .
USER node
ENTRYPOINT [ "node" ]
CMD [ "main.js" ]
```

### Docker Compose con Variables de Entorno

```yaml
version: '3.8'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
    volumes:
      - .:/usr/src/app
    networks:
      - backend
```

### Docker Compose sin Variables de Entorno Definidas

```yaml
version: '3.8'
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "${PORT}:${PORT}"
    environment:
      - PORT
```

### Comandos Útiles

- Levantar contenedor con variables de entorno del sistema:

  ```sh
  docker-compose up -d
  ```

- Levantar contenedor con variables de entorno desde un archivo `.env`:

  ```sh
  docker-compose --env-file .env up -d
  