import React from 'react'
import styled from 'styled-components'

const Sidebar = () => {
    return (
        <Wrapper>
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
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.nav`


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
`
