import React, { ChangeEvent, useContext, useState } from "react";
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import './index.css';
import editIcon from '../../images/edit-icon.svg'
import deleteIcon from '../../images/delete-icon.svg'

function Usuario(){

  return(
  
    <div className="Usuarios">
      <Header />
      <div className="sidebar-index">
        <Sidebar />
        <div className="index">
        <div className="header-usuarios">
                        <span id='totalUsuarios' >Total de usuarios: {count}</span>
                        <span id='adicionarUsuario'>
                            <div id='addUsuariosText'>
                                + Adicionar Usuario
                            </div>
                        </span>
                    </div>
                    <text id='titulo' > USUARIOS</text>
                    <div className="cards">
                        {Usuario.map((element, i) => {
                            return (
                                <CardUsuario nome={element.nome_fantasia} cnpj={element.cnpj} telefone={element.ddd_telefone_1} cep={element.cep} bairro={element.bairro} />
                            )
                        })}
                    </div>
        </div>
      </div>

    </div>
    
  )
}