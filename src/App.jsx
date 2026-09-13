import { useState } from 'react'
import Nav from './components/nav.jsx'
import About from './components/session/about.jsx'
import Skills from './components/session/skills.jsx'
import Projects from './components/session/projects.jsx'
import Musics from './components/session/musics.jsx'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import './styles/Globalstyle.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Nav />
        <main>
          <Header />
          <Routes>
          <Route path="/" 
          element={
            <>
            <About />
            <Projects />
            <Skills />
            <Musics />
            </>
            } />
          </Routes>
        </main>
        <div className="project-modal"></div>
        <Footer />
    </BrowserRouter>
  )
}

export default App
