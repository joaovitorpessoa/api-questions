import { ConnectionOptions } from "typeorm";

const sqliteConnectionOptions = {
  type: "sqlite",
  database: "./src/database/database.sqlite"
} as ConnectionOptions;

export { sqliteConnectionOptions }