import React from 'react'
import styled from 'styled-components'
import me from '../assets/it-me.png'

const SomethingFun = () => {
    return (
        <Wrapper>
            <img src={me} alt="issa me" />
        </Wrapper>
    )
}

export default SomethingFun

const Wrapper = styled.section`
width: 100%;
height: 40rem;
background-color: #445D7B;
display: flex;
align-items: center;
justify-content: center;

img {
    height: 550px;
    width: 500px;
    padding-top: 75px;
    margin: 0 auto;
}

`
