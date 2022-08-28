import { RequestHandler } from "express";
import { HttpError } from "http-errors";
import prisma from "../databaseClient";

const list: RequestHandler = async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      cpf: true,
      name: true,
      isAdmin: true,
      isConsultor: true,
      isTelemarketing: true,
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
      isAdmin: true,
      isConsultor: true,
      isTelemarketing: true,
    },
  });

  if (!user) {
    throw new HttpError.NotFound("Usuário não encontrado");
  }

  return res.json(user);
};

const update: RequestHandler = async (req, res) => {
  const { cpf } = req.params;
  const { name, isAdmin, isConsultor, isTelemarketing, password } = req.body;

  const user = await prisma.user.update({
    where: {
      cpf,
    },
    data: {
      name,
      isAdmin,
      isConsultor,
      isTelemarketing,
      password,
    },
    select: {
      cpf: true,
      name: true,
      isAdmin: true,
      isConsultor: true,
      isTelemarketing: true,
      password: true,
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
  list,
  retrieve,
  update,
  destroy,
};
