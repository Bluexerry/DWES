
# Despliegue de MongoDB con Docker

Este documento explica los conceptos teóricos relacionados con el despliegue de servicios utilizando Docker Compose, centrándose en aspectos esenciales como la configuración de servicios, volúmenes, redes, construcción de imágenes y la automatización mediante scripts.

## Docker Compose
Docker Compose es una herramienta que permite definir y ejecutar aplicaciones Docker con múltiples contenedores. Utiliza un archivo YAML para especificar los servicios, redes y volúmenes necesarios para ejecutar la aplicación.

### 1. Fichero `docker-compose.yml`
El fichero `docker-compose.yml` contiene la configuración necesaria para desplegar servicios. A continuación, se describen sus principales componentes:

#### 1.1 Servicios
Un servicio representa un contenedor en Docker Compose. Los parámetros más comunes son:

- **image** (obligatorio): Imagen de Docker que se usará.
- **name**: Nombre del servicio.
- **ports**: Mapeo de puertos entre el host y el contenedor (`host:container`).
- **volumes**: Montaje de volúmenes (`host:container`).
- **environment**: Variables de entorno.
- **networks**: Redes a las que se conecta el servicio.
- **restart**: Política de reinicio del contenedor.
- **depends_on**: Dependencias entre servicios.
- **command**: Comando que se ejecutará al iniciar el contenedor.
- **entrypoint**: Define un punto de entrada alternativo al contenedor.

Ejemplo de configuración de servicios:

```yaml
version: "3"
services:
  web:
    image: "nginx:alpine"
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
    environment:
      - NGINX_PORT=80
    networks:
      - frontend
    restart: always
    depends_on:
      - api

  api:
    image: "node:alpine"
    ports:
      - "3000:3000"
    volumes:
      - ./app:/app
    environment:
      - NODE_ENV=production
    networks:
      - frontend
      - backend
    restart: always
```

#### 1.2 Volúmenes
Los volúmenes permiten persistir datos generados y utilizados por los contenedores.

- **driver**: Especifica el driver de almacenamiento. Puede ser:
  - `local`: Almacenamiento local.
  - `named`: Volumen con nombre.
  - `anonymous`: Volumen sin nombre.
- **name**: Nombre del volumen.
- **external**: Indica si el volumen es externo.

Ejemplo:

```yaml
version: "3"
services:
  web:
    image: "nginx:alpine"
    ports:
      - "8080:80"
    volumes:
      - html:/usr/share/nginx/html
volumes:
  html:
    driver: local
```

#### 1.3 Redes
Las redes permiten que los servicios se comuniquen entre sí. Los principales parámetros son:

- **driver**: Tipo de red. Ejemplos:
  - `bridge`: Red por defecto.
  - `host`: Red del host.
  - `none`: Sin red.
  - `overlay`: Red distribuida para Swarm.
- **name**: Nombre de la red.
- **external**: Indica si la red es externa.
- **attachable**: Permite que los contenedores externos se conecten a la red.
- **internal**: Hace la red accesible solo internamente.

Ejemplo:

```yaml
version: "3"
services:
  web:
    image: "nginx:alpine"
    ports:
      - "8080:80"
    networks:
      - frontend
  api:
    image: "node:alpine"
    ports:
      - "3000:3000"
    networks:
      - frontend
      - backend
networks:
  frontend:
    driver: bridge
  backend:
    driver: bridge
```

#### 1.4 Build
Permite construir imágenes personalizadas usando un Dockerfile.

- **context**: Directorio del contexto de construcción.
- **dockerfile**: Nombre del archivo Dockerfile.
- **args**: Argumentos para la construcción.
- **cache_from**: Especifica imágenes para cache.
- **labels**: Etiquetas de metadatos.
- **target**: Fase de construcción objetivo.

Ejemplo:

```yaml
version: "3"
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
      args:
        - NODE_ENV=production
      cache_from:
        - node:alpine
      labels:
        - "com.example.description=Web"
        - "com.example.department=IT"
      target: builder
```

#### 1.5 Perfiles (Profiles)
Los perfiles permiten definir configuraciones específicas para diferentes entornos o escenarios.

- **extends**: Extiende configuraciones existentes.
- **file**: Especifica un archivo de perfiles.
- **service**, **network**, **volume**, **config**: Elementos a extender.
- **secrets**: Configuraciones sensibles.

Documentación oficial: [Docker Profiles](https://docs.docker.com/compose/profiles/).

### 2. Ejecución de Docker Compose
Comandos esenciales para gestionar servicios con Docker Compose:

- **up**: Levantar los servicios.
- **down**: Parar los servicios.
- **logs**: Ver los logs.
- **exec**: Ejecutar un comando en un servicio.
- **ps**: Ver los servicios.
- **build**: Construir las imágenes.
- **pull**: Descargar las imágenes.
- **prune**: Limpiar recursos no utilizados.
- **restart**: Reiniciar los servicios.

Ejemplo:
```bash
docker-compose up -d  # Levanta los servicios en segundo plano
docker-compose logs   # Muestra los logs de los servicios
```

### 3. Tips y Buenas Prácticas

#### 3.1 Acceso al Host desde un Contenedor
Para acceder al host desde un contenedor, puedes usar `host.docker.internal`:

```yaml
extra_hosts:
  - "host.docker.internal:host-gateway"
```

---

Con estos fundamentos, puedes configurar y desplegar servicios de manera eficiente con Docker Compose.
