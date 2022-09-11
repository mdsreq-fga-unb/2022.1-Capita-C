import React, { ChangeEvent, useContext, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import LogoImage from '../../images/LogoBackground.svg'
import CapitalLogo from '../../images/capitalLogo.svg'
import MenuIcon from '../../images/menu-hamburguer.svg'

const VerUsuarios  =  () => {
    const user  =  useState({
        cpf: '',
        name: '',
        email: '',
        telefone: '',
        senha:'',
      },);

    const context  =  useContext(AuthContext);
    let navigate  =  useNavigate();

    const handleClick  =  async () => {
        try {
            async () => navigate("/home")
        } catch (error) {
            alert("Erro")
        }
    }

    const handleClick2 = async () =>{
        try {
            
        } catch (error) {
            alert("Erro")
        }
    }

    return (
        <div id = "mainDiv" >
            <div id = "rodape" >
                <img
                    src = {CapitalLogo}
                    style = {{ height: 36, width: 117.83, marginRight: 30 }}
                    alt = "Capital atacadista"
                />
                <text style = {{ marginTop: 10 }} >Capitação de Clientes</text>
            </div>

            <div id = "body">
                <h2>Usuários</h2>
                <div id = "optionsDiv">

                    <div className = "textDiv" >
                        <text className = "inputText" >Usuário Número 1: </text>
                        <button id = "ver" onClick  =  {() => {handleClick()}} >

                            <img
                                src = {MenuIcon}
                                style = {{height: 18, width: 18}}
                                alt = "icone de usuario"
                            />

                        </button>
                    </div>


                    <button id = "btn" onClick = {() => { handleClick() }} >SAIR</button>
                
                </div>

                <img
                    src = {LogoImage}
                    style = {{ height: 550, width: 1500 }}
                    alt = "website logo"
                />
            </div>
        </div>
    )
}

export default VerUsuarios;