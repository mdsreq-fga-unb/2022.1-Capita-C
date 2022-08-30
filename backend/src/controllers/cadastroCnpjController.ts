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

const create: RequestHandler = async (req, res) => {
  const {
    cnpjFinal,
    identificadorMatrizFiliar,
    nomeFantasia,
    cnaes,
    tipoLogradouro,
    logradouro,
    numero,
    complemento,
    bairro,
    cep,
    unidadeFederativa,
    municipio,
    telefone,
    correioEletronico,
    atribuido,
    parceriaAceita,
  } = req.body;
  const cnpj = await prisma.cadastroCnpj.create({
    data: {
      cnpjFinal,
      identificadorMatrizFiliar,
      nomeFantasia,
      cnaes,
      tipoLogradouro,
      logradouro,
      numero,
      complemento,
      bairro,
      cep,
      unidadeFederativa,
      municipio,
      telefone,
      correioEletronico,
      atribuido,
      parceriaAceita,
    },
    select: {
      cnpjFinal: true,
      identificadorMatrizFiliar: true,
      nomeFantasia: true,
      cnaes: true,
      tipoLogradouro: true,
      logradouro: true,
      numero: true,
      complemento: true,
      bairro: true,
      cep: true,
      unidadeFederativa: true,
      municipio: true,
      telefone: true,
      correioEletronico: true,
      atribuido: true,
      parceriaAceita: true,
    },
  });

  return res.json(cnpj);
};

export default {
  list,
  create,
};
