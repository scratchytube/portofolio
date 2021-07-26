import React from 'react'
import { 
  // Navbar, 
  Header,
  SomethingFun, 
  Projects, 
  About, 
  Contact,
  Sidebar,
} from './Components' 


const App = () => {


  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Sidebar />
      <SomethingFun />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
