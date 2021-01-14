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

  const errorTxt = () => {
    if (error) {
      return "Field can't be empty!";
    } else if (dateError) {
      return "The date must be in the future";
    } else {
      return "Placeholder text";
    }
  };

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
        <div>
          <input
            name="date"
            className="add-occ-txt-input"
            type="date"
            value={occDate}
            onChange={handleChange}
          ></input>

          <p
            className="add-occ-error-txt"
            style={error || dateError ? { opacity: 1 } : { opacity: 0 }}
          >
            {errorTxt()}
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
            onClick={() => checkDate()}
          >
            <p className="add-occ-btn-text">Next Slide</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default addOccSlide3;
