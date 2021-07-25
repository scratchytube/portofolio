import React from 'react'
import styled from 'styled-components'
import { Divide as Hamburger } from 'hamburger-react'

const Navbar = () => {
    return (
        <Wrapper>
            <div className='nav'>
                <div className="nav-header">
                    <div className='inner-name'>
                        <p>Brian Sahota</p>
                    </div>
                    <div className="dropdown">
                            <Hamburger className='hamburger' size={20}/>
                        <ul>
                            <li>Projects</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.header`
position: fixed;
background-color: #fafafa;
height: 7rem;
text-align: center;
width: 100%;
z-index: 999;

.nav {
    margin: 0 auto;
}

.nav-header {
    display: flex;
    padding-top: 2rem;
}

.inner-name {
    padding-left: 5.15rem;
    margin: 0 auto;
    letter-spacing: 0.2em;
    font-size: 15px;
    text-transform: uppercase;
}

.dropdown {
    padding-right: 2rem;
}

`
