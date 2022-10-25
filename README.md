# Pokemon Api 

# Repositorio del Front-end
```
https://github.com/wayne1997/pokemonachallenge-web.git
```

Pokemon Api está inspirado en el Pokemon API. Este proyecto está desarrollado con las siguientes tecnologias:

1. NestJS
2. TypeORM
3. PostgresDB
4. Docker
5. Yarn

## Ejecutar el proyecto

1. Instalar las dependencias del proyecto 
```
yarn install
```
2. Revisar las variables de entorno antes de iniciar el archivo, para esto debe generar el .env, usa el '.template.env'.

3. Levantar el contenedor de docker, donde se aloja la base de datos.

```
docker-compose up -d
```
4. Ejecutar el proyecto de NestJS o en modo desarrollo (Solamente con nestjs)
```
yarn start:dev
```

5. Ejecutar el proyecto de nodejs, para esto debe generar la carpeta dist o usar la que esta con el proyecto

```
yarn start
```

6. Una vez levantado el proyecto y la base de datos, se debe realizar el seeding de la base, para esto usar: 

```
localhost:4000/pokeapi/v1/seed
```

7. Ver la documentacion de la API en el siguiente url

```
localhost:4000/pokeapi/v1/pokeapi/documentation
```

## Ver proyecto backend en producción en producción

1. Para acceder a swagger UI
```
https://pokemonapi299.herokuapp.com/pokeapi/documentation
```

### Tecnologias utilizadas 

1. Postgres
2. Heroku
3. Git 


