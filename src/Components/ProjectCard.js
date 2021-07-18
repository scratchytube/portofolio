import React from 'react'
import styled from 'styled-components'

const ProjectCard = ({ project }) => {
    const { name, description, image } = project

    return (
        <Wrapper>
            <article>
                <img src={image} alt={name} />
                <div className='card'>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <button>Github</button>
                    <button>Live</button>
                </div>
            </article>
        </Wrapper>
    )
}

export default ProjectCard

const Wrapper = styled.section`
display: grid;
row-gap: 3rem;

article {
    max-width: 1024px;
    margin-top: 30px;
    margin: 0 auto;
    margin-bottom: 40px;
}

.card {
    background-color: #eee;
}

img {
    width: 100%;
    display: block;
    width: 500px;
    height: 350px;
}

`
