"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postgresConnectionOptions = void 0;
var postgresConnectionOptions = {
    type: "postgres",
    host: "database",
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB_NAME,
};
exports.postgresConnectionOptions = postgresConnectionOptions;
