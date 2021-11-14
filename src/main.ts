import "reflect-metadata";
import "express-async-errors";

import * as dotenv from "dotenv";
dotenv.config();

import { createDatabaseConnection } from "./database";
createDatabaseConnection().then(() =>
  console.log("Connection successful with database!")
);

import "./shared/container";

import "./server";
