import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import api from "../../services/api";
import "./index.css";

const Login = () => {
    const [user, setUser] = useState({email: '', senha: ''});

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        const {value,name} = e.currentTarget
        setUser({...user,[name]: value})
    }

    const handleClick = async () => {
       // enviar o nome de usuário e a senha ao servidor
        const response = await axios.post(
            "http://locallhost:3000/login",
            user
        );
    }

    return (
        <div id="mainDiv" >
            <div id="box" >
                <h2>Login</h2>
                <p>Digite o seu nome: </p>
                <input className="input" name="email" value={user.email} onChange={e => handleInput(e)} />
                <p>Digite a sua senha: </p>
                <input className="input" name="senha" value={user.senha} onChange={e => handleInput(e)} />
                <br/><br/>
                <button id="btn" onClick={() => { handleClick() }} >Enviar</button>
                <br/>
            </div>
        </div>
    )
}

export default Login;