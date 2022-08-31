import { ErrorRequestHandler } from "express";
import { Prisma } from "@prisma/client";
import HttpError from "http-errors";

// * Middleware for handling all the prisma known errors and validation errors
// * as a BadRequest
const handlePrismaError: ErrorRequestHandler = (error, req, res, next) => {
  if (
    error instanceof Prisma.PrismaClientKnownRequestError ||
    error instanceof Prisma.PrismaClientValidationError
  ) {
    return next(new HttpError.BadRequest(error.message));
  }
  return next(error);
};

export default handlePrismaError;
