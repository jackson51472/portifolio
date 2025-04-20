'use client';
import React, { useState } from 'react';
import ProjetoCard from './ProjetoCard';
import './projetos.css';

interface Projeto {
    id: number;
    titulo: string;
    resumo: string;
    imagem: string;
}

interface CarrosselProjetosProps {
    projetos: Projeto[];
}

const CarrosselProjetos: React.FC<CarrosselProjetosProps> = ({ projetos }) => {
    const [startIndex, setStartIndex] = useState(0);

    const moverEsquerda = () => {
        setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const moverDireita = () => {
        setStartIndex((prevIndex) => (prevIndex < projetos.length - 3 ? prevIndex + 1 : prevIndex));
    };

    return (
        <div className="carrossel-container">
            <button onClick={moverEsquerda} className="carrossel-botao esquerda">
                &#8249;
            </button>
            <div className="carrossel-projetos">
                {projetos.slice(startIndex, startIndex + 3).map((projeto) => (
                    <ProjetoCard
                        key={projeto.id}
                        titulo={projeto.titulo}
                        resumo={projeto.resumo}
                        imagem={projeto.imagem}
                    />
                ))}
            </div>
            <button onClick={moverDireita} className="carrossel-botao direita">
                &#8250;
            </button>
        </div>
    );
};

export default CarrosselProjetos;