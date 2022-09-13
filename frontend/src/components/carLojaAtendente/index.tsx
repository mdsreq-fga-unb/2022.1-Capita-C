import './index.css'
import editIcon from '../../images/edit-icon.svg'
import deleteIcon from '../../images/delete-icon.svg'

interface CardProps {
    nome?: String;
    cnpj?: String;
    telefone?: String;
    cep?: String;
    bairro?: String;

}

export function CardLojaUser({ nome, cnpj, telefone, cep, bairro }: CardProps) {
    return (
        <div className="cardWraper">
            <text className='loja-nome' onClick={() => alert(`cnpj: ${cnpj}, telefone: ${telefone}, cep: ${cep}, bairro: ${bairro}`)} >{nome}</text>
            <div className='icons'>
                <img onClick={() => alert("editar")} src={editIcon} />
            </div>
        </div>
    );
}

/* export function CardLoja({nome, cnpj, telefone, cep, bairro}: CardProps){
    return(
        <div className="cardWraper">
                <p>Nome: {nome}</p>
                <p>CNPJ:  {cnpj}</p>
                <p>Telefone Primário:  {telefone}</p>
                <p>CEP:  {cep}</p>
                <p>Bairro:  {bairro}</p>
        </div>
    );
} */
