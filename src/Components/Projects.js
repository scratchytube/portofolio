import React from 'react'
import ProjectsCard from './ProjectCard'
import styled from 'styled-components'

const Projects = () => {

    const projects = [
        {
            id: 1,
            name: 'peadars woodshop',
            description: 'this righ her is my uncs ecommerce site',
            image: "https://i.imgur.com/LbaeVHv.png"
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
    margin-top: 3rem;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.2em;
}

.project-list {
    margin-top 50px;
}
`
