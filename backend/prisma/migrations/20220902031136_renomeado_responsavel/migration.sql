/*
  Warnings:

  - You are about to drop the column `responsavel` on the `CadastroCnpj` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CadastroCnpj" DROP CONSTRAINT "CadastroCnpj_responsavel_fkey";

-- AlterTable
ALTER TABLE "CadastroCnpj" DROP COLUMN "responsavel",
ADD COLUMN     "responsavelCpf" TEXT;

-- AddForeignKey
ALTER TABLE "CadastroCnpj" ADD CONSTRAINT "CadastroCnpj_responsavelCpf_fkey" FOREIGN KEY ("responsavelCpf") REFERENCES "User"("cpf") ON DELETE SET NULL ON UPDATE CASCADE;
