import './index.css'
import editIcon from '../../images/edit-icon.svg'
import editIconRed from '../../images/edit-icon-red.svg'
import deleteIcon from '../../images/delete-icon.svg'
import deleteIconRed from '../../images/delete-icon-red.svg'
import { useState } from 'react';
import ModalLoja from '../modalLoja';

interface CardProps {
    nome?: String;
    cnpj?: String;
    telefone?: String;
    cep?: String;
    bairro?: String;

}

export function CardLoja({ nome, cnpj, telefone, cep, bairro }: CardProps) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="cardWraper">
            <text className='loja-nome' onClick={() => alert(`cnpj: ${cnpj}, telefone: ${telefone}, cep: ${cep}, bairro: ${bairro}`)} >{nome}</text>
            <div className='icons'>
                <img className='edit-icon' onClick={() => setOpenModal(true)} src={editIcon} onMouseOver={e => (e.currentTarget.src = editIconRed)} onMouseOut={e => (e.currentTarget.src = editIcon)} />
                <img className='delete-icon' onClick={() => alert("deletar")} src={deleteIcon} onMouseOver={e => (e.currentTarget.src = deleteIconRed)} onMouseOut={e => (e.currentTarget.src = deleteIcon)} />
            </div>
            {openModal && <ModalLoja closeModal={setOpenModal} />}
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
