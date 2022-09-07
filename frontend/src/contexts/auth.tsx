import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";

interface User {
    cpf: string
    password: string
}

interface AuthContextData {
    signed: boolean;
    user: object | null;
    gerente: boolean;
    signIn(user: User): Promise<boolean>;
    logOut(): void;
    token: string | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface Props {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {

    const [user, setUser] = useState<object | null>(null);
    const [admin, setAdmin] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        async function loadStorageData() {
            const storagesToken = await localStorage.getItem('@App:token')
            const storagedUser = await localStorage.getItem('@App:user');
            const storagedAdmin = await localStorage.getItem('@App:admin');
            if (storagedUser && storagedAdmin && storagesToken) {
                setToken(JSON.parse(storagesToken));
                setUser(JSON.parse(storagedUser));
                setAdmin(JSON.parse(storagedAdmin));
            }

        }

        loadStorageData();

    });



    async function signIn(userLogin: User) {
        try {
            // loga e pega o token e informacoes do usuario
            const response = await api.post('/auth/login', userLogin);
            setToken(response?.data.token)
            setUser(response?.data.user)
            if(response?.data.user.isAdmin){
                setAdmin(true)
            }
            // armazena token, usuario e status de admin
            localStorage.setItem('@App:token', JSON.stringify(response.data.token));
            localStorage.setItem('@App:user', JSON.stringify(response.data.user));
            localStorage.setItem('@App:admin', JSON.stringify(response?.data.user.isAdmin));
            return true
        } catch (error) {
            return false
        }
    }

    function logOut() {
        setUser(null);
        setAdmin(false);
        setToken(null);
        localStorage.removeItem('@App:user');
        localStorage.removeItem('@App:admin');
        localStorage.removeItem('@App:token');
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, gerente: Boolean(admin), signIn, logOut, token }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

