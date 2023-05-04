// import { useState } from 'react'
// import { ThemeContext } from './contexts/theme'
import Navbar from './components/navbar'
import Footer from './components/footer'
import About from './components/about_me'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Resume from './components/resume'
import './App.css'

const App = () => {
  
  return (
    <div>
      <Navbar />

      <main>
        <About />
        <Portfolio />
        <Contact /> 
        <Resume />
      </main>

      <Footer />
    </div>
  )
}

export default App
