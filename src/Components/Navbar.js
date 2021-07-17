import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Wrapper>
            <div className='inner-name'>
                <p>Brian Sahota</p>
            </div>
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.nav`
position: fixed;
width: 100%;
background-color: #fafafa;
letter-spacing: 0.2em;
text-transform: uppercase;
text-align: center;
font-size: 15px;

.inner-name {
    margin: 0 auto;
    line-height: 100px;
}

p {
    color: #333;
}
`
