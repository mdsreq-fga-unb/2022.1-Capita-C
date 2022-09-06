/* eslint-disable no-console */
import { randomInt, randomUUID } from "crypto";
import prisma from "./databaseClient";

const start = new Date().getTime();
prisma.user
  .createMany({
    data: [
      {
        cpf: "11111111111",
        name: "Admin",
        email: "admin@gmail.com",
        password: "admin",
        isAdmin: true,
        isManager: false,
        isTelemarketing: false,
        status: true,
      },
      {
        cpf: "22222222222",
        name: "Gerente",
        email: "gerente@gmail.com",
        password: "gerente",
        isAdmin: false,
        isManager: true,
        isTelemarketing: false,
        status: true,
      },
      {
        cpf: "33333333333",
        name: "Telemarketing",
        email: "telemarketing@gmail.com",
        password: "telemarketing",
        isAdmin: false,
        isManager: false,
        isTelemarketing: true,
        status: true,
      },
    ],
  })
  .then(async () => {
    console.log("Usuários Cadastrados");

    const array: any[] = [];

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < 20; index++) {
      array.push(
        prisma.cadastroCnpj.create({
          data: {
            cnpjFinal: randomUUID().toString(),
            identificadorMatrizFiliar: "Matriz",
            nomeFantasia: "Nome Fantasioso",
            cnaes: {
              connectOrCreate: [randomInt(55555), randomInt(55555)].map((cnae) => ({
                where: { cnae },
                create: { cnae },
              })),
            },
            tipoLogradouro: "casa",
            logradouro: "endereco",
            numero: "22",
            complemento: "complemento",
            bairro: "bairo",
            cep: 7777777,
            unidadeFederativa: "DF",
            municipio: "Brasilia",
            /* atribuido: true, */
            parceriaAceita: "Aceita",
            telefone: {
              connectOrCreate: ["123123", "111"].map((numeroTelefone) => ({
                where: { numeroTelefone },
                create: { numeroTelefone },
              })),
            },
            correioEletronico: {
              connectOrCreate: ["exemplo@gmail.com"].map((email) => ({
                where: { email },
                create: { email },
              })),
            },
            /* responsavel: {
              connect: { cpf: "33333333333" },
            }, */
          },
        })
      );
    }

    await prisma.$transaction(array);

    console.log("Lojas Cadastradas");
    const end = new Date().getTime();
    console.log("Cadastro realizado em ", end - start, "ms");
  })
  .catch(console.error);
