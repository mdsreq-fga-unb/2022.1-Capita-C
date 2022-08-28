import { RequestHandler } from "express";
import HttpError from "http-errors";
import prisma from "../databaseClient";

const list: RequestHandler = async (req, res) => {
  const cnpj = await prisma.cadastroCnpj.findMany({
    include: {
      cnaes: true,
    },
  });

  return res.json(cnpj);
};

export default {
  list,
};
