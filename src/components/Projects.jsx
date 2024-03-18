import React, { useState, useEffect } from 'react';

const Projects = () => {
  // Define um estado 'projects' utilizando o hook useState, que será utilizado para armazenar os projetos obtidos do JSON
  const [projects, setProjects] = useState([]);

  // Utiliza o hook useEffect para executar a lógica de carregamento dos dados dos projetos assim que o componente é montado
  useEffect(() => {
    // Faz uma requisição fetch para obter os dados do arquivo JSON contendo os projetos
    fetch('/src/projects/projects.json') 
      // Converte a resposta da requisição para JSON
      .then(response => response.json())
      // Define os projetos obtidos como o estado 'projects' utilizando o método setProjects
      .then(data => {
        console.log('Dados dos projetos:', data); // Adiciona console.log para imprimir os dados no console
        setProjects(data);
      })
      // Trata possíveis erros durante a requisição ou conversão para JSON
      .catch(error => console.error('Erro ao buscar projetos:', error));
  }, []); // O segundo argumento [] garante que o useEffect será executado apenas uma vez, equivalente ao componentDidMount

  // Retorna a estrutura JSX que representa a página de projetos
  return (
    <div>
      <h2>Projects Page</h2> 
      <div>
        {/* Mapeia os projetos armazenados no estado 'projects' e renderiza um bloco para cada projeto */}
        {projects.map(project => (
          <div key={project.id}> 
            <h3>{project.title}</h3> 
            <p>{project.description}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; // Exporta o componente Projects para uso em outros componentes
