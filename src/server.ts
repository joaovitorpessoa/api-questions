import express, { json } from "express";
import swagger from "swagger-ui-express";
import swaggerConfig from "./swagger.json";
import cors from "cors";

import { routes } from "./routes";
import { errorHandling } from "./middlewares";

const app = express();

app.use(cors())
app.use(json());
app.use("/docs", swagger.serve, swagger.setup(swaggerConfig));
app.use(routes);
app.use(errorHandling);

const HTTP_HEROKU_PORT = process.env.PORT;
const HTTP_DOCKER_INTERN_PORT = 3333;
const HTTP_DOCKER_BIND_PORT = process.env.HTTP_PORT;

app.listen(HTTP_HEROKU_PORT || HTTP_DOCKER_INTERN_PORT, () =>
  console.log(
    `Server is running on port ${HTTP_HEROKU_PORT || HTTP_DOCKER_BIND_PORT}!`
  )
);
