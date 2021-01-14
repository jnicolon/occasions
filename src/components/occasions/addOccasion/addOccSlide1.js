import React from "react";

function addOccSlide1(props) {
  const { nextSlide, handleChange, occasion, error, slide } = props;
  const slideId = 1;
  return (
    <div
      className={
        slideId === slide
          ? "add-occ-container "
          : "add-occ-slide-container add-occ-container-none "
      }
    >
      <form onSubmit={(e) => e.preventDefault()} className="add-occ-form">
        <h1 className="add-occ-title">What's the special occasion?</h1>
        <div>
          <select
            onChange={handleChange}
            className="add-occ-select-occasion"
            defaultValue="Select"
            name="occasion"
          >
            <option value="Select" disabled>
              Select an occasion
            </option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Mother's Day">Mother's Day</option>
            <option value="Father's Day">Father's day</option>
          </select>

          <p
            className="add-occ-error-txt"
            style={error ? { opacity: 1 } : { opacity: 0 }}
          >
            Field can't be empty!
          </p>
        </div>
        <button
          className="add-occ-btn-container"
          onClick={() => {
            nextSlide(occasion);
          }}
        >
          <p className="add-occ-btn-text">Next Slide</p>
        </button>
      </form>
    </div>
  );
}

export default addOccSlide1;
