'use client'
import React, { useState } from 'react';
import './header.css';

const Header: React.FC = () => {
    const [activePage, setActivePage] = useState<string>('#about');

    const handleNavClick = (page: string) => {
        setActivePage(page);
    };

    return (
        <header className="header">
            <div className="container">
                <h1 className="header-title">Jackson Faria</h1>
                <nav className="header-nav">
                    <ul className="nav-container">
                        <li className={`nav-item ${activePage === '#about' ? 'active' : ''}`}>
                            <a href="#about" className="nav-link" onClick={() => handleNavClick('#about')}>Sobre</a>
                        </li>
                        <li className={`nav-item ${activePage === '#projects' ? 'active' : ''}`}>
                            <a href="#projects" className="nav-link" onClick={() => handleNavClick('#projects')}>Projetos</a>
                        </li>
                        <li className={`nav-item ${activePage === '#contact' ? 'active' : ''}`}>
                            <a href="#contact" className="nav-link" onClick={() => handleNavClick('#contact')}>Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;