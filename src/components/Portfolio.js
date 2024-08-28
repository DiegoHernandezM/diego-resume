// src/components/Portfolio.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './Portfolio.css';
Modal.setAppElement('#root');
const Portfolio = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Aviation insight",
            subtitle: "App desarrollada para estudiar mediante examenes administrables.",
            image: "/images/1.jpg",
            url: "https://atp.aviationinsight.net/"
        },
        {
            title: "KIOSKO CCP",
            subtitle: "App para la administración de tareas individuales y registro de actividades semanales.",
            image: "/images/2.jpg",
            url: "https://kiosk.ccp.supply/"
        },
        {
            title: "Centro de Reportes",
            subtitle: "Centro de reporteo para equipos detrabajo entregando calculos como productividad, registro de entradas y salidas.",
            image: "/images/3.jpg",
            url: "https://cr.ccp.supply/"
        }
    ];
    
    const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedProject(null);
    };

    return (
        <section className="portfolio-section">
            <div className="portfolio-container">
                <h2 className="portfolio-title">
                    Mí <span className="highlight">Portafolio</span>
                </h2>
                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <div className="portfolio-card" key={index} onClick={() => openModal(project)}>
                            <img src={project.image} alt={project.title} className="portfolio-image" />
                            <div className="portfolio-overlay">
                                <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>    
            </div>
            {selectedProject && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Project Modal"
                    className="project-modal"
                    overlayClassName="project-modal-overlay"
                >
                    <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                    <h2 className="modal-title" onClick={() => window.open(selectedProject.url, '_blank')}>
                        {selectedProject.title}
                    </h2>
                    <button onClick={closeModal} className="close-modal">Cerrar</button>
                </Modal>
            )}
        </section>  
    );
};

export default Portfolio;
