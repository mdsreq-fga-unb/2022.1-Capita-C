import React, { ChangeEvent, useContext, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import LogoImage from '../../images/LogoBackground.svg'
import CapitalLogo from '../../images/capitalLogo.svg'

const Login = () => {
    const [user, setUser] = useState({ cpf: '', senha: '' });
    const context = useContext(AuthContext);
    let navigate = useNavigate();

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        // ao mudar as informacoes das caixas de texto guarda os valores em user
        const { value, name } = e.currentTarget
        setUser({ ...user, [name]: value })
    }

    const handleClick = async () => {
        try {
            context.signIn(user).then(() => navigate("/home")) // loga e redireciona para pagina home
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
                            <text className="inputText" >Usuário: </text>
                            <input className="input" name="cpf" value={user.cpf} onChange={e => handleInput(e)} />
                        </div>
                        <div className="inputDiv" >
                            <text className="inputText" >Senha: </text>
                            <input className="input" type="password" name="senha" value={user.senha} onChange={e => handleInput(e)} />
                        </div>
                        <button id="btn" onClick={() => { handleClick() }} >LOGIN</button>
                    </div>
                    <div id="semLogin" >
                        <p className="otherLogin" onClick={() => alert("Recuperar Senha")} >Recuperar senha</p>
                        <text className="otherLoginText" >Não possui conta? </text>
                        <text className="otherLogin" onClick={() => alert("Cadastre-se")} >Cadastre-se</text>
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