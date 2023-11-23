# Nest  BoilerPlate - API


## Documentation 

Covers what is nest js and how to migrate from express js to nest js

## Stack

Capfolio API is built with using the following technologies:

- Nest
- Postgres
- TypeORM
- Typescript


## Local Development

Before you get started with running this repository locally, make sure you're running the appropriate version of Node.js (see `.nvmrc` for the version).

You'll also need access to running Postgres server. It's recommended to use the included Docker configuration.

1. Clone the repo
2. Install dependencies using `yarn`
3. Setup the `.env` file (by first cloning `.env.template` and put values)
4. Boot up service dependencies `docker-compose up -d`
5. Run migrations on the Postgres database `yarn sequelize db:migrate`
6. Run for development `yarn dev`

Recommended Software:

- For Code Editing: [VSCode](https://code.visualstudio.com/)
- For Interacting with Postgres: [dbeaver](https://dbeaver.io/download/)

### Database Migrations

Capfolio API uses TypeORM framework (0.3.17) for database migrations. For an introduction to
TypeORM Migrations, see [Migrations | TypeORM](https://typeorm.io/migrations).

Useful commands:

```sh
# To create a new migration
$ yarn typeorm migration:create ./path-to-migrations-dir/PostRefactoring
# To run all the migrations
$ typeorm migration:run -- -d path-to-datasource-config
```


### Contribute

Crate an issue and make a P.R