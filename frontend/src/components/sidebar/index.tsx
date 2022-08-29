import LogoImage from '../../images/LogoBackground.svg'
import OptionSidebar from '../../images/option-sidebar.svg'
import MenuHamburguer from '../../images/menu-hamburguer.svg'
import './index.css'

export function Sidebar() {

    return (
        <div className='sidebar'>
            <div className="navigation">
                <ul>
                    <div className='menu'>   
                        <img className='menu-hamburguer' src={MenuHamburguer}/>        
                        <span className='lojas'>Lojas</span>
                    </div>
                </ul>
            </div>
            <img className="imagem" src={LogoImage}/>
        </div>
    );
}