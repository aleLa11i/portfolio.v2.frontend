import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';




export const NavBar = () => {

    const handleNavbarClick = () => {
        
        document.getElementById("navbar").classList.toggle("show-navbar");
        document.getElementById("navbar-icon").classList.add("visible");

    }
    const handleNavbarClose = () => {
        document.getElementById("navbar").classList.toggle("show-navbar");
        document.getElementById("navbar-icon").classList.remove("visible");

    }

    return (
        <div className="navbar-conteiner">
            <nav id="navbar" className="navbar">

                <FontAwesomeIcon icon={faWindowClose} className="close" onClick={handleNavbarClose} style={{display:"none"}} />
            
                <a 
                    activeClassName="active"
                    className="nav-item hover nav-home" 
                    href="#home">
                    Inicio
                </a>

                <a
                    activeClassName="active" 
                    className="nav-item hover"
                    href="#aboutme"> 
                    Sobre mi
                </a>

                <a
                    activeClassName="active"
                    className="nav-item hover" 
                    href="#skills"> 
                    Habilidades
                </a>

                <a
                    activeClassName="active" 
                    className="nav-item hover"
                    href="#proyects"> 
                    Proyectos
                </a>

                <a
                    activeClassName="active" 
                    className="nav-item hover nav-contact"
                    href="#contact"> 
                    Contacteme
                </a>
            
            </nav> 

            <div id="navbar-icon" className="navbar-icon" onClick={ handleNavbarClick }>
                <FontAwesomeIcon icon={faBars} />
            </div>


        </div>
    )
}
