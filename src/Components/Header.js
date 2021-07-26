import React, { useState } from 'react'
import styled from 'styled-components'
import { Divide as Hamburger } from 'hamburger-react'
import { FaLinkedin, FaGithub  } from 'react-icons/fa';

const Header = () => {
    const [showLinks, setShowLinks] = useState(false)

    return (
        <Wrapper>
            <div className='nav-center'>
                <div className="nav-header">
                    <h3>Brian Sahota</h3>
                    <button onClick={() => setShowLinks(!showLinks)} className="nav-toggle">
                        <Hamburger size={20}/>
                    </button>
                </div>
                <div className={`${
                    showLinks ? "links-container show-container" : "links-container"}`} >
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
                        <a href="https://github.com/scratchytube"><FaGithub /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/bsahota"><FaLinkedin /></a>
                    </li>
                </ul>
            </div>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.nav`
position: fixed;
width: 100%;
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
    color: black;
}

.links a:hover {
    background: hsl(210, 31%, 80%);
    color: white;
    padding-left: 1.5rem;
    color: #C26868;;
}

.social-icons {
    display: none;
}

.links-container {
    height: 0;
    overflow: hidden;
    transition: all 0.3s linear;
  }
  .show-container {
    height: 10rem;
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
        padding-right: 3.75rem;
    }

    .links {
        display: flex;
    }

    .links a {
        padding: 0;
        margin: 0 0.5rem;
    }

    .links a:hover {
        padding: 0;
        background: transparent;
    }

    .social-icons {
        display: flex;
        padding-right: 1rem;
    }

    .social-icons a {
        margin: 0 0.5rem;
        color: black;
        transition: all 0.3s linear;
    }
}


`
