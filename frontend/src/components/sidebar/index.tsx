import LogoImage from '../../images/LogoBackground.svg'
import OptionSidebar from '../../images/option-sidebar.svg'
import MenuHamburguer from '../../images/menu-hamburguer.svg'
import './index.css'
import { Link } from 'react-router-dom'

export function Sidebar() {

    return (
        <div className='sidebar'>
            <div className="navigation">
                <ul>
                    <div className='menu'>   
                        <img className='menu-hamburguer' src={MenuHamburguer}/>
                        {<Link className='names' to="/">LOJA</Link>}
                    </div>
                    <div className='menu'>   
                        <img className='menu-hamburguer' src={MenuHamburguer}/>
                        <Link className='names' to="/perfil">PERFIL</Link>        
                    </div>
                    <div className='menu'>   
                        <img className='menu-hamburguer' src={MenuHamburguer}/>
                        <Link className='names' to="/usuarios">USUARIOS</Link>        
                    </div>
                </ul>
            </div>
            <img className="imagem" src={LogoImage}/>
        </div>
        
    );
}