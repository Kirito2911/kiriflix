import React from 'react';
import logo from '../../assets/img/logo.png';
import './menu.css';
import ButtonLink from './components/ButtonLink';
function Menu(){
    
    
    return(
        <header className="Menu">
            <a href="/">
                <img className ="logo" src={logo} alt="Kiriflix Logo"/>
            </a>

            <ButtonLink className="ButtonLink" href="/">
            Novo vídeo
            </ButtonLink>
        </header>
    );
}

export default Menu;