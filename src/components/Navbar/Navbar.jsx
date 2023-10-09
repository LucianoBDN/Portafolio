import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import bars from './img-nav/menu.png'

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className='Navbar'>
            <div className='nav-container'>
            <h1 className='header'>Luciano / Desarrollador web</h1>
            </div>
            <button className={` btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}><img className='bars' src={bars} alt="" /></button>
            <div className={`show-nav ${isMenuOpen ? 'list-container' : ''} `}>
                <ul className='item-list'>
                    <li>Inicio</li>
                    <li>Sobre mí</li>
                    <li>Habilidades</li>
                    <li>Proyectos</li>
                    <li>Certificados</li>
                    <li>Contacto</li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar