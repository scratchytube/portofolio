import React from 'react'
import styled from 'styled-components'
import { Divide as Hamburger } from 'hamburger-react'

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
                        <a href="www.github.com">Github</a>
                    </li>
                    <li>
                        <a href="www.linkedIn.com">LinkedIn</a>
                    </li>
                </ul>
            </div>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.nav`
background-color: #fafafa;
`
