import React, { useState, useEffect } from 'react';
import Header from './Components/Header';

import api from './services/api';
import './App.css';
import backgroundImage from './assets/background.jpg';

function App() {
    // const projects = ['Desenvolvimento do app', 'Front-end web']; //com JS convencional
    const [projects, setProjects] = useState([]);//iniciar o useState com o mesmo tipo de variável -> []

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response);
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject() {
        //projects.push(`Novo projeto ${Date.now()}`) //- Push não atende ao preceito da imutabilidade
        //setProjects([...projects, `Novo projeto ${Date.now()}`]); //... spread operator estático
        const response = await api.post('projects', {
            title: `Front - end com ReactJS ${Date.now()}`,
            owner: "Ramon Menezes"
        });

        const project = response.data;
        //console.log(projects);
        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Projects" />
            {/* <img width={300}  src={backgroundImage}/> */}
            <ul>
                {/* {projects.map(project => {return } */}
                {/* {projects.map(project => {return ( );})} */}
                {projects.map(project => <li key={project.id}>{project.title}</li>)}
            </ul>
            <button type="button" onClick={handleAddProject}> Adicionar projeto </button>
        </>
    );
}

export default App;
