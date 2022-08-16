//* Main file for express configuration

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import "express-async-errors";

import indexRouter from "./routes/indexRoute";

import env from "./utils/env";
import handlePrismaError from "./middlewares/handlePrismaError";
import handleCommonError from "./middlewares/handleCommonError";

const server = express();

//* Middlewares
if (env.NODE_ENV !== "production") {
  server.use(morgan("dev"));
}
server.use(helmet());
server.use(express.json());

//* The routes are being created in the routes folder
server.use("/", indexRouter);

//* Prisma Error handler
server.use(handlePrismaError);
server.use(handleCommonError);

//* Get port from environment and store in Express.
server.set("port", env.PORT);

export default server;
