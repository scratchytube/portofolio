import React from 'react'
import ProjectsCard from './ProjectCard'
import styled from 'styled-components'

const Projects = () => {

    const projects = [
        {
            id: 1,
            name: 'peadars woodshop',
            description: 'this righ her is my uncs website gawd im finna make it with this one juu hurdd',
            image: "https://i.imgur.com/XZEqfRD.png"
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
    font-size: 2.5em;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.2em;
}

.project-list {
    margin-top 50px;
}
`
