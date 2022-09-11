import React, { ChangeEvent, useContext, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import LogoImage from '../../images/LogoBackground.svg'
import CapitalLogo from '../../images/capitalLogo.svg'
import MenuIcon from '../../images/menu-hamburguer.svg'

 /* Ideia para a formação do código:
  * Primeiro conectar com o back fazendo com que eu acesse a lista de usuários
  * Segundo fazer um loop para organizar os usuários e descobrir quantos usuários temos
  * Imprimir a lista e o contador de usuários no canto da tela 
  */

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
                <div id="box" >

                    <br /><br />
                    
                    <h2>Usuário</h2>
                    
                    <div id="formDiv">
                        
                        <div className="textDiv" >
                            <text className="inputText" >Nome de usuário: </text>
                        </div>

                        <div className="textDiv" >
                            <text className="inputText" >CPF: </text>
                        </div>

                        <div className="textDiv" >
                            <text className="inputText" >Email: </text>
                        </div>
                        loga e 
                        <div className="textDiv" >
                            <text className="inputText" >Telefone: </text>
                        </div>

                        <div className="textDiv" >
                            <text className="inputText" >Senha: </text>
                        </div>
                        
                        <button id="btn" onClick={() => { handleClick() }} >LOGIN</button>
                    </div>
                </div>
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