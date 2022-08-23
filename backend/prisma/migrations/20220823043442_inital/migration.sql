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
    "dddPrincipal" TEXT,
    "numeroPrincipal" TEXT,
    "dddSecundario" TEXT,
    "numeroSecundario" TEXT,
    "correioEletronico" TEXT,

    CONSTRAINT "CadastroCnpj_pkey" PRIMARY KEY ("cnpjFinal")
);

-- CreateTable
CREATE TABLE "Cnae" (
    "cnae" INTEGER NOT NULL,
    "cnpj" TEXT NOT NULL,

    CONSTRAINT "Cnae_pkey" PRIMARY KEY ("cnae")
);

-- CreateIndex
CREATE UNIQUE INDEX "CadastroCnpj_cnpjFinal_key" ON "CadastroCnpj"("cnpjFinal");

-- CreateIndex
CREATE UNIQUE INDEX "Cnae_cnae_key" ON "Cnae"("cnae");

-- AddForeignKey
ALTER TABLE "Cnae" ADD CONSTRAINT "Cnae_cnpj_fkey" FOREIGN KEY ("cnpj") REFERENCES "CadastroCnpj"("cnpjFinal") ON DELETE CASCADE ON UPDATE CASCADE;
