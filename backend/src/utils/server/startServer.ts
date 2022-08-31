//* This file is being used in index.ts and is the start script for the server

import { Server } from "http";
import env from "../env";
import prisma from "../../databaseClient";

//! Wait for the connection script and start the server
const startServer = async (httpServer: Server) => {
  await prisma.$connect();
  httpServer.listen(env.PORT);
};

export default startServer;
