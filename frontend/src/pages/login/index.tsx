import React, { ChangeEvent, useContext, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import api from "../../services/api";

const Login = () => {
    const [user, setUser] = useState({name: '', senha: ''});
    let navigate = useNavigate();
    const context = useContext(AuthContext);

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        // ao mudar as informacoes das caixas de texto
        const {value,name} = e.currentTarget
        setUser({...user,[name]: value})
    }

    const handleClick = async () => {
        // enviar o nome de usuário e a senha ao servidor
        try {
            
            const response = await api.post('/users/login', {user})
            .then((response) => {
                alert(`Bem vindo(a) ${user.name}`)
                navigate("/home"); // redireciona para pagina home
            })
           
        } catch (error) { // carrega erro de login
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