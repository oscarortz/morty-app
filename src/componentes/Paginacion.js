import React from "react";
import "../App.css";

function Paginacion({
  personajesPorPagina,
  paginaActual,
  setPaginaActual,
  totalPersonajes,
}) {
  const pageNumber = [];
  for (let i = 1; i <= totalPersonajes / personajesPorPagina; i++) {
    pageNumber.push(i);
  }

  const onPreviusPage = () => {
    setPaginaActual(paginaActual - 1);
  };
  const onNextPage = () => {
    setPaginaActual(paginaActual + 1);
  };
  const onEspecificPage = (n) => {
    setPaginaActual(n);
  };

  return (
    <div className="paginacion-contenedor">
      <button disabled={paginaActual === 1} onClick={onPreviusPage}>
        Prev
      </button>

      <ul>
        {pageNumber.map((noPage) => (
          <button
            key={noPage}
            className={noPage === paginaActual ? "isActive" : ""}
            onClick={() => onEspecificPage(noPage)}
          >
            {noPage}
          </button>
        ))}
      </ul>
      <button disabled={paginaActual >= pageNumber.length} onClick={onNextPage}>
        Next
      </button>
    </div>
  );
}

export default Paginacion;
