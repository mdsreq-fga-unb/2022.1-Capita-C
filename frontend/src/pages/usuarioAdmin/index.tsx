import { useContext, useEffect, useState } from "react";
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import { CardUsuario } from "../../components/cardUsuario";
import { userList } from "../../services/user.api";
import AuthContext from "../../contexts/auth";
import './index.css';

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

function Usuario() {

  const {token}  =  useContext(AuthContext);
  const [users, setUsers] = useState<User[] | []>([])
  const [count, setCount] = useState(users.length);

  useEffect(() => {
    async function getUser(token: string) {
      const response = await userList(token);
      if (response) {
        setUsers(response.data)
        setCount(response.data.length)
      }
    }

    if (token) {
      getUser(token)
    }
  }, []) // pegar os usuários apenas uma vez atravez do service

  return (
    <div className="main">
      <Header />
      <div className="sidebar-index">
        <Sidebar />
        <div className="index">
          <div className="header-usuarios">
            <span id='totalUsuarios' >Total de usuarios: {count}</span>
            <div className='botao'>
              <div className='botaoText'>
                + Adicionar Usuario
              </div>
            </div>
          </div>
          <text id='titulo' >USUARIOS</text>
          <div className="cards">
            {users.map((element, i) => {
              return (
                <CardUsuario nome={element.name} cpf={element.cpf} email={element.email} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Usuario;