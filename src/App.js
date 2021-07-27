import React, { useRef } from 'react'
// import { Switch, Route } from 'react-router-dom'
import { 
  Header,
  SomethingFun, 
  Projects, 
  About, 
  Contact,
} from './Components' 


const App = () => {
  const projectRef = useRef()
  const aboutRef = useRef()
  const contactRef = useRef()

  const scrollToProjects = () => {
    projectRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({behavior: 'smooth'})
  }

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({behavior: 'smooth'})
  }


  return (
    <div>
      <Header scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} />
      <SomethingFun />
      <Projects ref={projectRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />
    </div>
  )
}

export default App
