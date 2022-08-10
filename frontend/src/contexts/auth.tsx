import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../pages/login";
import api from "../services/api";

interface User {
    name: string
    senha: string
}

interface AuthContextData {
    signed: boolean,
    user: object | null;
    Login(user: User): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface Props {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {

    const [user, setUser] = useState<object | null>(null);

    async function Login(user: User) {
        try {
            const response = await api.post('/users/login', { user })
                .then((response) => {
                    setUser(user);
                })
        } catch (error) { // carrega erro de login
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, Login }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

