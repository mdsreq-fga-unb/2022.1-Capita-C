import { RequestHandler } from "express";
import HttpError from "http-errors";
import prisma from "../databaseClient";

const list: RequestHandler = async (req, res) => {
  const emailReq = await prisma.email.findMany({
    select: {
      cadastroCnpj: {
        select: {
          cnpjFinal: true,
        },
      },
      email: true,
      origemEmail: true,
    },
  });

  return res.json(
    emailReq.map((t) => ({
      cnpjFinal: t.cadastroCnpj.map((cnpj) => cnpj.cnpjFinal),
      email: t.email,
      origemEmail: t.origemEmail,
    }))
  );
};

const create: RequestHandler = async (req, res) => {
  const { cnpjFinal, email, origemEmail } = req.body;
  const emailReq = await prisma.email.create({
    data: {
      cadastroCnpj: {
        connect: {
          cnpjFinal,
        },
      },
      email,
      origemEmail,
    },
    select: {
      cadastroCnpj: true,
      email: true,
      origemEmail: true,
    },
  });

  return res.json({
    cadastroCnpj: emailReq.cadastroCnpj.map((t) => t.cnpjFinal),
    email: emailReq.email,
    origemEmail: emailReq.origemEmail,
  });
};

const update: RequestHandler = async (req, res) => {
  const { email } = req.params;
  const { newEmail, origemEmail } = req.body;
  const emailReq = await prisma.email.update({
    where: {
      email,
    },
    data: {
      email: newEmail,
      origemEmail,
    },
    select: {
      cadastroCnpj: true,
      origemEmail: true,
      email: true,
    },
  });

  return res.json({
    cadastroCnpj: emailReq.cadastroCnpj.map((t) => t.cnpjFinal),
    email: emailReq.email,
    origemEmail: emailReq.origemEmail,
  });
};

const destroy: RequestHandler = async (req, res) => {
  const { email } = req.params;
  await prisma.email.delete({
    where: {
      email,
    },
  });

  return res.sendStatus(204);
};

export default {
  list,
  create,
  update,
  destroy,
};
