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
        <div>
          <input
            className="add-occ-txt-input"
            type="text"
            value={occEmail}
            onChange={handleChange}
            name="email"
          ></input>

          <p
            className="add-occ-error-txt"
            style={error ? { opacity: 1 } : { opacity: 0 }}
          >
            That's not a valid email!
          </p>
        </div>
        <div>
          <button
            type="button"
            className="add-occ-btn-container"
            onClick={prevSlide}
          >
            <p className="add-occ-btn-text">Prev slide</p>
          </button>
          <button
            type="submit"
            className="add-occ-btn-container"
            onClick={() => handleSubmit(occEmail)}
          >
            <p className="add-occ-btn-text">Next Slide</p>
          </button>
        </div>
      </form>
    </div>
  );
}
export default addOccSlide4;
