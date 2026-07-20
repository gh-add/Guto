import React from 'react'
import Cat from './partials/cat'

const Header = () => {
  return (
    <header className="masthead m-2 p-2">
      <div className="container p-4 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex flex-column flex-lg-row justify-content-center align-content-center gap-4 w-75">
          <div className="d-flex justify-content-center mb-3 mb-md-0">
            <Cat />
          </div>
          <div className="text-start intro-text">
            <div className="d-flex">
            <h1 className="my-3">hi there! sou <span className="header-name">Guto.</span></h1>
            </div>
            <p className="mt-3 mb-4">
              Dev full meio obcecado com detalhes — sempre catando algo novo pra aprender ou testar. 
              Fora isso: livros, jogos, filmes. Um pouco de tudo, o tempo todo.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


