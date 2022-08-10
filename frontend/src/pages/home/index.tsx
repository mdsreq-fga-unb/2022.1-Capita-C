import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import './index.css';

interface User {
    name: string,
    email: string,
    password: string,
    id: Number
}

const HomePage = () => {
    const [user, setUser] = useState<User>();
    const context = useContext(AuthContext);
    let navigate = useNavigate();

    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');
        if (storagedUser) {
            setUser(JSON.parse(storagedUser));
        }
    }, []);

    function handleClick() {
        try {
            context.logOut();
            navigate("/");
        } catch (error) {
            alert("Não foi possivel realizar a açao")
        }
    }

    return (
        <div id="mainDiv">
            <h1>Welcome {user?.name} </h1>
            <button onClick={() => handleClick()} >Sair</button>
        </div>
    )
}

export default HomePage;
