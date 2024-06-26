import React, { useState, useEffect } from 'react';


const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Utiliza o hook useEffect para executar a lógica de carregamento dos dados dos projetos
  useEffect(() => {
    fetch('/src/projects/projects.json') 
      .then(response => response.json())
      .then(data => {
        console.log('Dados dos projetos:', data); 
        setProjects(data);
      })
      .catch(error => console.error('Erro ao buscar projetos:', error));
  }, []); // O segundo argumento [] garante que o useEffect será executado apenas uma vez

  return (
    <div>
      <div class="project-div">
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

export default Projects; 
