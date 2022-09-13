import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import AuthContext from "../../contexts/auth";
import './index.css';

function Cadastro(){
  
  const [user, setUser] = useState({ nome: '', cpf: '', telefone: '', email: '', senha: '' });
    const context = useContext(AuthContext);
    let navigate = useNavigate();

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        // ao mudar as informacoes das caixas de texto guarda os valores em user
        const { value, name } = e.currentTarget
        setUser({ ...user, [name]: value })
    }

    const handleClick = async () => {
        try {
            
        } catch (error) {
            alert("Erro ao adicionar")
        }
    }

  return (

    <div className="main">
     <Header />
     <div className="sidebar-index">
      <Sidebar />
      <div className="index">
        <div className="addUsuario">Adicionar usuario</div>
        <div className="adicionaUsuario">
          <div>
            <text className="ImputText">Nome do usuario</text>
            <input className="Input" name="nome" defaultValue={user.nome} onChange={e => handleInput(e)}/>
          </div>
          <div>
            <text className="ImputText">CPF</text>
            <input className="Input" name="cpf" defaultValue={user.cpf} onChange={e => handleInput(e)}/>
          </div>
          <div>
            <text className="ImputText">E-mail</text>
            <input className="Input" name="email" defaultValue={user.email} onChange={e => handleInput(e)}/>
          </div>
          <div>
            <text className="ImputText">Senha</text>
            <input className="Input" name="senha" defaultValue={user.senha} onChange={e => handleInput(e)}/>
          </div>
          <button id="btn" onClick={() => {handleClick()}}>CRIAR</button>
        </div>
      </div>
     </div>
    </div>

)
}

export default Cadastro;