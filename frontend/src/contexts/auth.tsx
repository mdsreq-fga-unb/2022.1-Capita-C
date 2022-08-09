import React, { createContext } from "react";
import Login from "../pages/login";

interface AuthContextData {
    signed: boolean,
    user: object;
    token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface Props {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
    /* async function SignIn {
        
    } */

    return (
        <AuthContext.Provider value={{ signed: false, user: {}, token: '' }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

