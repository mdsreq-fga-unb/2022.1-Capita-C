import { RequestHandler } from "express";
import HttpError from "http-errors";
import prisma from "../databaseClient";

const create: RequestHandler = async (req, res) => {
  const { cpf, password, name, email, isAdmin, isConsultor, isTelemarketing, status } = req.body;
  const users = await prisma.user.create({
    data: {
      cpf,
      password,
      name,
      email,
      isAdmin,
      isConsultor,
      isTelemarketing,
      status,
    },
    select: {
      cpf: true,
      name: true,
      email: true,
      isAdmin: true,
      isConsultor: true,
      isTelemarketing: true,
      status: true,
    },
  });

  return res.json(users);
};

const list: RequestHandler = async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      cpf: true,
      name: true,
      email: true,
      isAdmin: true,
      isConsultor: true,
      isTelemarketing: true,
      status: true,
    },
  });

  return res.json(users);
};

const retrieve: RequestHandler = async (req, res) => {
  const { cpf } = req.params;

  const user = await prisma.user.findUnique({
    where: {
      cpf,
    },
    select: {
      cpf: true,
      name: true,
      email: true,
      isAdmin: true,
      isConsultor: true,
      isTelemarketing: true,
      status: true,
    },
  });

  if (!user) {
    throw new HttpError.NotFound("Usuário não encontrado");
  }

  return res.json(user);
};

const update: RequestHandler = async (req, res) => {
  const { cpf } = req.params;
  const { name, email, isAdmin, isConsultor, isTelemarketing, password, status } = req.body;

  const user = await prisma.user.update({
    where: {
      cpf,
    },
    data: {
      name,
      email,
      isAdmin,
      isConsultor,
      isTelemarketing,
      password,
      status,
    },
    select: {
      cpf: true,
      email: true,
      name: true,
      isAdmin: true,
      isConsultor: true,
      isTelemarketing: true,
      status: true,
    },
  });

  return res.json(user);
};

const destroy: RequestHandler = async (req, res) => {
  const { cpf } = req.params;

  await prisma.user.delete({
    where: {
      cpf,
    },
  });

  return res.sendStatus(204);
};

export default {
  create,
  list,
  retrieve,
  update,
  destroy,
};
