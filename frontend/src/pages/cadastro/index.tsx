import userEvent from "@testing-library/user-event";
import React, { ChangeEvent, useContext, useState } from "react";
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import './index.css';

function Cadastro(){
  return (

    <div className="main">
     <Header />
     <div className="sidebar-index">
      <Sidebar />
      <div className="index">
        <div className="addUsuario">Adicionar usuario</div>
        <div className="adicionaUsuario">
          <text className="ImputText">Nome do usuario</text>
          <input className="Input" name="nome" value={user.name}/>
          <text className="ImputText">CPF</text>
          <input className="Input" name="cpf" value={user.cpf}/>
          <text className="ImputText">Telefone</text>
          <input className="Input" name="telefone" value={telefone.numeroTelefone}/>
          <text className="ImputText">E-mail</text>
          <input className="Input" name="email" value={email.email}/>
          <text className="ImputText">Senha</text>
          <input className="Input" name="senha" value={user.password}/>
          <button id="btn" onClick={() => {handleClick()}}>CRIAR</button>
        </div>
      </div>
     </div>
    </div>

)
}