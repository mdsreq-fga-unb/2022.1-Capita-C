-- CreateEnum
CREATE TYPE "SituacaoParceria" AS ENUM ('Aceita', 'Processando', 'NaoConseguiuFazerContato', 'NaoAceita');

-- CreateTable
CREATE TABLE "User" (
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "isConsultor" BOOLEAN NOT NULL DEFAULT false,
    "isTelemarketing" BOOLEAN NOT NULL DEFAULT true,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("cpf")
);

-- CreateTable
CREATE TABLE "CadastroCnpj" (
    "cnpjFinal" TEXT NOT NULL,
    "identificadorMatrizFiliar" TEXT NOT NULL,
    "nomeFantasia" TEXT,
    "tipoLogradouro" TEXT,
    "logradouro" TEXT,
    "numero" TEXT,
    "complemento" TEXT,
    "bairro" TEXT,
    "cep" INTEGER NOT NULL,
    "unidadeFederativa" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "atribuido" BOOLEAN NOT NULL DEFAULT false,
    "parceriaAceita" "SituacaoParceria" NOT NULL DEFAULT E'Processando',

    CONSTRAINT "CadastroCnpj_pkey" PRIMARY KEY ("cnpjFinal")
);

-- CreateTable
CREATE TABLE "Cnae" (
    "cnae" INTEGER NOT NULL,

    CONSTRAINT "Cnae_pkey" PRIMARY KEY ("cnae")
);

-- CreateTable
CREATE TABLE "Telefone" (
    "numeroTelefone" BIGINT NOT NULL,
    "origemTelefone" TEXT,

    CONSTRAINT "Telefone_pkey" PRIMARY KEY ("numeroTelefone")
);

-- CreateTable
CREATE TABLE "Email" (
    "email" TEXT NOT NULL,
    "origemEmail" TEXT,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "_CadastroCnpjToCnae" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CadastroCnpjToTelefone" (
    "A" TEXT NOT NULL,
    "B" BIGINT NOT NULL
);

-- CreateTable
CREATE TABLE "_CadastroCnpjToEmail" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CadastroCnpjToCnae_AB_unique" ON "_CadastroCnpjToCnae"("A", "B");

-- CreateIndex
CREATE INDEX "_CadastroCnpjToCnae_B_index" ON "_CadastroCnpjToCnae"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CadastroCnpjToTelefone_AB_unique" ON "_CadastroCnpjToTelefone"("A", "B");

-- CreateIndex
CREATE INDEX "_CadastroCnpjToTelefone_B_index" ON "_CadastroCnpjToTelefone"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CadastroCnpjToEmail_AB_unique" ON "_CadastroCnpjToEmail"("A", "B");

-- CreateIndex
CREATE INDEX "_CadastroCnpjToEmail_B_index" ON "_CadastroCnpjToEmail"("B");

-- AddForeignKey
ALTER TABLE "_CadastroCnpjToCnae" ADD CONSTRAINT "_CadastroCnpjToCnae_A_fkey" FOREIGN KEY ("A") REFERENCES "CadastroCnpj"("cnpjFinal") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CadastroCnpjToCnae" ADD CONSTRAINT "_CadastroCnpjToCnae_B_fkey" FOREIGN KEY ("B") REFERENCES "Cnae"("cnae") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CadastroCnpjToTelefone" ADD CONSTRAINT "_CadastroCnpjToTelefone_A_fkey" FOREIGN KEY ("A") REFERENCES "CadastroCnpj"("cnpjFinal") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CadastroCnpjToTelefone" ADD CONSTRAINT "_CadastroCnpjToTelefone_B_fkey" FOREIGN KEY ("B") REFERENCES "Telefone"("numeroTelefone") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CadastroCnpjToEmail" ADD CONSTRAINT "_CadastroCnpjToEmail_A_fkey" FOREIGN KEY ("A") REFERENCES "CadastroCnpj"("cnpjFinal") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CadastroCnpjToEmail" ADD CONSTRAINT "_CadastroCnpjToEmail_B_fkey" FOREIGN KEY ("B") REFERENCES "Email"("email") ON DELETE CASCADE ON UPDATE CASCADE;
