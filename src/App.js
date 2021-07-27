import React from 'react'
// import { Switch, Route } from 'react-router-dom'
import { 
  Header,
  SomethingFun, 
  Projects, 
  About, 
  Contact,
} from './Components' 


const App = () => {


  return (
    <div>
      <Header />
      <SomethingFun />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
