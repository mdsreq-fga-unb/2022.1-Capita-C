/*
  Warnings:

  - The primary key for the `Telefone` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "_CadastroCnpjToTelefone" DROP CONSTRAINT "_CadastroCnpjToTelefone_B_fkey";

-- AlterTable
ALTER TABLE "Telefone" DROP CONSTRAINT "Telefone_pkey",
ALTER COLUMN "numeroTelefone" SET DATA TYPE TEXT,
ADD CONSTRAINT "Telefone_pkey" PRIMARY KEY ("numeroTelefone");

-- AlterTable
ALTER TABLE "_CadastroCnpjToTelefone" ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "_CadastroCnpjToTelefone" ADD CONSTRAINT "_CadastroCnpjToTelefone_B_fkey" FOREIGN KEY ("B") REFERENCES "Telefone"("numeroTelefone") ON DELETE CASCADE ON UPDATE CASCADE;
