import React from "react";

function BtnTemplate({ text, onClick, size }) {
  return (
    <button
      onClick={onClick}
      className={
        size === "sm" ? "btn-template-container-sm" : "btn-template-container"
      }
    >
      <p
        className={size === "sm" ? "btn-template-text-sm" : "btn-template-text"}
      >
        {text}
      </p>
    </button>
  );
}

export default BtnTemplate;
