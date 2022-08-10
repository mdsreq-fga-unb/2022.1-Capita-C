import React, { ChangeEvent, useContext, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";

const Login = () => {
    const [user, setUser] = useState({email: '', senha: ''});
    const context = useContext(AuthContext);
    let navigate = useNavigate();

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        // ao mudar as informacoes das caixas de texto
        const {value,name} = e.currentTarget
        setUser({...user,[name]: value})
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
                <p>Digite o seu email: </p>
                <input className="input" name="email" value={user.email} onChange={e => handleInput(e)} />
                <p>Digite a sua senha: </p>
                <input className="input" type="password" name="senha" value={user.senha} onChange={e => handleInput(e)} />
                <br/><br/>
                <button id="btn" onClick={() => { handleClick() }} >Enviar</button>
                <br/>
            </div>
        </div>
    )
}

export default Login;