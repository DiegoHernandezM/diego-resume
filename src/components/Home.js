// src/components/Home.js
import React from 'react';
import './Home.css';
import Typewriter from "typewriter-effect";
import { FaFacebookF, FaGithubSquare, FaLinkedinIn } from 'react-icons/fa';

const Home = () => {
    return (
        <section className="home">
            <div className="home-content">
                <h1 className="name">
                    <Typewriter
                        onInit={(typewriter)=> {
                            typewriter
                            .typeString("Desarrollador FullStack")                          
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Desarrollador FullStack")
                            .start();
                        }}
                        />
                    <span className="first-name">Diego</span>
                    <span className="last-name"> Hernández Moreno</span>
                </h1>
                <div className="description-container">
                    <p className="description">Más de 7 años de experiencia como Desarrollador de Web. Lidero un equipo de desarrollo en Cuidado con el perro, en el cual hemos logrado hacer el surtido de mercancía un 70% más rápido para las tiendas con una plataforma comunicada con diferentes sistemas de la empresa. Egresado de la carrera de Ingeniería en Tecnologías de la Información y Comunicación.</p>
                </div>
                <a className="home-button" href="/downloads/CV_Diego_Hdez_M.pdf" target="_blank">Descarga mi CV &rarr;</a>
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com/diegohdezming" target="_blank"><FaFacebookF /></a>
                <a href="http://www.linkedin.com/in/diego-hdezm-m" target="_blank"><FaLinkedinIn /></a>
                <a href="https://github.com/DiegoHernandezM" target="_blank"><FaGithubSquare /></a>
            </div>
        </section>
    );
};

export default Home;
