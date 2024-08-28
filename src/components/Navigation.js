// src/components/Navigation.js
import React, { useState }  from 'react';
import './Navigation.css';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="navigation">
            <div className="logo">
                <span>DHM</span>
            </div>
            <ul className="nav-links">
                <li><a href="#inicio">INICIO</a></li>
                <li><a href="#experiencia">EXPERIENCIA</a></li>
                <li><a href="#habilidades">HABILIDADES</a></li>
                <li><a href="#portafolio">PORTAFOLIO</a></li>
            </ul>
             <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navigation;
