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
                        <Link to="/lojas">Lojas</Link>
                        {/*<span className='lojas'>Lojas</span>*/}
                    </div>
                    <div className='menu2'>   
                        <img className='menu-hamburguer' src={MenuHamburguer}/>
                        <Link to="/perfil">Perfil</Link>        
                        {/*<span className='perfil'>Perfil</span>*/}
                    </div>
                    <div className='menu3'>   
                        <img className='menu-hamburguer' src={MenuHamburguer}/>
                        <Link to="/usuarios">Usuarios</Link>        
                        {/*<span className='Usuarios'>Usuarios</span>*/}
                    </div>
                </ul>
            </div>
            <img className="imagem" src={LogoImage}/>
        </div>
        
    );
}