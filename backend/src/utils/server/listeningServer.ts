//* This file is being used in index.ts and is a utility for logging the Mode and Port which the server started

import { Server } from "http";
import env from "../env";

const listeningServer = (httpServer: Server) => {
  const addr = httpServer.address();

  if (addr === null) {
    throw Error("Server is not running");
  }

  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;

  // eslint-disable-next-line no-console
  console.log(`${env.NODE_ENV} mode!\nListening on ${bind}`);
};

export default listeningServer;
