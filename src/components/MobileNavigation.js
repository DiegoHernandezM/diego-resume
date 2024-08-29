// src/components/Navigation.js
import React, { useState } from 'react';
import { MdOutlineMenu, MdClose } from 'react-icons/md';
import './Navigation.css';

const MobileNavigation = () => {
    const [click, setClick] = useState(false);
    
    const Hamburger = <MdOutlineMenu className="HamburgerMenu"
                                     size="30px" color="white"
                                     onClick={() => setClick(!click)} />
                          
    const Close = <MdClose className="HamburgerMenu"
                                      size="30px" color="white"
                                     onClick={() => setClick(!click)} />
    
    
    return (
        <nav className="MobileNavigation">
            <div className="logo">
                <span>DHM</span>
            </div>
            { click ? Close : Hamburger}
            {click &&
                <ul className="ulNavigationMobile">
                    <li><a href="#inicio">INICIO</a></li>
                    <li><a href="#experiencia">EXPERIENCIA</a></li>
                    <li><a href="#habilidades">HABILIDADES</a></li>
                    <li><a href="#portafolio">PORTAFOLIO</a></li>
                </ul>
             }
          
        </nav>
    );
};

export default MobileNavigation;
