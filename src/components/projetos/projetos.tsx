import React from 'react';
import CarrosselProjetos from './CarrosselProjetos';
import './projetos.css';
const projetos = [
    { id: 1, titulo: "Projeto em Django", resumo: "Um projeto de um Mercado feito em Django", imagem: "https://picsum.photos/300/200?random=1" },
    { id: 2, titulo: "Projeto 2", resumo: "Resumo do projeto 2", imagem: "https://picsum.photos/300/200?random=2" },
    { id: 3, titulo: "Projeto 3", resumo: "Resumo do projeto 3", imagem: "https://picsum.photos/300/200?random=3" },
    { id: 4, titulo: "Projeto 4", resumo: "Resumo do projeto 4", imagem: "https://picsum.photos/300/200?random=4" },
    { id: 5, titulo: "Projeto 5", resumo: "Resumo do projeto 5", imagem: "https://picsum.photos/300/200?random=5" },
];
const Projetos: React.FC = () => {
    return (
        <section className="projetos-section">
            <div className="transition-curve">
                <h2>Meus Projetos</h2>
            </div>
            <CarrosselProjetos projetos={projetos} />
        </section>
    );
};

export default Projetos;