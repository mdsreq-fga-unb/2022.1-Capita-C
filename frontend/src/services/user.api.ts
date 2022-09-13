import api from "./api";
import axios from "axios";

interface user {
    name: string,
    senha: string
}

export const loginService = async (User: user) => {
    try{
        const response = await axios.post(
            api+"/users/login",
            User
        );
        return response;
    }catch(err){
        console.log(err);
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