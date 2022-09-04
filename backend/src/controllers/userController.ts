import { RequestHandler } from "express";
import HttpError from "http-errors";
import prisma from "../databaseClient";
import authService from "../services/authService";

const create: RequestHandler = async (req, res) => {
  const { cpf, password, name, email, isAdmin, isManager, isTelemarketing, status } = req.body;
  const users = await prisma.user.create({
    data: {
      cpf,
      password,
      name,
      email,
      isAdmin,
      isManager,
      isTelemarketing,
      status,
    },
    select: {
      cpf: true,
      name: true,
      email: true,
      isAdmin: true,
      isManager: true,
      isTelemarketing: true,
      status: true,
    },
  });

  return res.json(users);
};

const list: RequestHandler = async (req, res) => {
  let users;

  if (req.user?.isAdmin) {
    users = await prisma.user.findMany({
      select: {
        cpf: true,
        name: true,
        email: true,
        isAdmin: true,
        isManager: true,
        isTelemarketing: true,
        status: true,
        designatedCnpjs: {
          include: {
            cnaes: true,
            correioEletronico: true,
            telefone: true,
          },
        },
      },
    });
  }

  if (req.user?.isManager) {
    users = await prisma.user.findMany({
      where: {
        NOT: {
          isAdmin: true,
        },
      },
      select: {
        cpf: true,
        name: true,
        email: true,
        isManager: true,
        isTelemarketing: true,
        status: true,
        designatedCnpjs: {
          include: {
            cnaes: true,
            correioEletronico: true,
            telefone: true,
          },
        },
      },
    });
  }

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
      isManager: true,
      isTelemarketing: true,
      status: true,
      designatedCnpjs: true,
    },
  });

  if (!user) {
    throw new HttpError.NotFound("Usuário não encontrado");
  }

  return res.json(user);
};

const update: RequestHandler = async (req, res) => {
  const { cpf } = req.params;
  const { name, email, isAdmin, isManager, isTelemarketing, password, status } = req.body;

  const user = await prisma.user.update({
    where: {
      cpf,
    },
    data: {
      name,
      email,
      isAdmin,
      isManager,
      isTelemarketing,
      password,
      status,
    },
    select: {
      cpf: true,
      email: true,
      name: true,
      isAdmin: true,
      isManager: true,
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
