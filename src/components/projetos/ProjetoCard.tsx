import React from 'react';
import './projetos.css';

interface ProjetoCardProps {
    titulo: string;
    resumo: string;
    imagem: string;
}

const ProjetoCard: React.FC<ProjetoCardProps> = ({ titulo, resumo, imagem }) => {
    return (
        <div className="projeto-card">
            <img src={imagem} alt={titulo} className="projeto-imagem" />
            <h3 className="projeto-titulo">{titulo}</h3>
            <p className="projeto-resumo">{resumo}</p>
        </div>
    );
};

export default ProjetoCard;