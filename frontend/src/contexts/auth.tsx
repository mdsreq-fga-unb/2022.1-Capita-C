import React, { createContext, useEffect, useState } from "react";
import api from "../services/api";

interface User {
    cpf: string
    senha: string
}

interface AuthContextData {
    signed: boolean;
    user: object | null;
    gerente: boolean;
    signIn(user: User): Promise<void>;
    logOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface Props {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {

    const [user, setUser] = useState<object | null>(null);
    const [admin, setAdmin] = useState<boolean>(false);

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await localStorage.getItem('@App:user');
            const storagedAdmin = await localStorage.getItem('@App:admin');
            if (storagedUser && storagedAdmin) {
                setUser(JSON.parse(storagedUser));
                setAdmin(JSON.parse(storagedAdmin));
            }

        }

        loadStorageData();

    });



    async function signIn(userLogin: User) {
        try {
            const response = await api.post('/users/login', userLogin);
            setUser(response.data);
            setAdmin(response.data.admin);
            localStorage.setItem('@App:user', JSON.stringify(response.data));
            localStorage.setItem('@App:admin', JSON.stringify(response.data.admin));
        } catch (error) {
            alert("Erro ao logar")
        }
    }

    function logOut() {
        setUser(null);
        localStorage.removeItem('@App:user');
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, gerente: Boolean(admin), signIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

