import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import './index.css'

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

const ModalLoja = ({ closeModal }: any, lojaInfo: any) => {
    const [loja, setLoja] = useState<Loja>(lojaInfo)
    //console.log(lojaInfo)
    return (
        <div className="modalDiv" >
            <div className="boxContent">
            <button onClick={() => closeModal(false)} >Cancelar</button>
                <text className="Title" >Loja</text>
                <text className="inputTitle" >Nome da loja</text>
                <input className="inputBox" name="name" value={loja?.nomeFantasia} placeholder={lojaInfo?.nomeFantasia} /* onChange={} */ ></input>
                <text className="inputTitle" >CNPJ</text>
                <input className="inputBox" name="cnpj" value={loja?.cnpjFinal} placeholder={lojaInfo?.cnpjFinal} ></input>
                <text className="SectionTitle">Contato</text>
                <text className="SectionTitle">Endereço</text>
            </div>
        </div>
    )
}

export default ModalLoja;