import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import './index.css';
import React, { useContext, useEffect, useState } from 'react'
import { CardLoja } from '../../components/cardLoja';
import listarLojasService from '../../services/lojas.api';
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
    telefone: string[],
    correioEletronico: string[],
    atribuido: Boolean,
    parceriaAceita: string,
    responsavelCpf: string,
    responsavel: User
}

const HomePageAdmin = () => {
    const { token } = useContext(AuthContext)
    const [lojas, setLojas] = useState([])
    const [count, setCount] = useState(lojas.length);

    useEffect(() => {
        getLojas()
        setCount(lojas.length)
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
                        <div className='botao' >
                            <div className='botaoText'>Atribuir Loja {'>'} </div>
                        </div>
                    </div>
                    <text id='titulo' >LOJAS</text>
                    { // passa por todas as lojas gerando um card com o nome
                        lojas?.map(function (item: Loja) {
                            //console.log(item)
                            return (
                                <CardLoja lojaCard={item} />
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default HomePageAdmin;