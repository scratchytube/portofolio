import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (
       <Wrapper>
           <div className="split left">
                <h1>hey i'm brian</h1>
                <p>During my bootcamp journey I've crossed paths with brilliant instructors, a welcoming tech community and talented colleagues who continue to inspire me to this day. Throughout the rigorous curriculum I built five projects using React, Redux and Ruby on Rails to show my mastery of these technologies.</p>
                <p>Now as a software engineer, I've continued to push myself post-graduation by collaborating on projects with other engineers, learning new technologies and by sharpening my existing skills.</p>
           </div>
           <div className="split right">
                <h1>avatar here</h1>
           </div>
       </Wrapper>
    )
}

export default About
const Wrapper = styled.section`
position: relative;
width: 100%;
height: 100%;
background-color: #445D7B;
height: 30rem;
color: #fff;
letter-spacing: 0.2em;

.split {
    position: absolute;
    width: 50%;
    font-weight: 200;
}

.split.left {
    left: 0;
    margin-top: 3rem;
}

.split.right {
    right: 0;
    
    margin-top: 3rem;
}

h1 {
    text-align: center;
}

p {
    padding-left: 3rem;
    margin-top: 2.5rem;
}

`
