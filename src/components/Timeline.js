// src/components/Timeline.js
import React from 'react';
import './Timeline.css';

const Timeline = () => {
    const experiences = [
        {
            company: "Cuidado con el perro",
            role: "Desarrollador Full Stack",
            location: "Tultitlán, México",
            duration: "Agosto 2019–Presente",
            description: [
                "Creación de sistema OMS para integración de SORTER para el envío de mercancía a tiendas (Centos, Laravel 8, React Js, AWS, APIs, MariaDB); optimizando en un 70% la entrega de mercancía a las tiendas.",
                "Sistema CRC de automatización de reportes (Laravel 8, React Js, Inertial Js, AWS, MariaDB); mejorando la entrega de reportes para el área de SORTER en un 90%.",
                "Desarrollo de módulos para ECOMMERCE tales como monedero electrónico, integración sistemas por API REST (Laravel, Bootstrap).",
                "Aporte soluciones para despliegue continuo tales como la implementación de la herramienta Jenkins; envío de correos por medio de SES (AWS), implementación de Buckets para el guardado de respaldos y archivos aislados de servidores.",
            ]
        },
        {
            company: "Global Hitss (America Movil)",
            role: "Desarrollador Web",
            location: "CDMX, México",
            duration: "Enero 2018–Junio 2019",
            description: [
                "Participación en el desarrollo de T1 pagos, pasarela de pagos (Laravel, PHP, Bootstrap, JQuery, Ajax) utilizada para recargas telefónicas de TELCEL, pagos en Claro Shop, Sears y Sanborns.",
                "Me encargue de integrar múltiples servicios tales como un antifraude, implementación de servidor para monitorear logs del sistema, módulo para monitoreo de conectividad entre servidores, etc.",
            ]
        },
        {
            company: "SparkLabs",
            role: "Programador",
            location: "CDMX, México",
            duration: "Febrero 2017–Dic 2017",
            description: [
                "Desarrollo del sistema CPTM (Laravel, Materialize, Javascript) para la administración y suscripción de eventos internacionales.",
                "Creación plataforma para la empresa Resistol (Laravel, JQuery), para concurso multimedia.",
                "Participación en el desarrollo de una plataforma para la SEP (Moodle); en la cual se capacitó a los profesores en base a los nuevos lineamientos de la reforma educativa.",
            ]
        },
        {
            company: "Desarrollos Freelance",
            role: "Desarrollador sistemas Web",
            location: "Ecatepec, México",
            duration: "2023–Presente",
            description: [
                "Creación de aviationinsight.net (ReactJs, Laravel, AWS) plataforma de administración de cuestionarios para la preparación de examen de aviación, permite al usuarios suscribirse por una cuota anual procesada por PayPal en la que puede responder a diversos cuestionarios administrados por un maestro.",
                "Creación de Nidos Aguila para el Club America (Laravel, Bootstrap, Javascript, Debian); sistema para administración de currícula de escuelas, jugadores, tutores y profesores.",
            ]
        }
    ];

    return (
        <section className="timeline-container">
            <div className="timeline">
                <h2 className="timeline-title">
                    Mí <span className="highlight">Experiencia</span>
                </h2>
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-content">
                            <h3>{exp.company}</h3>
                            <h4>{exp.role}</h4>
                            <p>{exp.location}</p>
                            <ul>
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="timeline-date">
                            <p>{exp.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
