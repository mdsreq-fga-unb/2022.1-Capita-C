import './index.css'
import editIcon from '../../images/edit-icon.svg'
import editIconRed from '../../images/edit-icon-red.svg'
import deleteIcon from '../../images/delete-icon.svg'
import deleteIconRed from '../../images/delete-icon-red.svg'
import { useState } from 'react';
import ModalLoja from '../modalLoja';

interface User {
    cpf: String,
    password: String,
    name: String,
    email: String,
    isAdmin: Boolean,
    isManager: Boolean,
    isTelemarketing: Boolean,
    status: Boolean,
    designatedCnpjs: String[]
}
interface Loja {
    cnpjFinal: String,
    identificadorMatrizFiliar: String,
    nomeFantasia: String,
    cnaes: String[],
    tipoLogradouro: String,
    logradouro: String,
    numero: String,
    complemento: String,
    bairro: String,
    cep: Number,
    unidadeFederativa: String,
    municipio: String,
    telefone: String[],
    correioEletronico: String[],
    atribuido: Boolean,
    parceriaAceita: String,
    responsavelCpf: String,
    responsavel: User
}

export function CardLoja(lojaCard: any) {
    const loja = lojaCard.lojaCard
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="cardWraper">
            <text className='loja-nome'>{loja.nomeFantasia}</text>
            <div className='icons'>
                <img className='edit-icon' onClick={() => setOpenModal(true)} src={editIcon} onMouseOver={e => (e.currentTarget.src = editIconRed)} onMouseOut={e => (e.currentTarget.src = editIcon)} />
                <img className='delete-icon' onClick={() => alert("deletar")} src={deleteIcon} onMouseOver={e => (e.currentTarget.src = deleteIconRed)} onMouseOut={e => (e.currentTarget.src = deleteIcon)} />
            </div>
            {openModal && <ModalLoja closeModal={setOpenModal} />}
        </div>
    );
}