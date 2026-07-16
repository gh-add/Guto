import { useState } from 'react'
import Nav from './components/nav.jsx'
import About from './components/session/about.jsx'
import Cinegrafia from './components/session/cinegrafia.jsx'
import Projects from './components/session/projects.jsx'
import Musics from './components/session/musics.jsx'
import Footer from './components/footer.jsx'
import './styles/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Nav />
        <main>
          <Routes>
          <Route path="/" 
          element={
            <>
            <About />
            <Projects />
            <Musics />
            <Cinegrafia />
            </>
            } />
          </Routes>
        </main>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
