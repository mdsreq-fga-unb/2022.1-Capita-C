import React, { ChangeEvent, useContext, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import LogoImage from '../../images/LogoBackground.svg'
import CapitalLogo from '../../images/capitalLogo.svg'

const Profile = () => {
    const [user, setUser] = useState({
        cpf: '',
        name: '',
        email: '',
        telefone: '',
        senha:'',
      },);

    const context = useContext(AuthContext);
    let navigate = useNavigate();

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        // ao mudar as informacoes das caixas de texto guarda os valores em user
        const { value, name } = e.currentTarget
        setUser({ ...user, [name]: value })
    }

    const handleClick = async () => {
        try {
            async () => navigate("/home") // loga e redireciona para pagina home
        } catch (error) {
            alert("Erro")
        }
    }

    return (
        <div id="mainDiv" >
            <div id="rodape" >
                <img
                    src={CapitalLogo}
                    style={{ height: 36, width: 117.83, marginRight: 30 }}
                    alt="Capital atacadista"
                />
                <text style={{ marginTop: 10 }} >Capitação de Clientes</text>
            </div>

            <div id="body">
                <h2>Perfil</h2>
                <div id="formDiv">

                    <div className="inputDiv" >
                        <text className="inputText" >CPF: </text>
                        <input className="input" name="cpf" value={user.cpf} onChange={e => handleInput(e)} />
                    </div>

                    <div className="inputDiv" >
                        <text className="inputText" >Nome: </text>
                        <input className="input" name="nome" value={user.name} onChange={e => handleInput(e)} />
                    </div>

                    <div className="inputDiv" >
                        <text className="inputText" >Email: </text>
                        <input className="input" name="email" value={user.email} onChange={e => handleInput(e)} />
                    </div>

                    <div className="inputDiv" >
                            <text className="inputText" >Telefone: </text>
                            <input className="input" name="telefone" value={user.telefone} onChange={e => handleInput(e)} />
                    </div>

                    <div className="inputDiv" >
                            <text className="inputText" >Telefone: </text>
                            <input className="input" name="telefone" value={user.telefone} onChange={e => handleInput(e)} />
                    </div>


                    <button id="btn" onClick={() => { handleClick() }} >SAIR</button>
                
                </div>
            </div>
        </div>
    )
}

export default Profile;