import React, { useState } from 'react'
import styled from 'styled-components'
import { FaTimes, FaBars, FaHome, FaUserAlt, FaEnvelope } from "react-icons/fa";
import heh from './assets/heh.jpeg'


function App() {

  const [toggleContainer, setToggleContainer] = useState(false)

  const handleToggleNavBar = () => {
    setToggleContainer(!toggleContainer)
  }


  return (
    <Container>
      <div className={`main-container ${ toggleContainer ? 'show-nav' : null }`}>
        <div className="circle-container">
          <div className="circle">
            <button className='close' onClick={handleToggleNavBar} >
              <FaTimes />
            </button>
            <button className='open' onClick={handleToggleNavBar} >
              <FaBars />
            </button>
          </div>
        </div>

      <div className="about">
        <h1>aboot me</h1>
        <img src={heh} alt="it me" />
      </div>

      <div className="projects">
        <h1>my Pj's</h1>
        <small>theyre good me thinks</small>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nulla reiciendis totam ut esse, impedit provident voluptatem culpa adipisci tempore expedita omnis dicta ratione dolore at velit harum corporis aliquid?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nulla reiciendis totam ut esse, impedit provident voluptatem culpa adipisci tempore expedita omnis dicta ratione dolore at velit harum corporis aliquid?
      </p>
      </div>

      </div>

      <Nav>
        <ul>
          <li><FaHome className='icon' />Home</li>
          <li><FaUserAlt className='icon' />Projects</li>
          <li><FaEnvelope className='icon' />Contact</li>
        </ul>
      </Nav>
    </Container>
  );
}

export default App;

const Nav = styled.nav`
position: fixed;
bottom: 50px;
left: 0;
z-index: 100;
ul {
  list-style-type: none;
  padding-left: 30px;
}
li {
  text-transform: uppercase;
  color: #fff;
  margin: 40px 0;
  transform: translateX(-100%);
  transition: transform 0.4s ease-in;
}

li + li {
  margin-left: 15px;
  transform: translateX(-150%);
}

li + li + li {
  margin-left: 30px;
  transform: translateX(-200%);
}

.icon {
  font-size 20px;
  margin-right: 10px;
}
`

const Container = styled.section`
.main-container{
  background-color: #fafafa;
  transform-origin: top left;
  transition: transform 0.5s linear;
  width: 100vw;
  min-height: 100vh;
  padding: 50px;
}

.main-container.show-nav {
  transform: rotate(-20deg)
}

.main-container.show-nav + nav li {
  transform: translateX(0);
  transition-delay: 0.3s;
}

.circle-container {
  position: fixed;
  top: -100px;
  left: -100px;
}

.circle {
  background-color: #ff7979;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;
}

.main-container.show-nav .circle {
transform: rotate(-70deg);
}

.circle button {
  position: absolute;
  top: 50%;
  left 50%;
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: #fff;
  cursor: pointer;
}

.circle button:focus {
  outline: none;
  cursor: pointer;
}

.circle button.open {
  left: 60%;
}

.circle button.close {
  top: 60%;
  transform: rotate(90deg);
  transform-origin: top left;

}

.about img {
  height: 300px;
  width: 150px;
  border-radius: 5%;
}

.projects {
  max-width: 1000px;
  margin: 50px auto;
}

`
