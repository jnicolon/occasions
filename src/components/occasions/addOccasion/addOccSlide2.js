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
        <div>
          <input
            className="add-occ-txt-input"
            type="text"
            value={occName}
            name="occName"
            onChange={handleChange}
          ></input>
          <p
            className="add-occ-error-txt"
            style={error ? { opacity: 1 } : { opacity: 0 }}
          >
            Field can't be empty!
          </p>
        </div>
        <div>
          <button
            type="button"
            className="add-occ-btn-container"
            onClick={prevSlide}
          >
            <p className="btn-template-text">Prev slide</p>
          </button>
          <button
            type="submit"
            className="add-occ-btn-container"
            onClick={() => nextSlide(occName)}
          >
            <p className="add-occ-btn-text">Next Slide</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default addOccSlide2;
