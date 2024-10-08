// src/components/Navigation.js
import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navigation navigationDesktop">
            <div className="logo">
                <span>DHM</span>
            </div>
            <ul className="nav-links">
                <li><a href="#inicio">INICIO</a></li>
                <li><a href="#experiencia">EXPERIENCIA</a></li>
                <li><a href="#habilidades">HABILIDADES</a></li>
                <li><a href="#portafolio">PORTAFOLIO</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
