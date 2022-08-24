import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import './index.css';
import { useState } from 'react'
import { CardLojaUser } from '../../components/carLojaAtendente';

const HomePageUser = () => {

    const lojas = [ {
        "cnpj": "02107803002119",
        "nome_fantasia": "Unitintas Comercio De Tintas Ltda",
        "bairro": "Taguatinga Norte (Taguatinga)",
        "cep": "72125260",
        "ddd_telefone_1": "61  34035000",
    }, {
        "cnpj": "02107803001732",
        "nome_fantasia": "Unitintas",
        "bairro": "Asa Norte",
        "cep": "70761610",
        "ddd_telefone_1": "61  33482800",
    }]

    const [count, setCount] = useState(2);


    return (

        <div className="main">
            <Header />
            <div className="sidebar-index">
                <Sidebar />
                <div className='index'>
                    <div className="header-lojas">
                        <span id='totalLojas' >Total de lojas: {count}</span>
                    </div>
                    <text id='titulo' >LOJAS</text>
                    <div className="cards">
                        {lojas.map((element, i) => {
                            return (
                                <CardLojaUser nome={element.nome_fantasia} cnpj={element.cnpj} telefone={element.ddd_telefone_1} cep={element.cep} bairro={element.bairro} />
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>

    )
}

export default HomePageUser;

// <CardLoja nome={lojas[0].nome_fantasia} cnpj={lojas[0].cnpj} telefone={lojas[0].ddd_telefone_1} telefone2={lojas[0].ddd_telefone_2} cep={lojas[0].cep} endereco={lojas[0].descricao_tipo_logradouro}/>