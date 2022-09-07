import api from "./api";
import axios from "axios";

const listarLojasService = async (token: string) => {

    try {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const url = 'http://localhost:3000/api/cnpj'
        const response = await axios.get(url,config)
        return response;
    } catch (error) {
        return null;
    }
}

export default listarLojasService;