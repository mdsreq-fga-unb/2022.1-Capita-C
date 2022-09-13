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