module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/sampledb.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      tablename: "knex-migrations",
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
