import './index.css'


interface CardProps {
    nome?: String;
    cnpj?: String;
    telefone?: String;
    cep?: String;
    bairro?: String;

}


export function CardLoja({nome, cnpj, telefone, cep, bairro}: CardProps){
    return(
        <div className="cardWraper">
                <p>Nome: {nome}</p>
                <p>CNPJ:  {cnpj}</p>
                <p>Telefone Primário:  {telefone}</p>
                <p>CEP:  {cep}</p>
                <p>Bairro:  {bairro}</p>  
        </div>
    );
}

// export function CardLoja(nome: String, cnpj:String, telefone: String, telefone2: String, cep: String, endereco: String){
//     return(
//         <div className="cardWraper">
//                 <span>Nome: {nome}</span>
//                 <span>CNPJ: {cnpj}</span>
//                 <span>Telefone: {telefone}</span>
//                 <span>Telefode Secundário: {telefone2}</span>
//                 <span>CEP: {nome}</span>
//                 <span>ENDERECO: {nome}</span>
//         </div>
//     );
// }