# Architecure de test - P++

## Getting started

First of all, download the required libraries :

```shell
npm i
```

### Database

PolyBay uses a PostgreSQL database, hosted in a Docker container.

Create the Docker container by executing the following instruction :

```shell
docker-compose up -d
```

#### Create database

Run the following script to apply migrations :

```shell
npm run prisma:migration:apply --workspace=api
```

Insert test data into the database :

```shell
npm run prisma:seed --workspace=api
```

#### Edit database

To modify the database structure, edit the `/api/prisma/schema.prisma` file and execute this command to create migration file and apply it locally :

```shell
npm run prisma:migration:create --workspace=api
```

Next, update the Prisma client files with this command :

```shell
npm run prisma:generate --workspace=api
```

### API

#### Generate guards

The API needs guard types to verify the integrity of the data obtained. To generate these files, execute the following instruction :

```shell
npm run guard --workspace=api
```

#### Generate API routes and documentation

To generate API routes from its controllers and documentation _Swagger_ (OpenAPI), execute the following instruction :

```shell
npm run tsoa --workspace=api
```

#### Generate API files

The front end requires files generated by _Swagger_ (OpenAPI) to request the API. To generate these files, execute the following instruction :

```shell
npm run openapi --workspace=api
```

#### Launch API

> ⚠️ IMPORTANT  
> Before running the API, make sure you have already generated the API files as described above.

Launch the API with this instruction :

```shell
npm run start --workspace=api
```

Check the logs to access the _Swagger_ documentation.

The API is running at this location : [http://localhost:8000](http://localhost:8000/)

#### Front

To launch the front, run this command :

```shell
npm run start --workspace=front
```
