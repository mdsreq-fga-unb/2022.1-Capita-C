import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import CapitalLogo from '../../images/capitalLogo.svg'
import { Header } from "../../components/header";
import { Sidebar } from "../../components/sidebar";

interface User {
    name: string,
    email: string,
    password: string,
    cpf: string
}

const Profile = () => {

    const { logOut } = useContext(AuthContext);
    let navigate = useNavigate();

    const [user, setUser] = useState<User>();

    const handleClick = async () => {
        try {
            logOut()
            navigate("/") //redireciona para pagina home
        } catch (error) {
            alert("Erro")
        }
    }

    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');
        if (storagedUser) {
            setUser(JSON.parse(storagedUser));
        }
    }, []);

    return (
        <div id="mainDivProfile" >
            <Header />
            <div className="sidebar-index">
                <Sidebar />
                <div id="body">
                    <div id="box">
                        <h2>Perfil</h2>
                        <div id="formDiv">

                            <div className="inputDiv" >
                                <text className="inputText" >CPF: </text>
                                <input className="input" name="cpf" defaultValue={user?.cpf} disabled />
                            </div>

                            <div className="inputDiv" >
                                <text className="inputText" >Nome: </text>
                                <input className="input" name="nome" defaultValue={user?.name} disabled />
                            </div>

                            <div className="inputDiv" >
                                <text className="inputText" >Email: </text>
                                <input className="input" name="email" defaultValue={user?.email} disabled />
                            </div>

                            <div className="inputDiv" >
                                <text className="inputText" >Senha: </text>
                                <input className="input" type="password" name="senha" defaultValue={user?.password} disabled />
                            </div>

                        </div>
                        <button id="btn" onClick={() => { handleClick() }} >SAIR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;