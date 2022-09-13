# Requisitos


## Requisitos Funcionais

### Prospecção

#### Autenticação

<ul>
<li>
  <p style="text-align: justify">RF1 - Realizar login;</p>
</li>


</ul>

#### Gerenciar Sistema

<ul>
<li>
  <p style="text-align: justify">RF2 - Criar Usuário;</p>
</li>

<li>
  <p style="text-align: justify">RF3 - Editar Usuário;</p>
</li>

<li>
  <p style="text-align: justify">RF4 - Ver Usuário;</p>
</li>
</ul>

#### Gerenciar Lojas

<ul>
<li>
  <p style="text-align: justify">RF5 - Cadastrar Lojas;</p>
</li>

<li>
  <p style="text-align: justify">RF6 - Editar Lojas;</p>
</li>

<li>
  <p style="text-align: justify">RF7 - Ver Lojas;</p>
</li>

<li>
  <p style="text-align: justify">RF8 - Atribuir lojas a atendente de telemarketing;</p>
</li>

</ul>

#### Gerência de Dados

<ul>
<li>
  <p style="text-align: justify">RF9 - Gerar relatório de lojas cadastradas;</p>
</li>

<li>
  <p style="text-align: justify">RF10 - Gerar relatórios de usuários;</p>
</li>

<li>
  <p style="text-align: justify">RF11 - Importar dados de bases externas;</p>
</li>

<li>
  <p style="text-align: justify">RF12 - Visualizar log de alterações realizadas no cadastro de uma loja;</p>
</li>
</ul>

#### Telemarketing

<ul>
<li>
  <p style="text-align: justify">RF13 - Visualizar lista de lojas para entrar em contato no dia;</p>
</li>

<li>
  <p style="text-align: justify">RF14 - Visualizar taxas de efetivação;</p>
</li>
</ul>

### CRM

#### Gerência de Comunicação

<ul>
<li>
  <p style="text-align: justify">RF15 - Enviar emails para lojas;</p>
</li>

<li>
  <p style="text-align: justify">RF16 - Visualizar emails recebidos;</p>
</li>

<li>
  <p style="text-align: justify">RF17 - Enviar mensagens via whatsapp para lojas;</p>
</li>

<li>
  <p style="text-align: justify">RF18 - Visualizar mensagens whatsapp recebidas;</p>
</li>
</ul>

#### Retenção de Clientes

<ul>
<li>
  <p style="text-align: justify">RF19 - Receber indicação de lojas para dar maior atenção;</p>
</li>

<li>
  <p style="text-align: justify">RF20 - Acompanhar balanço de vendas;</p>
</li>
</ul>

#### Sistema de Sugestões e Insights

<ul>
<li>
  <p style="text-align: justify">RF21 - Receber dados de regiões com pouca efetivação;</p>
</li>

<li>
  <p style="text-align: justify">RF22 - Receber previsões de crescimento de clientes;</p>
</li>

</ul>

## Requisitos Não Funcionais

<ul>
<li>
  <p style="text-align: justify">RNF1 - Acessar CNPJs por uma base pública, atualizada periódicamente;</p>
</li>

<li>
  <p style="text-align: justify">RNF2 - Aplicação WEB;</p>
</li>

<li>
  <p style="text-align: justify">RNF3 - Sistema não intranet;</p>
</li>

<li>
  <p style="text-align: justify">RNF4 - Deve ser desenvolvido em TypeScript com ReactJS (front-end);</p>
</li>

<li>
  <p style="text-align: justify">RNF5 - Deve ser desenvolvido em TypeScript com NodeJS (back-end);</p>
</li>

<li>
  <p style="text-align: justify">RNF6 - Deve ser utilizado o PostgreSQL como banco de dados;</p>
</li>

<li>
  <p style="text-align: justify">RNF7 - Deve ser utilizado o GitHub para o controle de versionamento;</p>
</li>

<li>
  <p style="text-align: justify">RNF8 - Tempo de acesso e contato com o possível cliente deve ser inferior a 5 minutos, para um novo usuário.</p>
</li>
</ul>

## Backlog do produto (SAFe)

![SAfe](./imagens/SAFE.png)

**Histórico de Versões**

| Data       | Versão | Descrição                                     | Autor                                                                                       |
| ---------- | ------ | --------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 19/07/2022 | 0.1    | Versão inicial                                | [Gabriel Luiz](https://github.com/ggomesbr) e [André Corrêa](https://github.com/dartmol203) |
| 20/07/2022 | 0.2    | Adição da imagem e atualização nos requisitos | [André Corrêa](https://github.com/dartmol203)                                               |
| 21/07/2022 | 0.2.1  | hotfix imagem fundo transparente              | [André Corrêa](https://github.com/dartmol203)                                               |
| 18/08/2022 | 0.3    | adição de requito e correção na numeração     | [André Corrêa](https://github.com/dartmol203)                                               |