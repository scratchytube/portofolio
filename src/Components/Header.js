import React from 'react'
import styled from 'styled-components'
import { Divide as Hamburger } from 'hamburger-react'
import { FaLinkedin, FaGithub  } from 'react-icons/fa';

const Header = () => {
    return (
        <Wrapper>
            <div className='nav-center'>
                <div className="nav-header">
                    <h3>Brian Sahota</h3>
                    <button className="nav-toggle">
                        <Hamburger size={20}/>
                    </button>
                </div>
                <div className="links-container show-container">
                    <ul className="links">
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">About me</a>
                        </li>
                        <li>
                            <a href="#">Contact me</a>
                        </li>
                    </ul>
                </div>
                <ul className='social-icons'>
                    <li>
                        <a href="www.github.com"><FaGithub /></a>
                    </li>
                    <li>
                        <a href="www.linkedIn.com"><FaLinkedin /></a>
                    </li>
                </ul>
            </div>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.nav`
background-color: #fafafa;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

.nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    letter-spacing: 0.2em;
    font-size: 15px;
    text-transform: uppercase;
}

.nav-toggle {
    color: #black;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
}

.links a {
font-size: 1rem;
text-transform: capitalize;
letter-spacing: 0.1rem;
display: block;
padding: 0.5rem 1rem;
transition: all 0.3s linear;
text-decoration: none;
color: #C26868;
}

.links a:hover {
    background: hsl(210, 31%, 80%);
    color: white;
    padding-left: 1.5rem;
    color: #445D7B;
}

.social-icons {
    display: none;
}

@media screen and (min-width: 800px) {
    .nav-center {
        max-width: 1170px;
        margin: 0 auto;  
        display: flex;
        align-items: center;  
        justify-content: space-between;
        padding: 1rem;
    }

    .nav-header {
        padding: 0;
    }

    .nav-toggle {
        display: none;
    }

    .links-container {
        height: auto !important;
    }

    .links {
        display: flex;
    }

    .links a {
        padding: 0;
        margin 0 0.5rem;
    }

    .links a:hover {
        padding: 0;
        background: transparent;
    }

    .social-icons {
        display: flex;
    }

    .social-icons a {
        margin: 0 0.5rem;
        color: black;
        transition: all 0.3s linear;
    }
}


`
