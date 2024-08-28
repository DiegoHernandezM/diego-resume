// src/components/Experience.js
import React from 'react';
import './Experience.css';
import { FaServer, FaLaptopCode, FaConnectdevelop } from 'react-icons/fa';

const Experience = () => {
    return (
        <section className="experience">
            <div className="experience-container">
                <h2 className="experience-title">
                    Mis <span className="highlight">Habilidades</span>
                </h2>
                <div className="experience-cards">
                    <div className="experience-card">
                        <FaConnectdevelop className="experience-icon" />
                        <h3>Backend</h3>
                        <ul>
                            <li>PHP</li>
                            <li>Laravel</li>
                            <li>Mysql</li>
                            <li>MariaDB</li>
                            <li>Redis</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="experience-card">
                        <FaLaptopCode className="experience-icon" />
                        <h3>Frontend</h3>
                        <ul>
                            <li>Javascript</li>
                            <li>React JS</li>
                            <li>JQuery</li>
                            <li>AJAX</li>
                        </ul>
                    </div>
                    <div className="experience-card">
                        <FaServer className="experience-icon" />
                        <h3>DevOps</h3>
                        <ul>
                            <li>Linux (Centos, Debian, Ubuntu)</li>
                            <li>Jenkins</li>
                            <li>Docker</li>
                            <li>AWS (EC2, SES, S3, RDS, CloudFront, SQS)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
