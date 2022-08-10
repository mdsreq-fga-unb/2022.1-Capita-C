import React, { ChangeEvent, useContext, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import api from "../../services/api";

const Login = () => {
    const [user, setUser] = useState({name: '', senha: ''});
    const context = useContext(AuthContext);
    let navigate = useNavigate();

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        // ao mudar as informacoes das caixas de texto
        const {value,name} = e.currentTarget
        setUser({...user,[name]: value})
    }

    const handleClick = async () => {
        try {
            const response = context.Login(user);
            alert(`Bem vindo(a) ${user.name}`)
            navigate("/home"); // redireciona para pagina home
        } catch (error) {
            alert("erro ao logar")
        }
    }

    return (
        <div id="mainDiv" >
            <div id="box" >
                <h2>Login</h2>
                <p>Digite o seu nome: </p>
                <input className="input" name="name" value={user.name} onChange={e => handleInput(e)} />
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