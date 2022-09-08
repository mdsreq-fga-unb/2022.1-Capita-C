import React, { useState } from "react";

import ModalLoja from '../../components/modalLoja';
import editIcon from '../../images/edit-icon.svg'
import editIconRed from '../../images/edit-icon-red.svg'
import deleteIcon from '../../images/delete-icon.svg'
import deleteIconRed from '../../images/delete-icon-red.svg'

interface User {
    cpf: string,
    password: string,
    name: string,
    email: string,
    isAdmin: Boolean,
    isManager: Boolean,
    isTelemarketing: Boolean,
    status: Boolean,
    designatedCnpjs: string[]
}
interface Loja {
    cnpjFinal: string,
    identificadorMatrizFiliar: string,
    nomeFantasia: string,
    cnaes: string[],
    tipoLogradouro: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cep: Number,
    unidadeFederativa: string,
    municipio: string,
    telefone: string[],
    correioEletronico: string[],
    atribuido: Boolean,
    parceriaAceita: string,
    responsavelCpf: string,
    responsavel: User
}

const CardLojaAdmin = (infoLoja: any) => {
    const [loja, setLoja] = useState(infoLoja)
    const [openModal, setOpenModal] = useState(false);
    function handleClick(lojaInfo: Loja) {
        setOpenModal(true)
        setLoja(lojaInfo)
        console.log(infoLoja)   
    }

    return (
        <div className="cardWraper">
            <text className='loja-nome'>{loja.nomeFantasia}</text>
            <div className='icons'>
                <img className='edit-icon' onClick={() => handleClick(infoLoja)} src={editIcon} onMouseOver={e => (e.currentTarget.src = editIconRed)} onMouseOut={e => (e.currentTarget.src = editIcon)} />
                <img className='delete-icon' onClick={() => alert("Deseja deletar essa loja?")} src={deleteIcon} onMouseOver={e => (e.currentTarget.src = deleteIconRed)} onMouseOut={e => (e.currentTarget.src = deleteIcon)} />
            </div>
            {openModal && infoLoja && <ModalLoja closeModal={setOpenModal} lojaInfo={loja} />}
        </div>
    )
}

export default CardLojaAdmin;