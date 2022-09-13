import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import CapitalLogo from '../../images/capitalLogo.svg'
import MenuIcon from '../../images/menu-hamburguer.svg'
import { userList } from "../../services/user.api";

 /* Ideia para a formação do código:
  * Primeiro conectar com o back fazendo com que eu acesse a lista de usuários
  * Segundo fazer um loop para organizar os usuários e descobrir quantos usuários temos
  * Imprimir a lista e o contador de usuários no canto da tela */
  

const VerUsuarios  =  () => {
    const [users, setUsers] = useState([])
    const [count, setCount] = useState(users.length);
    const { token } = useContext(AuthContext)
    let navigate = useNavigate()

    useEffect(() => {
        async function getLojas(token: string) {
            const response = await userList(token);
            if (response) {
                setUsers(response.data)
            }
        }

        if (token) {
            getLojas(token)
        }
    }, [token]) // pegar as lojas apenas uma vez atravez do service

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

                            <text className = "inputText" >Usuário Número 1: </text>
                            <button id = "ver" onClick  =  {() => {handleClick()}} >
                            

                                <img
                                    src = {MenuIcon}
                                    style = {{height: 9, width: 15}}
                                    alt = "website logo"
                                />

                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerUsuarios;