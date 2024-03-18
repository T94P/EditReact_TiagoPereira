import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <div className="about-content">
        <img src="./assets/imagem1.jpg" alt="Profile Picture" />
        <div className="details">
          <p>Olá! Meu nome é Tiago Pereira e sou web developer. Tenho 3 meses de experiência a trabalhar com tecnologias web, incluindo HTML, CSS, Javascript, React, Wordpress e Elementor.</p>
          <p>No meu tempo livre, gosto de ler livros/manga, jogar e criar novos projetos criativos. Também estou sempre á procura de novas oportunidades para aprender novas tecnologias.</p>
          <p>Podem encontrar mais sobre mim e os meus projetos no meu <a href="https://github.com/T94P">GitHub</a> ou entrar em contato comigo através do meu <a href="https://www.linkedin.com/in/tiagosilvestrepereira/">LinkedIn</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
