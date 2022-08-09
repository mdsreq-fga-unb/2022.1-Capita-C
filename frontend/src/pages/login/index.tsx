import React, { ChangeEvent, useState } from "react";
import "./index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState({name: '', senha: ''});
    let navigate = useNavigate();

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        const {value,name} = e.currentTarget
        setUser({...user,[name]: value})
    }

    const handleClick = async () => {
        // enviar o nome de usuário e a senha ao servidor
        try {
            console.log(user.name)
            const response = await axios.post('http://localhost:4000/users/login',{user})
            .then(() => alert("logado"))
            navigate("/home");
        } catch (error) {
            alert("erro ao logar")
            console.log(error)
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