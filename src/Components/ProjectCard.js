import React from 'react'
import styled from 'styled-components'

const ProjectCard = ({ project }) => {
    const { name, description, image } = project

    return (
        <Wrapper>
            <article>
                <img src={image} alt={name} />
                
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <button>Github</button>
                    <button>Live</button>
                
            </article>
        </Wrapper>
    )
}

export default ProjectCard

const Wrapper = styled.section`
display: grid;
row-gap: 3rem;
margin-top: 3rem;

article {
    max-width: 300px;
    margin-top: 50px;
    margin: 0 auto;
    margin-bottom: 4rem;
    color: #fafafa;
}

p {
    text-align: center;
    letter-spacing: 0.1em
    margin-bottom: 1rem;
}

h4 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 1em;
}

img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
}

@media (min-width: 992px) {
    article{
        max-width: 1050px;
        margin: 0 auto;
        margin-bottom: 40px;
    }
    img {
        width: 100%;
        display: block;
        width: 1050px;
        height: 700px;
        object-fit: cover;
    }

    h4 {
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        padding-top: 2rem;
        font-size: 2em;
    }
    
    
}

`
