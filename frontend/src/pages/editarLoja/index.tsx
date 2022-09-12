import './index.css';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import { editarLojaService, listarLojaInfo } from '../../services/lojas.api';
import AuthContext from '../../contexts/auth';

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
    const [loja, setLoja] = useState<Loja>()
    const [parceriaStatus, setParceriaStatus] = useState()
    const logEdicao = []

    // opcoes dos campos de select
    const optionsParceria = ['Aceita', 'Processando', 'Recusada'];

    async function getLoja(cnpj: string, token: string) {
        const response = await listarLojaInfo(cnpj, token);
        if (response) {
            setLoja(response.data)
            setParceriaStatus(response.data.parceriaAceita)
        }
    }

    useEffect(() => {

        if (cnpj && token) {
            getLoja(cnpj, token)
        }

    }, [])

    function handleInput(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        // ao mudar as informacoes das caixas de texto guarda os valores em user
        const { value, name } = e.currentTarget
        if (name === 'atribuido' && loja) {
            if (value == 'Verdadeiro') {
                setLoja({ ...loja, [name]: true })
            } else {
                setLoja({ ...loja, [name]: false })
            }
        } else {
            if (loja) {
                setLoja({ ...loja, [name]: value })
            }
        }
    }

    async function handleSubmit(cnpj: string | undefined, token: string | null, loja: Loja | undefined) {
        if (cnpj && token && loja) {
            const response = await editarLojaService(cnpj, token, loja)
            if (response) {
                getLoja(cnpj, token)
                return (
                    alert("Atualizado com sucesso!")
                )
            }
        }
    }

    return (
        <div className="main" >
            <Header />
            <div className="sidebar-index" >
                <Sidebar />
                <div className="index" >
                    <div className="section" >
                        <text className="title" >Editar Loja</text>

                        <text className="inputTitle" >Nome da loja</text>
                        <input className="inputBox" name="nomeFantasia" disabled defaultValue={loja?.nomeFantasia} ></input>
                        <text className="inputTitle" >CNPJ</text>
                        <input className="inputBox" name="cnpjFinal" disabled defaultValue={loja?.cnpjFinal} ></input>
                        <text className="inputTitle" >Identificador</text>
                        <input className="inputBox" name="identificadorMatrizFiliar" disabled defaultValue={loja?.identificadorMatrizFiliar}  ></input>
                        <div className="minorDiv">
                            <text className="inputTitle" >Atribuição</text>
                            <text className="inputTitle" >Status de Parceria</text>
                        </div>
                        <div className="minorDiv" >
                            <input className="minorInput" name="atribuido" defaultValue={loja?.atribuido ? 'Verdadeiro' : 'Falso'} disabled onChange={(e) => handleInput(e)} ></input>
                            {
                                parceriaStatus &&
                                <select className="minorInput" name="parceriaAceita" defaultValue={parceriaStatus} onChange={(e) => handleInput(e)} >
                                    {
                                        optionsParceria.map((item) => { return (<option >{item}</option>) })
                                    }
                                </select>
                            }
                        </div>
                        <text className="inputTitle" >Cnaes</text>
                        <input className="inputBox" name="cnaes" disabled defaultValue={loja?.cnaes.map((item: any) => { return (item.cnae) })} onChange={(e) => handleInput(e)} ></input>
                    </div>
                    <div className="section" >
                        <text style={{ marginTop: 5, marginBottom: 5 }} >Contato</text>

                        <text className="inputTitle" >Telefone</text>
                        <input className="inputBox" name="telefone[0]" defaultValue={loja?.telefone[0].numeroTelefone} onChange={(e) => handleInput(e)} ></input>
                        <text className="inputTitle" >Telefone Secundário</text>
                        <input className="inputBox" name="telefone[1]" defaultValue={loja?.telefone[1].numeroTelefone} onChange={(e) => handleInput(e)} ></input>
                        <text className="inputTitle" >E-mail</text>
                        <input className="inputBox" name="correioEletronico" disabled defaultValue={loja?.correioEletronico[0].email} onChange={(e) => handleInput(e)} ></input>
                    </div>
                    <div className="section" >
                        <text style={{ marginTop: 5, marginBottom: 5 }} >Endereço</text>

                        <text className="inputTitle" >CEP</text>
                        <input className="inputBox" name="cep" defaultValue={loja?.cep.toString()} onChange={(e) => handleInput(e)} ></input>
                        <text className="inputTitle" >Logradouro</text>
                        <input className="inputBox" name="logradouro" defaultValue={loja?.logradouro} onChange={(e) => handleInput(e)} ></input>
                        <div className="minorDiv">
                            <text className="inputTitle" >Bairro</text>
                            <text className="inputTitle" >Estado</text>
                        </div>
                        <div className="minorDiv" >
                            <input className="minorInput" name="bairro" defaultValue={loja?.bairro} onChange={(e) => handleInput(e)} ></input>
                            <input className="minorInput" name="unidadeFederativa" defaultValue={loja?.unidadeFederativa} onChange={(e) => handleInput(e)} ></input>
                        </div>
                        <text className="inputTitle" >Observação</text>
                        <input className="inputBox" name="complemento" style={{ height: 50 }} defaultValue={loja?.complemento} onChange={(e) => handleInput(e)} ></input>
                    </div>
                    <div className="divBotao">
                        <div className="editBotao" >
                            <text className="botaoText" onClick={() => handleSubmit(cnpj, token, loja)}>
                                ATUALIZAR
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default EditarLoja