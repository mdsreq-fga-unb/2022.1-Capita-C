//* Entry file for the program
//! Do not call this file in test scripts

//! This import NEEDS to be the first one as it loads the env variables
import "./utils/server/configureEnvFile";

import http from "http";
import { createHttpTerminator } from "http-terminator";

import expressServer from "./server";
import listeningServer from "./utils/server/listeningServer";
import closeServer from "./utils/server/closeServer";
import startServer from "./utils/server/startServer";

//* Create HTTP server.
const httpServer = http.createServer(expressServer);
//* Create the http-terminator for the server.
const httpTerminator = createHttpTerminator({ server: httpServer });

//* When the server starts, run the post start script
httpServer.on("listening", () => listeningServer(httpServer));

//* When a SIGTERM or SIGINT is received, run the terminate script
process.on("SIGTERM", () => closeServer(httpTerminator));
process.on("SIGINT", () => closeServer(httpTerminator));

//* Finally, let's start the server
startServer(httpServer);
