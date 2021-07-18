import React from 'react'
import styled from 'styled-components'

const ProjectCard = ({ project }) => {
    const { name, description, image } = project

    return (
        <Wrapper>
            <div className='card'>
                <img src={image} alt={name} />
                <p><span>{name}</span>{description}</p>
            </div>
        </Wrapper>
    )
}

export default ProjectCard

const Wrapper = styled.section`

display: grid;
row-gap: 3rem;

.card {
    display: inline-block;
    width: 45%;
    // height: 50%;
    margin: 20px;
    background-color: #fff;
    text-align: center;
}

img {
    width: 10%;
    height: 45%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
}


`
