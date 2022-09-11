import './index.css';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import axios from 'axios';
import { listarLojaInfo } from '../../services/lojas.api';
import AuthContext from '../../contexts/auth';
import Select from 'react-select';
import { getValue } from '@testing-library/user-event/dist/utils';

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
    telefone: {
        numeroTelefone: string,
        origemTelefone: string
    }[],
    correioEletronico: {
        email: string,
        origemEmail: string
    }[],
    atribuido: Boolean,
    parceriaAceita: string,
    responsavelCpf: string,
    responsavel: User
}
const EditarLoja = () => {
    const { cnpj } = useParams();
    const { token } = useContext(AuthContext)
    const [loja, setLoja] = useState<Loja | null>(null)
    const optionsIdentificador = ['Matriz', 'Filial'];
    const optionsParceria = ['Aceita', 'Processando', 'Recusada'];
    const optionsAtribuido = ['Verdadeiro', 'Falso'];


    useEffect(() => {
        async function getLoja(cnpj: string, token: string) {
            const response = await listarLojaInfo(cnpj, token);
            if (response) {
                setLoja(response.data)
            }
        }

        if (cnpj && token) {
            getLoja(cnpj, token)
        }

    }, [])

    return (
        <div className="main" >
            <Header />
            <div className="sidebar-index" >
                <Sidebar />
                <div className="index" >
                    <div className="section" >
                        <text className="title" >Editar Loja</text>

                        <text className="inputTitle" >Nome da loja</text>
                        <input className="inputBox" name="name" defaultValue={loja?.nomeFantasia} ></input>
                        <text className="inputTitle" >CNPJ</text>
                        <input className="inputBox" name="cnpj" defaultValue={loja?.cnpjFinal} ></input>
                        <text className="inputTitle" >Identificador</text>
                        <select className="inputBox" defaultValue={loja?.identificadorMatrizFiliar}  >
                            {
                                optionsIdentificador.map((item) => (<option>{item}</option>))
                            }
                        </select>
                        <div className="minorDiv">
                            <text className="inputTitle" >Atribuição</text>
                            <text className="inputTitle" >Status de Parceria</text>
                        </div>
                        <div className="minorDiv" >
                            <select className="minorInput" defaultValue={loja?.atribuido ? 'Verdadeito' : 'Falso'} >
                                {
                                    optionsAtribuido.map((item) => (<option>{item}</option>))
                                }
                            </select>
                            <select className="minorInput" defaultValue={loja?.parceriaAceita} >
                                {
                                    optionsParceria.map((item) => (<option>{item}</option>))
                                }
                            </select>
                        </div>
                        <text className="inputTitle" >Cnaes</text>
                        <input className="inputBox" name="cnaes" defaultValue={loja?.cnaes.map((item: any) => { return (item.cnae) })} ></input>
                    </div>
                    <div className="section" >
                        <text style={{ marginTop: 5, marginBottom: 5 }} >Contato</text>

                        <text className="inputTitle" >Telefone</text>
                        <input className="inputBox" name="telefone" defaultValue={loja?.telefone[0].numeroTelefone}></input>
                        <text className="inputTitle" >Telefone Secundário</text>
                        <input className="inputBox" name="telefoneSec" defaultValue={loja?.telefone[1].numeroTelefone}></input>
                        <text className="inputTitle" >E-mail</text>
                        <input className="inputBox" name="email" defaultValue={loja?.correioEletronico.map((item: any) => { return (item.email) })} ></input>
                    </div>
                    <div className="section" >
                        <text style={{ marginTop: 5, marginBottom: 5 }} >Endereço</text>

                        <text className="inputTitle" >CEP</text>
                        <input className="inputBox" name="cep" defaultValue={loja?.cep.toString()} ></input>
                        <text className="inputTitle" >Logradouro</text>
                        <input className="inputBox" name="logradouro" defaultValue={loja?.logradouro} ></input>
                        <div className="minorDiv">
                            <text className="inputTitle" >Bairro</text>
                            <text className="inputTitle" >Estado</text>
                        </div>
                        <div className="minorDiv" >
                            <input className="minorInput" name="complemento" defaultValue={loja?.bairro} ></input>
                            <input className="minorInput" name="estado" defaultValue={loja?.unidadeFederativa} ></input>
                        </div>
                        <text className="inputTitle" >Observação</text>
                        <input className="inputBox" name="observacao" style={{ height: 50 }} defaultValue={loja?.complemento}></input>
                    </div>
                    <div className="divBotao">
                        <div className="editBotao" >
                            <text className="botaoText">
                                Atualizar
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default EditarLoja