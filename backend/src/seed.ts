/* eslint-disable no-console */
import prisma from "./databaseClient";

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
  .then(() => console.log("Deu certo"))
  .catch(console.error);
