import React from "react";

function PaginacionEpisodes({ onPrev, onNext, next, prev }) {
  function handlePrev() {
    onPrev();
  }

  function handleNext() {
    onNext();
  }

  return (
    <div>
      {prev ? <button onClick={handlePrev}>Prev</button> : null}
      {next ? <button onClick={handleNext}>Next</button> : null}
    </div>
  );
}

export default PaginacionEpisodes;
