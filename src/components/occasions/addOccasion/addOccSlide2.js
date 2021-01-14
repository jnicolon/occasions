import React from "react";

function addOccSlide2(props) {
  const slideId = 2;
  const { slide, nextSlide, prevSlide, occName, handleChange, error } = props;

  return (
    <div
      className={
        slideId === slide
          ? "add-occ-container "
          : "add-occ-slide-container add-occ-container-none "
      }
    >
      <form onSubmit={(e) => e.preventDefault()} className="add-occ-form">
        <h1 className="add-occ-title">What's the special someone's name?</h1>
        <input
          className="add-event-txt-input"
          type="text"
          value={occName}
          name="occName"
          onChange={handleChange}
        ></input>
        {error && (
          <p className="add-occ-slide-error-txt">Field can't be empty!</p>
        )}
        <div>
          <button
            type="button"
            className="btn-template-container"
            onClick={prevSlide}
          >
            <p className="btn-template-text">Prev slide</p>
          </button>
          <button
            type="submit"
            className="btn-template-container"
            onClick={() => nextSlide(occName)}
          >
            <p className="btn-template-text">Next Slide</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default addOccSlide2;
