import React, { ChangeEvent, useContext, useState } from "react";
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import './index.css';
import editIcon from '../../images/edit-icon.svg'
import deleteIcon from '../../images/delete-icon.svg'
import { CardUsuario } from "../../components/cardUsuario";

function Usuario(){

    const usuarios = [{
      "nome": "Ian",
      "cpf": "12345678901",
      "telefone": "61991324789",
      "email": "ianzin@gmail.com",
  }, {
    "nome": "Iano",
    "cpf": "12345678908",
    "telefone": "61991824789",
    "email": "ianzino@gmail.com",
  }, {
    "nome": "Iane",
    "cpf": "12345678902",
    "telefone": "61991224789",
    "email": "ianzine@gmail.com",
  }, {
    "nome": "Iani",
    "cpf": "12345678906",
    "telefone": "61991624789",
    "email": "ianzini@gmail.com",

  }, {
    "nome": "Ianu",
    "cpf": "12345678701",
    "telefone": "61971324789",
    "email": "ianzinu@gmail.com",
  }]

  const [count, setCount] = useState(5);
  
  return(
    <div className="main">
      <Header />
      <div className="sidebar-index">
        <Sidebar />
        <div className="index">
          <div className="header-usuarios">
            <span id='totalLojas' >Total de usuarios: {count}</span>
            <span id='adicionarUsuario'>
              <div id='addUsuarioText'>
                + Adicionar Usuario
              </div>
            </span>
          </div>
          <text id='titulo' >USUARIOS</text>
          <div className="cards">
          {usuarios.map((element, i) => {
                            return (
                                <CardUsuario nome={element.nome} cpf={element.cpf} telefone={element.telefone} email={element.email} />
                            )
                        })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Usuario;