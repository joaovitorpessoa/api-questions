require("dotenv").config();

const {
  postgresConnectionOptions,
  sqliteConnectionOptions,
} = require("./dist/database/connections");

const DATABASE_CONNECTION_CONFIG = {
  entities: ["./dist/modules/**/entities/**.js"],
  migrations: ["./dist/database/migrations/**.js"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
};

switch (process.env.DATABASE_ADAPTER) {
  case "postgres":
    Object.assign(DATABASE_CONNECTION_CONFIG, postgresConnectionOptions);
    break;

  case "sqlite":
    Object.assign(DATABASE_CONNECTION_CONFIG, sqliteConnectionOptions);
    break;

  default:
    throw new Error("DATABASE_ADAPTER invalid");
}

module.exports = DATABASE_CONNECTION_CONFIG;
