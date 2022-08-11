import React, { ChangeEvent, useContext, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import LogoImage from '../../images/LogoBackground.svg'

const Login = () => {
    const [user, setUser] = useState({ email: '', senha: '' });
    const context = useContext(AuthContext);
    let navigate = useNavigate();

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        // ao mudar as informacoes das caixas de texto
        const { value, name } = e.currentTarget
        setUser({ ...user, [name]: value })
    }

    const handleClick = async () => {
        try {
            context.signIn(user);
            navigate("/home"); // redireciona para pagina home
        } catch (error) {
            alert("Erro ao logar")
        }
    }

    return (
        <div id="mainDiv" >
            <div id="box" >
                <h2>Login</h2>
                <div id="formDiv">
                    <div className="inputDiv" >
                        <text>Usuário: </text>
                        <input className="input" name="email" value={user.email} onChange={e => handleInput(e)} />
                    </div>
                    <div className="inputDiv" >
                        <text>Senha: </text>
                        <input className="input" type="password" name="senha" value={user.senha} onChange={e => handleInput(e)} />
                    </div>
                    <button id="btn" onClick={() => { handleClick() }} >Enviar</button>
                </div>
                <div id="semLogin" >
                    <p>Recuperar senha</p>
                    <p>Não possui conta? Cadastre-se</p>
                </div>
            </div>
            <img
              src={LogoImage}
              style={{ height: 550, width: 1500 }}
              alt="website logo"
            />
        </div>
    )
}

export default Login;