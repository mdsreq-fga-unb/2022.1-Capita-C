import React, { ChangeEvent, useState } from "react";
import "./index.css";

const Login = () => {
    const [user, setUser] = useState({email: '', senha: ''});

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        const {value,name} = e.currentTarget
        setUser({...user,[name]: value})
    }

    function handleClick() {
       console.log(user)
    }

    return (
        <div id="mainDiv" >
            <div id="box" >
                <h2>Login</h2>
                <br/>
                <text>Digite o seu nome: </text>
                <br/>
                <input className="input" name="email" value={user.email} onChange={e => handleInput(e)} />
                <br/>
                <text>Digite a sua senha: </text>
                <br/>
                <input className="input" name="senha" value={user.senha} onChange={e => handleInput(e)} />
                <br/><br/>
                <button id="btn" onClick={() => { handleClick() }} >Enviar</button>
                <br/>
            </div>
        </div>
    )
}

export default Login;