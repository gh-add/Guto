import React, { useEffect, useState } from "react";
import Cat from "./partials/cat";

const Header = () => {
  const [isRow, setIsRow] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => setIsRow(window.innerWidth >= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="masthead m-2 p-2">
      <div className="container p-4 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex flex-column flex-lg-row justify-content-center align-content-center gap-4 w-75">
          <div className={`d-flex justify-content-center mb-3 mb-md-0 ${isRow ? "cat-row" : "cat-col"}`}>
            <Cat key={isRow ? "row" : "col"} className={isRow ? "cat-row" : "cat-col"} />
          </div>
          <div className="text-start intro-text">
            <h1 className="my-3">hi there! sou <span className="header-name">Guto.</span></h1>
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

export default Header;
