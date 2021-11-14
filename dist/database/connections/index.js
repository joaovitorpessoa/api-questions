"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqliteConnectionOptions = exports.postgresConnectionOptions = void 0;
var postgres_1 = require("./postgres");
Object.defineProperty(exports, "postgresConnectionOptions", { enumerable: true, get: function () { return postgres_1.postgresConnectionOptions; } });
var sqlite_1 = require("./sqlite");
Object.defineProperty(exports, "sqliteConnectionOptions", { enumerable: true, get: function () { return sqlite_1.sqliteConnectionOptions; } });
