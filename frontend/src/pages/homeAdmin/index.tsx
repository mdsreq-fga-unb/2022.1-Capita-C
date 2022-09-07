import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import './index.css';
import React, { useContext, useEffect, useState } from 'react'
import { CardLoja } from '../../components/cardLoja';
import listarLojasService from '../../services/lojas.api';
import AuthContext from '../../contexts/auth';

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

const HomePageAdmin = () => {
    const { token } = useContext(AuthContext)
    const [lojas, setLojas] = useState([])
    const [count, setCount] = useState(5);

    useEffect(() => {
        getLojas()
    }, []) // pegar as lojas apenas uma vez atravez do service

    async function getLojas() {
        if (token) {
            const response = await listarLojasService(token);
            if (response) {
                setLojas(response.data)
            }
        }
    }

    return (

        <div className="main">
            <Header />
            <div className="sidebar-index">
                <Sidebar />
                <div className='index'>
                    <div className="header-lojas">
                        <span id='totalLojas' >Total de lojas: {count}</span>
                        <div className='botao'>
                            <div className='botaoText'>+ Adicionar Loja</div>
                        </div>
                    </div>
                    <text id='titulo' >LOJAS</text>
                    <div className="cards">
                        { // passa por todas as lojas gerando um card com o nome
                            lojas?.map(function (item: Loja) {
                                //console.log(item)
                                return (
                                    <CardLoja lojaCard={item} />
                                )
                            })
                        }
                    </div>
                    <div className='atribuirLoja' >
                        <div className='botao'>Atribuir Loja {'>'} </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePageAdmin;