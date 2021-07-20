import React from 'react'
import ProjectsCard from './ProjectCard'
import styled from 'styled-components'

const Projects = () => {

    const projects = [
        {
            id: 1,
            name: 'peadars woodshop',
            description: 'this righ her is my uncs website gawd im finna make it with this one juu hurdd',
            image: "https://i.imgur.com/yunTgAr.png",
            stack: ['react', 'redux', 'rails', 'styled-components',]
        },
        {
            id: 2,
            name: 'club trader joes',
            description: 'this is the most fun i ever had on a project',
            image: 'https://i.imgur.com/ZN0iS6O.png',
            stack: ['react', 'redux', 'rails', 'bootstrap', 'trader joe recipe api']
        }
    ]

    const mappedProjects = projects.map((pj) => (
        <ProjectsCard key={pj.id} project={pj} /> 
    ))

    return (
        <Wrapper>
            <h1>Projects</h1>
            <div className='project-list'>
                { mappedProjects }
            </div>
        </Wrapper>
    )
}

export default Projects

const Wrapper = styled.div`

h1 {
    text-align: center;
    margin-top: 5rem;
    font-size: 3em;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.2em;
}

.project-list {
    margin-top 50px;
}

@media (min-width: 992px) {
    h1 {
        text-align: center;
        margin-top: 5rem;
        font-size: 3.5em;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 0.2em;
    }
    
    .project-list {
        margin-top 50px;
    }
}
`
