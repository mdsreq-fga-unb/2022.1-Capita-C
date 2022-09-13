import api from "./api";
import axios from "axios";

export const listarLojasService = async (token: string) => {

    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const url = 'http://localhost:3000/api/cnpj'
        const response = await axios.get(url, config)
        return response;
    } catch (error) {
        return null;
    }
}

export const listarLojaInfo = async (cnpj: string, token: string) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const url = `http://localhost:3000/api/cnpj/${cnpj}`
        const response = await axios.get(url, config)
        return response;
    } catch (error) {
        return null
    }
}

export const deletarLojaService = async (cnpj: string, token: string) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const url = `http://localhost:3000/api/cnpj/${cnpj}`
        const response = await axios.delete(url, config)
        return response;
    } catch (error) {
        return null
    }
}

export const editarLojaService = async (cnpj: string, token: string, loja: any) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const url = `http://localhost:3000/api/cnpj/${cnpj}`
        const response = await axios.put(url, loja, config)
        return response;
    } catch (error) {
        return null
    }
}

export const editarEmailServise = async (newEmail: string, token: string, correioEletronico: {email: string, origemEmail: string}) => {
    try {
        const objectEmail = {
            newEmail: newEmail,
            origemEmail: correioEletronico.origemEmail
        }
        const email = correioEletronico.email
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const url = `http://localhost:3000/api/email/${email}`
        console.log(url)
        const response = await axios.put(url, objectEmail, config)
        return response;
    } catch (error) {
        return null
    }
}

export const editarTelefoneServise = async (token: string, newTelefone: string, listaTelefone: {numeroTelefone: string, origemTelefone: string}) => {
    try {
        const objectTelefone = {
            newTelefone: newTelefone,
            origemTelefone: listaTelefone.origemTelefone
        }
        const telefone = listaTelefone.numeroTelefone
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const url = `http://localhost:3000/api/telefone/${telefone}`
        const response = await axios.put(url, objectTelefone, config)
        return response;
    } catch (error) {
        return null
    }
}