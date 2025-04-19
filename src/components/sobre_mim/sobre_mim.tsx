import React from 'react';
import './sobre_mim.css';

const TituloSobreMim: React.FC = () => (
    <div className="titulo-sobre-mim">
        <h1 className="titulo">
            Olá, meu nome é Jackson
        </h1>
        <h2 className="subtitulo">Eu desenvolvo coisas!</h2>
    </div>
);

const ConteudoSobreMim: React.FC = () => (
    <div className="conteudo-sobre-mim">
        <p className="descricao">
            Sou um desenvolvedor apaixonado por tecnologia e inovação. Com experiência em diversas linguagens de programação e frameworks, estou sempre em busca de novos desafios e oportunidades para expandir meus conhecimentos.
        </p>
        <p className="descricao">
            Minha jornada na área de desenvolvimento começou há alguns anos, e desde então tenho trabalhado em projetos variados, desde aplicações web até soluções mobile. Sou dedicado a criar código limpo, eficiente e escalável, sempre com foco na experiência do usuário.
        </p>
        <p className="descricao">
            Além da programação, tenho grande interesse em [insira áreas de interesse relacionadas]. Acredito que a tecnologia tem o poder de transformar o mundo, e estou empenhado em fazer parte dessa transformação.
        </p>
    </div>
);

const ContatoSobreMim: React.FC = () => (
    <div className="contato-sobre-mim">
        <button className="botao-contato">Contate-me <span className="seta">➜</span></button>
        <div className="role-para-baixo">
            <span className="icone-role">⬇</span> Role para baixo!
        </div>
    </div>
);

const SobreMim: React.FC = () => {
    return (
        <section className="sobre-mim" style={{ padding: '200px' }} id="sobre-mim">

            <TituloSobreMim />
            <ConteudoSobreMim />
            <ContatoSobreMim />

        </section>
    );
};

export default SobreMim;