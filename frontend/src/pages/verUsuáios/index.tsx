import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import MenuIcon from "../../images/menu-hamburguer.svg"
import { userList } from "../../services/user.api";

 /* Ideia para a formação do código:
  * Primeiro conectar com o back fazendo com que eu acesse a lista de usuários
  * Segundo fazer um loop para organizar os usuários e descobrir quantos usuários temos
  * Imprimir a lista e o contador de usuários no canto da tela */
interface User {
    cpf: string,
    password: string,
    name: string,
    email: string,
    isAdmin: Boolean,
    isManager: Boolean,
    isTelemarketing: Boolean,
    status: Boolean,
    designatedCnpjs: string[]
}

const VerUsuarios  =  () => {
    const [users, setUsers] = useState < User[]|[]>([])
    const [count, setCount] = useState(users.length);
    const { token } = useContext(AuthContext)
    let navigate = useNavigate()

    useEffect(() => {
        async function getUser(token: string) {
            const response = await userList(token);
            if (response) {
                setUsers(response.data)
            }
        }

        if (token) {
            getUser(token)
        }
    }, []) // pegar os usuários apenas uma vez atravez do service

    const context  =  useContext(AuthContext);
    const handleClick  =  async () => {
        try {
        navigate("/home")
        } catch (error) {
            alert("Erro")
        }
    }

    return (
        <div id = "mainDiv" >

            <div id = "body">

                <div id = "box">
                    
                    <h2>Usuários</h2>
                
                    <div id = "optionsDiv">
                                            
                        <div id = "textDiv" >
                            {
                                users.map((user) => (
                                    <h2>{user.cpf}</h2>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerUsuarios;