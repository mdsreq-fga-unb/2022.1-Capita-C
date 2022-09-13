import { RequestHandler } from "express";
import HttpError from "http-errors";
import prisma from "../databaseClient";

const list: RequestHandler = async (req, res) => {
  const telefone = await prisma.telefone.findMany({
    select: {
      cadastroCnpj: {
        select: {
          cnpjFinal: true,
        },
      },
      numeroTelefone: true,
      origemTelefone: true,
    },
  });

  return res.json(
    telefone.map((t) => ({
      cnpjFinal: t.cadastroCnpj.map((cnpj) => cnpj.cnpjFinal),
      numeroTelefone: t.numeroTelefone,
      origemTelefone: t.origemTelefone,
    }))
  );
};

const create: RequestHandler = async (req, res) => {
  const { cnpjFinal, numeroTelefone, origemTelefone } = req.body;
  const telefoneReq = await prisma.telefone.create({
    data: {
      cadastroCnpj: {
        connect: {
          cnpjFinal,
        },
      },
      numeroTelefone,
      origemTelefone,
    },
    select: {
      cadastroCnpj: true,
      numeroTelefone: true,
      origemTelefone: true,
    },
  });

  return res.json({
    cadastroCnpj: telefoneReq.cadastroCnpj.map((t) => t.cnpjFinal),
    numeroTelefone: telefoneReq.numeroTelefone,
    origemTelefone: telefoneReq.origemTelefone,
  });
};

const update: RequestHandler = async (req, res) => {
  const { numeroTelefone } = req.params;
  const { origemTelefone, newTelefone } = req.body;
  const telefone = await prisma.telefone.update({
    where: {
      numeroTelefone,
    },
    data: {
      numeroTelefone: newTelefone,
      origemTelefone,
    },
    select: {
      cadastroCnpj: true,
      origemTelefone: true,
      numeroTelefone: true,
    },
  });

  return res.json({
    cadastroCnpj: telefone.cadastroCnpj.map((t) => t.cnpjFinal),
    numeroTelefone: telefone.numeroTelefone,
    origemTelefone: telefone.origemTelefone,
  });
};

const destroy: RequestHandler = async (req, res) => {
  const { numeroTelefone } = req.params;
  await prisma.telefone.delete({
    where: {
      numeroTelefone,
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
