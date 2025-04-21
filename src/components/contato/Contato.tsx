import React from 'react';
import './Contato.css';

const Contato: React.FC = () => {
    return (
        <section className="contato-section">
            <div className="transition-curve"></div>
            <div className="contato-content">
                <h2>Entre em Contato</h2>
            </div>
            <div className="contato-links">
                <a href="mailto:seu.email@exemplo.com" className="contato-item">
                    <i className="fas fa-envelope"></i> Email
                </a>
                <a href="https://github.com/seu-username" target="_blank" rel="noopener noreferrer" className="contato-item">
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="contato-item">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="contato-item">
                    <i className="fab fa-whatsapp"></i> WhatsApp
                </a>

            </div>
        </section>
    );
};

export default Contato;