import React from 'react'
import styled from 'styled-components'
import { Divide as Hamburger } from 'hamburger-react'

const Navbar = () => {
    return (
        <Wrapper>
            <div className='nav-center'>
                <div className="nav-header">
                    <div className='inner-name'>
                        <p>Brian Sahota</p>
                    </div>
                    <div className="dropdown">
                        <Hamburger className='hamdurger' size={20}/>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.nav`

position: fixed;
background-color: #fafafa;
height: 7rem;
width: 100%;


.nav-center {
    margin: 0 auto;
}

.nav-header {
    display: flex;
    padding-top: 2rem;
}

.inner-name {
    padding-left: 3.15rem;
    margin: 0 auto;
    letter-spacing: 0.2em;
    font-size: 15px;
    text-transform: uppercase;
}

.dropdown {
    text-align: right;
}

`
