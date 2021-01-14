import React from "react";

function BtnTemplate({ text, onClick }) {
  return (
    <button onClick={onClick} className="btn-template-container">
      <p className="btn-template-text">{text}</p>
    </button>
  );
}

export default BtnTemplate;
