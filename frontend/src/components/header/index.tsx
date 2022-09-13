import './index.css'
import CapitalLogo from '../../images/capitalLogo.svg'
import userIcon from '../../images/user-icon.svg'
import logoutIcon from '../../images/logout-icon.svg'
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../contexts/auth'
import { useNavigate } from 'react-router-dom'

interface User {
    name: string,
    email: string
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

    return (
        <div className="header">

            <div className="header-wraper">
                <div className="logo-nome" onClick={() => navigate('/')}>
                    <img className="logo" src={CapitalLogo} />
                    <text className='header-text'>Captação de Clientes</text>
                </div>
                {user ?
                    <div className="body">
                        <div className="user">
                            <img className="user-icon" src={userIcon} style={{height: 15}} />
                            <text className='header-text'> {user.name}</text>
                        </div>
                    </div>
                    : <div></div>}
            </div>

        </div>
    );
}
