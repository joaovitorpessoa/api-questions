import { createConnection, getConnectionOptions } from "typeorm";

async function createDatabaseConnection() {
  const options = await getConnectionOptions()
  return createConnection(options);
}

export { createDatabaseConnection }