import React from "react";

import BtnTemplate from "../../navbar/BtnTemplate";

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
        {error && (
          <p className="add-occ-slide-error-txt">Field can't be empty!</p>
        )}
        <BtnTemplate
          onClick={() => {
            nextSlide(occasion);
          }}
          text="next slide"
        />
      </form>
    </div>
  );
}

export default addOccSlide1;
