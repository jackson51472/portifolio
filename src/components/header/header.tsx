'use server'
import React from 'react';



const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="header-title">Meu Portfólio</h1>
                <nav className="header-nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#about" className="nav-link">Sobre</a></li>
                        <li className="nav-item"><a href="#projects" className="nav-link">Projetos</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;