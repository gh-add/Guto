import React, { useEffect, useState } from 'react'
import { ScrollSpy } from 'bootstrap';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const navbarCollapsible = document.querySelector('#mainNav');
    if (!navbarCollapsible) return;

    new ScrollSpy(document.body, { target: '#mainNav', rootMargin: '0px 0px -40%' });

    const onScroll = () => {
      navbarCollapsible.classList.toggle('navbar-scroll', window.scrollY > 0);
      setIsOpen(false); // fecha o menu ao rolar
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#page-top">Guto</a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarResponsive"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Software</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#musics">Playlist</a></li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#email"><i className="bi bi-envelope"></i></a></li>
            <li className="nav-item"><a className="nav-link" href="#linkedin"><i className="bi bi-linkedin"></i></a></li>
            <li className="nav-item"><a className="nav-link" href="#github"><i className="bi bi-github"></i></a></li>
            <li className="nav-item"><a className="nav-link" href="#medium"><i className="bi bi-medium"></i></a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav