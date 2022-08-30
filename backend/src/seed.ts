import prisma from "./databaseClient";

prisma.user
  .createMany({
    data: [
      {
        cpf: "13146578955",
        name: "Cleiton Rasta",
        email: "cleitin@gmail.com",
        password: "cleiton",
        isAdmin: true,
        isConsultor: false,
        isTelemarketing: false,
        status: true,
      },
      {
        cpf: "11133322294",
        name: "user_teste",
        password: "xxx",
        email: "olhaapedra@gmail.com",
        isAdmin: false,
        isConsultor: true,
        isTelemarketing: false,
        status: true,
      },
    ],
  })
  .then(() => console.log("Deu certo"))
  .catch(console.error);
