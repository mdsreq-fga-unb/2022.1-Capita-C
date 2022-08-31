/**
 * * Normalize a port into a number, string, or false.
 */
const normalizePort = (val: string) => {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  throw new Error(`Invalid port number received: ${port}`);
};

export default normalizePort;
