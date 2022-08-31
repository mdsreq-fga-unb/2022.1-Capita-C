import { ErrorRequestHandler } from "express";

const handleCommonError: ErrorRequestHandler = (err, req, res, next) => {
  if (err.status === 500 || err.status === undefined) {
    return next(err);
  }

  return res.status(err.status).send(err.message);
};

export default handleCommonError;
