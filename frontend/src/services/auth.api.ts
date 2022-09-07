import api from "./api";
import axios from "axios";

interface user {
    cpf: string,
    password: string
}

const loginService = async (User: user) => {
    try{
        const response = await axios.post(
            api+"/login", User, {headers: {Authentication: `Bearer ${localStorage.getItem("App@:token")}`}}
        );
        return response;
    }catch(err){
        console.log(err);
    }
}

export default loginService;
