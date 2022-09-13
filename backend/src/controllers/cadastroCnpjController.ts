import { CadastroCnpj } from "@prisma/client";
import { RequestHandler } from "express";
import HttpError from "http-errors";
import prisma from "../databaseClient";

const list: RequestHandler = async (req, res) => {
  const cnpj = await prisma.cadastroCnpj.findMany({
    include: {
      cnaes: true,
      correioEletronico: true,
    },
  });

  return res.json(cnpj);
};

const retrieve: RequestHandler = async (req, res) => {
  const { cnpjFinal } = req.params;

  const cnpj = await prisma.cadastroCnpj.findUnique({
    where: {
      cnpjFinal,
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

  if (!cnpj) {
    throw new HttpError.NotFound("Usuário não encontrado");
  }

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
    responsavel,
  } = req.body;

  let cnaesQuery = [];
  let telefonesQuery = [];
  let emailsQuery = [];
  try {
    cnaesQuery = cnaes.map((cnae: number) => ({
      where: {
        cnae,
      },
      create: {
        cnae,
      },
    }));
  } catch (error) {
    throw new HttpError.BadRequest();
  }

  try {
    telefonesQuery = telefones?.map((numeroTelefone: number) => ({
      where: {
        numeroTelefone: numeroTelefone.toString(),
      },
      create: {
        numeroTelefone: numeroTelefone.toString(),
      },
    }));
  } catch (error) {
    throw new HttpError.BadRequest();
  }

  try {
    emailsQuery = emails?.map((email: string) => ({
      where: {
        email: email.toString(),
      },
      create: {
        email: email.toString(),
      },
    }));
  } catch (error) {
    throw new HttpError.BadRequest();
  }

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
      responsavel,
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
    nomeFantasia,
    logradouro,
    numero,
    complemento,
    bairro,
    cep,
    atribuido,
    parceriaAceita,
    responsavel,
    unidadeFederativa,
    identificadorMatrizFiliar
  } = req.body;
  const cnpj = await prisma.cadastroCnpj.update({
    where: {
      cnpjFinal,
    },
    data: {
      tipoLogradouro,
      nomeFantasia,
      logradouro,
      numero,
      complemento,
      bairro,
      cep,
      atribuido,
      parceriaAceita,
      responsavel,
      unidadeFederativa,
      identificadorMatrizFiliar
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
      responsavel: true,
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

const designate: RequestHandler = async (req, res) => {
  const { cpf, qtd } = req.body;

  if (qtd >= 25) {
    throw new HttpError.BadRequest("Quantidade máxima excedida (25)");
  }

  const cnpjs = await prisma.cadastroCnpj.findMany({
    where: {
      atribuido: false,
    },
    select: {
      cnpjFinal: true,
    },
    take: qtd,
  });

  if (cnpjs.length === 0) {
    return res.sendStatus(204);
  }

  const atribuidas = cnpjs.map((cnpj) =>
    prisma.cadastroCnpj.update({
      where: {
        cnpjFinal: cnpj.cnpjFinal,
      },
      data: {
        atribuido: true,
        responsavel: {
          connect: {
            cpf,
          },
        },
      },
    })
  );

  return res.json(await prisma.$transaction(atribuidas));
};

export default {
  list,
  createCnpj,
  update,
  destroy,
  designate,
  retrieve
};
