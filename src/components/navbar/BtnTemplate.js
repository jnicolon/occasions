import React from "react";

function BtnTemplate({ text, func }) {
  return (
    <button
      type="submit"
      onClick={(e) => func(e)}
      className="btn-template-container"
    >
      <p className="btn-template-text">{text}</p>
    </button>
  );
}

export default BtnTemplate;
