import React from "react";

function addOccSlide3(props) {
  const slideId = 3;
  const {
    occDate,
    slide,
    handleChange,
    checkDate,
    prevSlide,
    error,
    dateError,
  } = props;
  return (
    <div
      className={
        slideId === slide
          ? "add-occ-container "
          : "add-occ-slide-container add-occ-container-none "
      }
    >
      <form onSubmit={(e) => e.preventDefault()} className="add-occ-form">
        <h1 className="add-occ-title">What's the date of the occassion?</h1>
        <input
          name="date"
          className="add-event-txt-input"
          type="date"
          value={occDate}
          onChange={handleChange}
        ></input>
        {error && (
          <p className="add-occ-slide-error-txt">Field can't be empty!</p>
        )}
        {dateError && (
          <p className="add-occ-slide-error-txt">Date can't be in the past</p>
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
            onClick={() => checkDate()}
          >
            <p className="btn-template-text">Next Slide</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default addOccSlide3;
