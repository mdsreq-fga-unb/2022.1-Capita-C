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
        console.log(error)
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
        console.log(error)
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
        console.log(error)
    }
}

export const editarEmailServise = async (email: string, token: string, newEmail: string) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const url = `http://localhost:3000/api/email/${email}`
        const response = await axios.put(url, newEmail, config)
        return response;
    } catch (error) {

    }
}