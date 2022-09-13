import './index.css'
import editIcon from '../../images/edit-icon.svg'
import deleteIcon from '../../images/delete-icon.svg'

interface CardProps {
    nome?: String;
    cpf?: String;
    telefone?: String;
    email?: String;

}

export function CardUsuario({ nome, cpf, telefone, email }: CardProps) {
    return (
        <div className="cardWraper">
            <text className='usuario-nome' onClick={() => alert(`cnpj: ${cpf}, telefone: ${telefone}, cep: ${email}`)} >{nome}</text>
            <div className='icons'>
                <img onClick={() => alert("editar")} src={editIcon} />
                <img className='delete-icon' onClick={() => alert("deletar")} src={deleteIcon} />
            </div>
        </div>
    );
}