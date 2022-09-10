import React, { ChangeEvent, useContext, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import LogoImage from '../../images/LogoBackground.svg'
import CapitalLogo from '../../images/capitalLogo.svg'

const Login = () => {
    const [user, setUser] = useState({ cpf: '', password: '' });
    const context = useContext(AuthContext);
    let navigate = useNavigate();

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        // ao mudar as informacoes das caixas de texto guarda os valores em user
        const { value, name } = e.currentTarget
        setUser({ ...user, [name]: value })
    }

    const handleClick = async () => {
        try {
            const log = context.signIn(user)// loga e redireciona para pagina home
        } catch (error) {
            alert("Erro ao logar")
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
                <div id="box" >
                    <br /><br />
                    <h2>Login</h2>
                    <div id="formDiv">
                        <div className="inputDiv" >
                            <text className="inputText" >CPF: </text>
                            <input className="input" name="cpf" value={user.cpf} onChange={e => handleInput(e)} />
                        </div>
                        <div className="inputDiv" >
                            <text className="inputText" >Senha: </text>
                            <input className="input" type="password" name="password" value={user.password} onChange={e => handleInput(e)} />
                        </div>
                        <button id="btn" onClick={() => { handleClick() }} >LOGIN</button>
                    </div>
                </div>
                <img
                    src={LogoImage}
                    style={{ height: 550, width: 1500 }}
                    alt="website logo"
                />
            </div>
        </div>
    )
}

export default Login;