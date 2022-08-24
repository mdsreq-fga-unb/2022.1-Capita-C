import api from "./api";
import axios from "axios";

interface user {
    name: string,
    senha: string
}

const loginService = async (User: user) => {
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

export default loginService;
