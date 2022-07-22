
## Entrega 1
[Vídeo de apresentação da Visão do Produto e Projeto](https://drive.google.com/file/d/1eL-pX9ZtqTw1kxzvs4oMRPZgEVu55U2g/view?usp=sharing)

## Entrega 2
----------
### Requisitos de Software

[Vídeo de apresentação da entrega da Unidade 2](https://https://drive.google.com/file/d/1eL-pX9ZtqTw1kxeqhgj2W4x3wrRPZg4wqeVu55t22g/view?usp=sharing)

#### Quadro Kanbam

![QuadroKanban](./imagens/QuadroKanbam.png)
Disponível no zenhub do repositório.

----------

### Métodos de Desenvolvimento de Software

<span style="color:red">por favor, criem uma outra página específica para esse material. Deixem aqui, apenas os vídeos</span>.
<span style="color:red">outra supgestão: coloquem aqui, os links das outras páginas onde as entregas estão detalhadas. Ou seja: entrega 1: link para o Visão, etc,. Entrega 2: link para esse material, etc.</span>.


Participantes:

| Nome           | Matricula |
| -------------- | --------- |
| Alexia Naara   | 202045007 |
| Ana Caroline   | 190083930 |
| Carlos Eduardo | 190085584 |
| Davi Gonçalves | 190105071 |

> Título da atividade: O que é JSX?

> Tema da atividade: Typescript e JSX

> Foi realizado um DOJO sobre JSX e typescript em que iniciamos um projeto em typescript na sala com os alunos e introduzimos sobre o que é JSX e typescript e como utiliza-los

#### Teoria
1. JSX
    - O que é JSX? É uma extensão de sintaxe para JavaScript usada com o React.
    - Para que serve? Decreve como a UI deveria aparecer. 
    - JSX se destaca em relação à HTML não só pela simplicidade mas também pela sua proteção contra malwares
    - JSX pode simplificar estruturas de árvores inteiras de HTML em simples valores de JavaScript
    - O JSX tem sua sintaxebaseada diretamente em XML
    - O React adota o fato de que a lógica de renderização é basicamente acoplada com outras lógicas de UI: como eventos são manipulados, como o state muda com o tempo e como os dados são preparados para exibição
    - Ao invés de separar tecnologias sinteticamente, colocando markup e lógica em arquivos separados, o React separa conceitos com unidades pouco acopladas (componentes) que contém ambos.
    - O React não requer o uso do JSX, no entanto, deixa o processo mais prático quando se está trabalhando com uma UI dentro do código em JavaScript.

2. Typescript
    - Orientado a objetos e tipagem estática (reconhece o tipo da variável enquanto roda o código, tornando desnecessário a tipagem ao escrever)
    - TypeScript é um JavaScript com mais ferramentas que nos ajudam 
    - TypeScript destaca partes do código que podem gerar comportamento inesperado (bugs) 
    - Além da tipagem de javascript há outras como: any, unknow, never e void

#### Prática
1. Ambientação do sistema:
    1. Instalar o [node](https://nodejs.org/en/) 
    2. Se a versao do node for anterior a recente mais recomendada do site (atualmente a 16.16.0) é necessário atualizar o node e para isso usamos o nvm
    3. Para baixar o nvm é necessário ter o curl

        ```
        sudo apt install curl
        ```
        ```
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
        ```

    4. Após baixar o curl é só colocar nvm install e a versao desejada (no caso atual a 16.16.0)

        ```
        nvm install 16.16.0
        ```

    5. Agora podemos baixar o typescript e começar um projeto de react com um template em ts

        ```
        npm install typescript --save-dev
        npx create-react-app nomeProjeto –template typescript
        ```

    6. Iniciando o npm start podemos subir o site para visualizar no localhost

        ```
        npm start
        ```

    7. Será necessário mudar o nome dos arquivos de index.ts e app.ts para index.tsx e app.tsx para fazer o acoplamento com JSX

2. Aplicanto TSX
    - Em App.tsx podemos implementar uma função que disponibilize nome e sobrenome numa saudação personalizada

    function App(  ) {

        const user = {
            firstName: 'Harper',
            lastName: 'Perez'
        };

        function formatName(user: { firstName: string; lastName: string; }) {
            return user.firstName + ' ' + user.lastName;
        }

        const element = (
            <h1>
            {getGreeting(user)}
            </h1>
        );


        function getGreeting(user: any) {
            if (user) {
            return <h1>Hello, {formatName(user)}!</h1>;
            }
            return <h1>Hello, Stranger.</h1>;
        }

        return(
            <>
            {element}
            </>
        )


    }
    export default App;

    - Durante a aplicação do códgio os participantes estiveram a disposição dos alunos para resolver possíveis erros
    - Quem não conseguiu baixar o projeto teve a oportunidade de codar no [codesandbox](https://codesandbox.io/)
    - O projeto ficou disponível para consulta no [github](https://github.com/alexianaa/React-JSX)

3. Bibliografia 
    - [typescript com JSX](https://www.typescriptlang.org/pt/docs/handbook/jsx.html)
    - [typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
    - [JSX e React](https://pt-br.reactjs.org/docs/introducing-jsx.html)

4. Kahoot
    - Foi realizado uma atividade no kahoot com perguntas de quiz e verdade ou desafio, os 5 primeiros ganhadores receberam um bombom como premiação
----------

**Histórico de Versões**

| Data       | Versão | Descrição                       | Autor                                                         |
| ---------- | ------ | ------------------------------- | ------------------------------------------------------------- |
| 05/07/2022 | 0.1    | Entrega 1                       | [Arthur Ferreira](https://github.com/ArthurFerreiraRodrigues) |
| 19/07/2022 | 0.1.1  | Adicionando Tópico da Entrega 2 | [Arthur Ferreira](https://github.com/ArthurFerreiraRodrigues) |
| 19/07/2022 | 0.2    | Entrega 2 - MDS                 | [Alexia Naara](https://github.com/alexianaa)                  |
