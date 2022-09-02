-- DropForeignKey
ALTER TABLE "CadastroCnpj" DROP CONSTRAINT "CadastroCnpj_responsavel_fkey";

-- AddForeignKey
ALTER TABLE "CadastroCnpj" ADD CONSTRAINT "CadastroCnpj_responsavel_fkey" FOREIGN KEY ("responsavel") REFERENCES "User"("cpf") ON DELETE SET NULL ON UPDATE CASCADE;
