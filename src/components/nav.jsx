import React, { useEffect } from 'react'
import { ScrollSpy } from 'bootstrap';



const Nav = () => {
  useEffect(() => {
    const navbarShrink = () => {
      const navbarCollapsible = document.querySelector('#mainNav');
      if (!navbarCollapsible) return;

      if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink');
      } else {
        navbarCollapsible.classList.add('navbar-shrink');
      }
    };

    // Ativa o ScrollSpy do Bootstrap
    const mainNav = document.querySelector('#mainNav');
    if (mainNav) {
      new ScrollSpy(document.body, {
        target: '#mainNav',
        rootMargin: '0px 0px -40%',
      });
    }

    // Executa uma vez ao carregar
    navbarShrink();

    // Adiciona listener de scroll
    window.addEventListener('scroll', navbarShrink);

    // Remove listener ao desmontar
    return () => {
      window.removeEventListener('scroll', navbarShrink);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#page-top">Guto</a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">Sobre</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Software</a></li>
            <li className="nav-item"><a className="nav-link" href="#musics">Músicas</a></li>
            <li className="nav-item"><a className="nav-link" href="#cinegrafia">Cinegrafia</a></li>
            <li className="nav-item"><a className="nav-link" href="#licenca">Licença</a></li>
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
