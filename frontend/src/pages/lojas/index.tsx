import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import './index.css';
import {useState} from 'react'
import { CardLoja } from '../../components/cardLoja';

const Lojas = () => {
    
    const lojas = [ {
        "cnpj": "01671634000210",
        "nome_fantasia": "Polar Tintas",
        "bairro": "Asa Sul",
        "cep": "70360515",
        "ddd_telefone_1": "61  33840552",
      }, {
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
      }, {
        "cnpj": "02107803001651",
        "nome_fantasia": "Unitintas",
        "bairro": "Areal (Aguas Claras)",
        "cep": "71953000",
        "ddd_telefone_1": "61  32520505",

      }, {
        "cnpj": "03564417000256",
        "nome_fantasia": "Madeiras Novo Planalto",
        "bairro": "Ponte Alta Norte (Gama)",
        "cep": "72427010",
        "ddd_telefone_1": "61  35257919",
      }]

    const [count, setCount] = useState(5);
   
    
    return (

        <div className="main">
            <Header/>
            <div className="sidebar-index">
                <Sidebar/>
                <div className='index'>
                    <div className="header-lojas"> 
                        <span>Total de lojas: {count}</span>
                        <span>Adicionar loja +</span>
                    </div>
                    <div className="cards">
                        {lojas.map((element, i) => {
                            return (
                                <CardLoja nome={element.nome_fantasia} cnpj={element.cnpj} telefone={element.ddd_telefone_1} cep={element.cep} bairro={element.bairro}/>
                            )
                        })}
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Lojas;

// <CardLoja nome={lojas[0].nome_fantasia} cnpj={lojas[0].cnpj} telefone={lojas[0].ddd_telefone_1} telefone2={lojas[0].ddd_telefone_2} cep={lojas[0].cep} endereco={lojas[0].descricao_tipo_logradouro}/>