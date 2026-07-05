A fleet management platform using NestJS, TypeORM, PostgresSQL Server, JWT Auth, Jest unit testing using BetterSQLite3 in memory, in memory and Reids cache for vehicle queries for a technical test.

## Project setup

```bash
$ npm install
```

It is expected to edit the configuration file config/configuration.ts 'postgres' "Data Source Options" for your local database instance's data. There a default_user was provided.

And at .env it is expected to edit REDIS environment variable to match your Redis local instance address. There you can edit the cache TTL if you would like to. **Do not publish your .env at production!**

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Run tests

```bash
# unit tests
$ npm run test
```