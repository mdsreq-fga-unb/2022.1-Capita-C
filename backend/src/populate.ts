import HttpError from "http-errors";
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

    const cnpjs: any[] = [];

    // eslint-disable-next-line global-require
    const data = require("../insertData/final.json");

    // eslint-disable-next-line array-callback-return
    data.map(async (cnpj: any) => {
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
      } = cnpj;

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

      /* const busca = await prisma.cadastroCnpj.count({
        where: {
          cnpjFinal,
        },
      });
 */
      cnpjs.push(
        prisma.cadastroCnpj.create({
          data: {
            cnpjFinal,
            identificadorMatrizFiliar,
            nomeFantasia,
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
        })
      );
      console.log(cnpjFinal);
    });
    await prisma.$transaction(cnpjs);

    console.log("Lojas Cadastradas");
    const end = new Date().getTime();
    console.log("Cadastro realizado em ", end - start, "ms");
  })
  .catch(console.error);
