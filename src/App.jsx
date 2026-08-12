import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Publications from './components/Publications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
      <main>
        <Home/>
        <About/>
        <Education/>
        <Experience/>
        <Skills/>
        <Projects/>
        <Certifications/>
        <Publications/>
        <Achievements/>
        <Contact/>
      </main>
      <Footer/>      
    </div>
  )
}

export default App
