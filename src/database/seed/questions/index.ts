import * as dotenv from "dotenv";
dotenv.config();

import { createDatabaseConnection } from "../../../database";
import seed from "./seed.json";

async function runSeedDB() {
  const databaseConnection = await createDatabaseConnection();

  for (const { title, description } of seed) {
    await databaseConnection.query(
      `INSERT INTO QUESTIONS(title, description)
        values('${title}', '${description}')`
    );
  }

  await databaseConnection.close();
}

runSeedDB().then(() => console.log("Database populated with questions seed!"));
