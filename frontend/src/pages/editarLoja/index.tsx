import './index.css';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/header';
import { Sidebar } from '../../components/sidebar';
import { editarEmailServise, editarLojaService, editarTelefoneServise, listarLojaInfo } from '../../services/lojas.api';
import AuthContext from '../../contexts/auth';

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
interface Loja {
    cnpjFinal: string,
    identificadorMatrizFiliar: string,
    nomeFantasia: string,
    cnaes: string[],
    tipoLogradouro: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cep: Number,
    unidadeFederativa: string,
    municipio: string,
    telefone: {
        numeroTelefone: string,
        origemTelefone: string
    }[],
    correioEletronico: {
        email: string,
        origemEmail: string
    }[],
    atribuido: Boolean,
    parceriaAceita: string,
    responsavelCpf: string,
    responsavel: User
}
interface Alteracoes {
    campo: string,
    valor: string | boolean | string[] | {}[] | Number
}

const EditarLoja = () => {
    const { cnpj } = useParams(); // cnpj vem da url
    const [user, setUser] = useState<User>();
    const { token } = useContext(AuthContext) // token esta armazenado no localStorage
    const [loja, setLoja] = useState<Loja>()  // state para guardar informacoes da loja

    // informacoes para log de edicao
    const date = new Date();
    const camposLoja = ['nomeFantasia', 'identificadorMatrizFiliar', 'parceriaAceita', 'telefone[0]', 'telefone[1]',
        'correioEletronico', 'telefone', 'cep', 'logradouro', 'bairro', 'unidadeFederativa', 'municipio', 'numero']
    const [alteracoes, setAlteracoes] = useState<Alteracoes[]>([{ campo: 'numero', valor: 1700 }])

    // opcoes dos campos de select
    const optionsParceria = ['Aceita', 'Processando', 'Recusada'];
    const optionsEstado = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',]
    const optionsIdentificador = ['Matriz', 'Filial']

    const [parceriaStatus, setParceriaStatus] = useState()
    const [uf, setUf] = useState()
    const [identificador, setIdentificador] = useState()

    useEffect(() => {

        // armazenar informacoes da loja atual localmente a partir do banco
        async function getLoja(cnpj: string, token: string) {
            const response = await listarLojaInfo(cnpj, token);
            if (response) {
                setLoja(response.data)
                setParceriaStatus(response.data.parceriaAceita)
                setUf(response.data.unidadeFederativa)
                setIdentificador(response.data.identificadorMatrizFiliar)
            }
        }

        if (cnpj && token) {
            getLoja(cnpj, token)
        }

        const storagedUser = localStorage.getItem('@App:user');
        if (storagedUser) {
            setUser(JSON.parse(storagedUser));
        }

    }, [])

    function handleInput(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        // name = campo alterado, value = novo valor alocado no campo (muda a cada caractere alterada)
        const { value, name } = e.currentTarget

        // armazenar campos alterados
        let achou = false
        if (alteracoes) {
            // busca se o campo ja esta nas alteracoes
            alteracoes.map((item, index) => {
                // se achou significa que o valor deve ser alterado
                if (item.campo == name) {
                    achou = true
                    alteracoes[index].valor = value
                    setAlteracoes(alteracoes)
                }
            })

            if (achou == false) {
                setAlteracoes([...alteracoes, { campo: name, valor: value }])
            }
        } else {
            // caso seja o primeiro campo
            setAlteracoes([{ campo: name, valor: value }])
        }

        // alterar os valores da loja localmente
        if (loja) {
            if (name == 'cep') {
                let valor = Number(value)
                setLoja({ ...loja, [name]: valor })
            } if (name == 'correioEletronico') {
                loja.correioEletronico[0].email = value
                setLoja(loja)
            } if (name == 'telefone[0]') {
                loja.telefone.push(loja.telefone[0]) // adiciona o telefone antigo na proxima posicao disponivel
                loja.telefone[0].numeroTelefone = value // troca valor do telefone pelo do usuario
                setLoja(loja) // atualiza loja
            } if (name == 'telefone[1]') {
                loja.telefone.push(loja.telefone[1])
                loja.telefone[1].numeroTelefone = value
                setLoja(loja)
            }
            else {
                setLoja({ ...loja, [name]: value })
            }
        }

    }

    async function handleSubmit(cnpj: string | undefined, token: string | null, loja: Loja | undefined) {
        if (cnpj && token && loja) {

            try {
                // altera as informacoes da loja menos email e telefone
                const response = await editarLojaService(cnpj, token, loja)

                // se tiver mudanca de email
                let email = alteracoes.find(element => element.campo == 'correioEletronico')
                if (email) {
                    const emailResponse = await editarEmailServise(email.valor.toString(), token, loja?.correioEletronico[0])
                    emailResponse? '' : alert("Não foi possível editar o email")
                }

                // se tiver mudanca de telefone
                let telefone0 = alteracoes.find(element => element.campo == 'telefone[0]')
                let telefone1 = alteracoes.find(element => element.campo == 'telefone[1]')
                if (telefone0) {
                    const telefoneResponse = await editarTelefoneServise(token, telefone0.valor.toString(), loja?.telefone[0])
                    telefoneResponse? console.log(telefoneResponse.data) : alert("Não foi possível editar o telefone")
                }
                if (telefone1) {
                    const telefoneResponse = await editarTelefoneServise(token, telefone1.valor.toString(), loja?.telefone[1])
                    telefoneResponse? console.log(telefoneResponse.data) : alert("Não foi possível editar o telefone secundário")
                }
            
                if (response?.data) {
                    return (
                        alert("Atualizado com sucesso!")
                    )
                } else {
                    return (
                        alert("Não foi possível editar as informações")
                    )
                }

            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div className="main" >
            <Header />
            <div className="sidebar-index" >
                <Sidebar />
                <div className="index" >
                    <div className="section" >
                        <text className="title" >Editar Loja</text>

                        <text className="inputTitle" >Nome da loja</text>
                        <input className="inputBox" name="nomeFantasia" defaultValue={loja?.nomeFantasia} onChange={(e) => handleInput(e)} ></input>
                        <text className="inputTitle" >CNPJ</text>
                        <input className="inputBox" name="cnpjFinal" disabled defaultValue={loja?.cnpjFinal} ></input>
                        <text className="inputTitle" >Identificador</text>
                        {
                            identificador &&
                            <select className="inputBox" name="identificadorMatrizFiliar" defaultValue={identificador} onChange={(e) => handleInput(e)} >
                                {
                                    optionsIdentificador.map((item) => { return (<option >{item}</option>) })
                                }
                            </select>
                        }
                        <div className="minorDiv">
                            <text className="inputTitle" >Atribuição</text>
                            <text className="inputTitle" >Status de Parceria</text>
                        </div>
                        <div className="minorDiv" >
                            <input className="minorInput" name="atribuido" defaultValue={loja?.atribuido ? 'Verdadeiro' : 'Falso'} disabled onChange={(e) => handleInput(e)} ></input>
                            {
                                parceriaStatus &&
                                <select className="minorInput" name="parceriaAceita" defaultValue={parceriaStatus} onChange={(e) => handleInput(e)} >
                                    {
                                        optionsParceria.map((item) => { return (<option >{item}</option>) })
                                    }
                                </select>
                            }
                        </div>
                        <text className="inputTitle" >Cnaes</text>
                        <input className="inputBox" name="cnaes" disabled defaultValue={loja?.cnaes.map((item: any) => { return (item.cnae) })} onChange={(e) => handleInput(e)} ></input>
                    </div>
                    <div className="section" >
                        <text style={{ marginTop: 5, marginBottom: 5 }} >Contato</text>

                        <text className="inputTitle" >Telefone</text>
                        <input className="inputBox" name="telefone[0]" defaultValue={loja?.telefone[0].numeroTelefone} onChange={(e) => handleInput(e)} ></input>
                        <text className="inputTitle" >Telefone Secundário</text>
                        <input className="inputBox" name="telefone[1]" defaultValue={loja?.telefone[1].numeroTelefone} onChange={(e) => handleInput(e)} ></input>
                        <text className="inputTitle" >E-mail</text>
                        <input className="inputBox" name="correioEletronico" defaultValue={loja?.correioEletronico[0].email} onChange={(e) => handleInput(e)} ></input>
                    </div>
                    <div className="section" >
                        <text style={{ marginTop: 5, marginBottom: 5 }} >Endereço</text>

                        <text className="inputTitle" >CEP</text>
                        <input className="inputBox" name="cep" defaultValue={loja?.cep.toString()} onChange={(e) => handleInput(e)} ></input>
                        <text className="inputTitle" >Logradouro</text>
                        <input className="inputBox" name="logradouro" defaultValue={loja?.logradouro} onChange={(e) => handleInput(e)} ></input>
                        <div className="minorDiv">
                            <text className="inputTitle" >Bairro</text>
                            <text className="inputTitle" >Estado</text>
                        </div>
                        <div className="minorDiv" >
                            <input className="minorInput" name="bairro" defaultValue={loja?.bairro} onChange={(e) => handleInput(e)} ></input>
                            {
                                uf &&
                                <select className="minorInput" name="unidadeFederativa" defaultValue={uf} onChange={(e) => handleInput(e)} >
                                    {
                                        optionsEstado.map((item) => { return (<option >{item}</option>) })
                                    }
                                </select>
                            }
                        </div>
                        <text className="inputTitle" >Observação</text>
                        <textarea className="inputBox" name="complemento" disabled style={{ height: 100 }} defaultValue={loja?.complemento} onChange={(e) => handleInput(e)} ></textarea>
                    </div>
                    <div className="divBotao">
                        <div className="editBotao" >
                            <text className="botaoText" onClick={() => handleSubmit(cnpj, token, loja)}>
                                ATUALIZAR
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default EditarLoja