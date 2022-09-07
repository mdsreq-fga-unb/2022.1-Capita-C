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
                <div className="section" >
                    <text className="title" >Loja</text>

                    <text className="inputTitle" >Nome da loja</text>
                    <input className="inputBox" name="name" value={loja?.nomeFantasia} placeholder={lojaInfo?.nomeFantasia} /* onChange={} */ ></input>
                    <text className="inputTitle" >CNPJ</text>
                    <input className="inputBox" name="cnpj" value={loja?.cnpjFinal} placeholder={lojaInfo?.status} ></input>
                    <text className="inputTitle" >Identificador</text>
                    <select className="inputBox" /* { loja?.identificadorMatrizFiliar } */>
                        <option value="Matriz" >Matriz</option> {/**/}
                        <option value="Filial" >Filial</option>
                    </select>
                    <div className="minorDiv">
                        <text className="inputTitle" >Atribuição</text>
                        <text className="inputTitle" >Status de Parceria</text>
                    </div>
                    <div className="minorDiv" >
                        <select className="minorInput" /* { loja?.atribuido? 'Verdadeiro': 'Falso' } */>
                            <option value="atribuidoVer" >Verdadeiro</option>
                            <option value="atribuidoFal" >Falso</option>
                        </select>
                        <select className="minorInput" /* { loja?.parceriaAceita */>
                            <option value="parceriaSuc" >Secesso</option>
                            <option value="parceriaPro" >Processando</option>
                            <option value="parceriaRec" >Recusado</option>
                        </select>
                    </div>
                    <text className="inputTitle" >Cnaes</text>
                    <input className="inputBox" name="cnaes" value={loja?.cnaes} placeholder={lojaInfo?.cnaes} ></input>
                </div>
                <div className="section" >
                    <text style={{ marginTop: 5, marginBottom: 5 }} >Contato</text>

                    <text className="inputTitle" >Telefone</text>
                    <input className="inputBox" name="telefone" /* value={loja?.telefone[0]} placeholder={lojaInfo?.telefone[0]} */ ></input>
                    <text className="inputTitle" >Telefone Secundário</text>
                    <input className="inputBox" name="telefoneSec" /* value={loja?.telefone[1]} placeholder={lojaInfo?.telefone[1]} */ ></input>
                    <text className="inputTitle" >E-mail</text>
                    <input className="inputBox" name="email" /* value={loja?.correioEletronico[0]} placeholder={lojaInfo?.correioEletronico[0]} */ ></input>
                </div>
                <div className="section" >
                    <text style={{ marginTop: 5, marginBottom: 5 }} >Endereço</text>

                    <text className="inputTitle" >CEP</text>
                    <input className="inputBox" name="cep" /* value={loja?.cep} placeholder={lojaInfo?.cep} */ ></input>
                    <text className="inputTitle" >Logradouro</text>
                    <input className="inputBox" name="logradouro" /* value={loja?.logadouro} placeholder={lojaInfo?.logadouro} */ ></input>
                    <div className="minorDiv">
                        <text className="inputTitle" >Bairro</text>
                        <text className="inputTitle" >Estado</text>
                    </div>
                    <div className="minorDiv" >
                        <input className="minorInput" name="complemento" /* value={loja?.bairro} placeholder={lojaInfo?.bairro} */ ></input>
                        <input className="minorInput" name="estado" /* value={loja?.unidadeFederativa} placeholder={lojaInfo?.unidadeFederativa} */ ></input>
                    </div>
                    <text className="inputTitle" >Observação</text>
                    <input className="inputBox" name="observacao" style={{ height: 50 }} /* value={loja?.complemento} placeholder={lojaInfo?.complemento} */ ></input>
                </div>
                <div className="buttons">
                    <span className="botao" >
                        <text className="botaoText">
                            Atualizar
                        </text>
                    </span>
                    <span className="botao" onClick={() => closeModal(false)} >
                        <text className="botaoText">
                            Cancelar
                        </text>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ModalLoja;