import './index.css'
import CapitalLogo from '../../images/capitalLogo.svg'


export function Header(){
    return (
        <div className="header">

            <div className="header-wraper">
                <div className="logo-nome">
                    <img className="logo" src= {CapitalLogo}/>
                    <span>Captação de Clientes</span>
                </div>    

                <div className="user">
                    <img src= ''/>
                    <span>Lorem ipsum.</span>
                </div>
            </div>
            
        </div>
    );
}
