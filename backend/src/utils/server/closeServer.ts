//* This file is being used in index.ts and it terminates the server using http-terminator

import { HttpTerminator } from "http-terminator";

const closeServer = (httpTerminator: HttpTerminator) => {
  httpTerminator
    .terminate()
    .then(() => {
      // eslint-disable-next-line no-console
      console.log("Server is now closed...");
    })
    .catch(() => {
      throw Error("Could not close the server. Is the server running?");
    });
};

export default closeServer;
