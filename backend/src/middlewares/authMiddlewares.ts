import HttpError from "http-errors";
import { RequestHandler } from "express";
import authService from "../services/authService";

const isAuthenticated: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader === undefined) {
    throw new HttpError.Unauthorized();
  }

  const authHeaderArray = authHeader.split(" ");

  // Token ex: "Bearer TOKEN"
  if (authHeaderArray.length !== 2 || authHeaderArray[0] !== "Bearer") {
    throw new HttpError.Unauthorized();
  }

  const token = authHeaderArray[1];

  let user = null;
  try {
    user = await authService.getUserByToken(token);
  } catch (Error) {
    throw new HttpError.Unauthorized();
  }

  if (user === null) {
    throw new HttpError.Unauthorized();
  }

  req.user = user;

  return next();
};

const isAdmin: RequestHandler = (req, res, next) => {
  if (req.user?.isAdmin) {
    return next();
  }

  throw new HttpError.Forbidden();
};

const isManager: RequestHandler = (req, res, next) => {
  if (req.user?.isManager) {
    return next();
  }

  throw new HttpError.Forbidden();
};

const isTelemarketing: RequestHandler = (req, res, next) => {
  if (req.user?.isTelemarketing) {
    return next();
  }

  throw new HttpError.Forbidden();
};

export { isAuthenticated, isAdmin, isManager, isTelemarketing };
