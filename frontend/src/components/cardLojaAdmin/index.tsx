import { useContext, useState } from "react";
import editIcon from '../../images/edit-icon.svg'
import editIconRed from '../../images/edit-icon-red.svg'
import './index.css'
import { useNavigate, useParams } from "react-router-dom";
import { deletarLojaService } from "../../services/lojas.api";
import AuthContext from "../../contexts/auth";

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

const CardLojaAdmin = ({ lojaCard }: any) => {
    const [loja, setLoja] = useState(lojaCard);
    let navigate = useNavigate();

    return (
        <div className="cardWraper">
            <text className='loja-nome'>{loja.nomeFantasia}</text>
            <div className='icons'>
                <img className='edit-icon' onClick={() => { navigate(`loja-edit/${loja.cnpjFinal}`) }} src={editIcon} onMouseOver={e => (e.currentTarget.src = editIconRed)} onMouseOut={e => (e.currentTarget.src = editIcon)} />
            </div>
        </div>
    )
}

export default CardLojaAdmin;