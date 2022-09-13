import axios from "axios";
import api from "./api";

export const criarUsuarioService = async (User: any) => {
    const Usuario = {
        User,
        isAdmin: false,
        isConsultor: false,
        isTelemarketing: true,
        status: true
    }
    try {
        const response = await axios.post(
            api + "/user/add", Usuario, { headers: { Authentication: `Bearer ${localStorage.getItem("App@:token")}` } }
        );
        return response;
    } catch (error) {

    }
}

export const userList = async (token: string) => {
    try {
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        };
        const url = `http://localhost:3000/api/user`
        const response = await axios.get(url, config)
        return response;
    } catch (err) {
        console.log(err);
    }
}