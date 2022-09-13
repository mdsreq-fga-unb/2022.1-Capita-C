import './index.css'
import editIcon from '../../images/edit-icon.svg'
import deleteIcon from '../../images/delete-icon.svg'

interface CardProps {
    nome?: String;
    cpf?: String;
    telefone?: String;
    email?: String;

}

export function CardUsuario({ nome, cpf, email }: CardProps) {
    return (
        <div className="cardWraper">
            <text className='usuario-nome' onClick={() => alert(`cnpj: ${cpf}, cep: ${email}`)} >{nome}</text>
            <div className='icons'>
                <img onClick={() => alert("editar")} src={editIcon} />
            </div>
        </div>
    );
}