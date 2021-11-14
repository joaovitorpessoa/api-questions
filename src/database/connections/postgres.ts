import { ConnectionOptions } from "typeorm";

const postgresConnectionOptions = {
  type: "postgres",
  host: "database",
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB_NAME,
} as ConnectionOptions;

export { postgresConnectionOptions }