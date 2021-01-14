import React from "react";

function addOccSlide4(props) {
  const slideId = 4;

  const {
    slide,
    occEmail,
    handleChange,
    prevSlide,
    error,
    handleSubmit,
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
        <h1 className="add-occ-title">
          What's the email of the special someone?
        </h1>
        <input
          className="add-event-txt-input"
          type="text"
          value={occEmail}
          onChange={handleChange}
          name="email"
        ></input>
        {error && (
          <p className="add-occ-slide-error-txt">That's not a valid email!</p>
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
            onClick={() => handleSubmit(occEmail)}
          >
            <p className="btn-template-text">Next Slide</p>
          </button>
        </div>
      </form>
    </div>
  );
}
export default addOccSlide4;
