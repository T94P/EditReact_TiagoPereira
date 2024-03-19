import React from 'react';
import AboutCSS from './About.module.css';

import Paragraph from './Paragraph.jsx';

const About = () => {
  return (
    // Uso de CSS Modules e Componentes Compostos
    <div className={AboutCSS.about}>
            <h2>Sobre mim</h2>
      <div>
      <img src="../../assets/imagem1.jpg" />
        <div className={AboutCSS.details}>
          <Paragraph text="Olá! Chamo-me Tiago Pereira e sou web developer. Tenho 3 meses de experiência a trabalhar com tecnologias web, incluindo HTML, CSS, Javascript, React, Wordpress e Elementor." />
          <Paragraph text="No meu tempo livre, gosto de ler livros/manga, jogar e criar novos projetos criativos. Também estou sempre á procura de oportunidades para aprender novas tecnologias." />
          <Paragraph text="Podem encontrar mais sobre mim e os meus projetos no meu GitHub ou entrar em contato comigo através do meu LinkedIn." />
        </div>
      </div>
    </div>
  );
};

export default About;