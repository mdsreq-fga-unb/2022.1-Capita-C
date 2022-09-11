import './index.css'
import CapitalLogo from '../../images/capitalLogo.svg'
import userIcon from '../../images/user-icon.svg'
import logoutIcon from '../../images/logout-icon.svg'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../contexts/auth'
import { useNavigate } from 'react-router-dom'

interface User {
    name: string,
    email: string,
    password: string,
    id: Number
}

export function Header() {
    const [user, setUser] = useState<User>();
    const context = useContext(AuthContext);
    let navigate = useNavigate()

    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');
        if (storagedUser) {
            setUser(JSON.parse(storagedUser));
        }
    }, []);

    function handleClick() {
        try {
            context.logOut();
            navigate('/')
        } catch (error) {
            alert("Não foi possivel realizar a açao")
        }
    }

    return (
        <div className="header">

            <div className="header-wraper">
                <div className="logo-nome">
                    <img className="logo" src={CapitalLogo} />
                    <text className='header-text'>Captação de Clientes</text>
                </div>
                {user ?
                    <div className="body">
                        <div className="user">
                            <img className="user-icon" src={userIcon} style={{height: 15}} />
                            <text className='header-text'> {user.name}</text>
                        </div>

                        <div className="button-logout" onClick={() => handleClick()}>
                            <img className='logout-icon' src={logoutIcon} />
                            <text className='header-text'> sign out</text>
                        </div>

                    </div>
                    : <div></div>}
            </div>

        </div>
    );
}
