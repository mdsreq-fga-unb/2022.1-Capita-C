import LogoImage from '../../images/LogoBackground.svg'
import './index.css'

export function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="navigation">
                <span className="lojas">Lojas</span>
                <span>Lorem ipsum</span>
                <span>Lorem ipsum</span>
                <span>Lorem ipsum</span>
            </div>
            <img className="imagem" src={LogoImage}/>
        </div>
    );
}