import React from 'react';
import logo from '../../assets/img/logo.png';
import './menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button/index';
import {Link} from 'react-router-dom';
function Menu(){
    
    
    return(
        <header className="Menu">
            <Link to="/">
                <img className ="logo" src={logo} alt="Kiriflix Logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo vídeo
            </Button>
        </header>
    );
}

export default Menu;