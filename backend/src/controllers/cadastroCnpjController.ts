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

const createCnpj: RequestHandler = async (req, res) => {
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
    atribuido,
    parceriaAceita,
    telefones,
    emails,
  } = req.body;

  const cnaesQuery = cnaes.map((cnae: number) => ({
    where: {
      cnae,
    },
    create: {
      cnae,
    },
  }));

  const telefonesQuery = telefones?.map((numeroTelefone: number) => ({
    where: {
      numeroTelefone: numeroTelefone.toString(),
    },
    create: {
      numeroTelefone: numeroTelefone.toString(),
    },
  }));

  const emailsQuery = emails?.map((email: string) => ({
    where: {
      email: email.toString(),
    },
    create: {
      email: email.toString(),
    },
  }));

  const cnpj = await prisma.cadastroCnpj.create({
    data: {
      cnpjFinal,
      identificadorMatrizFiliar,
      nomeFantasia,
      tipoLogradouro,
      logradouro,
      numero: numero.toString(),
      complemento,
      bairro,
      cep,
      unidadeFederativa,
      municipio,
      atribuido,
      parceriaAceita,
      cnaes: {
        connectOrCreate: cnaesQuery,
      },
      telefone:
        telefones !== undefined
          ? {
              connectOrCreate: telefonesQuery,
            }
          : undefined,
      correioEletronico:
        emails !== undefined
          ? {
              connectOrCreate: emailsQuery,
            }
          : undefined,
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

const update: RequestHandler = async (req, res) => {
  const { cnpjFinal } = req.params;
  const {
    tipoLogradouro,
    logradouro,
    numero,
    complemento,
    bairro,
    cep,
    atribuido,
    parceriaAceita,
  } = req.body;
  const cnpj = await prisma.cadastroCnpj.update({
    where: {
      cnpjFinal,
    },
    data: {
      tipoLogradouro,
      logradouro,
      numero,
      complemento,
      bairro,
      cep,
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

const destroy: RequestHandler = async (req, res) => {
  const { cnpjFinal } = req.params;
  await prisma.cadastroCnpj.delete({
    where: {
      cnpjFinal,
    },
  });

  return res.sendStatus(204);
};

export default {
  list,
  createCnpj,
  update,
  destroy,
};
