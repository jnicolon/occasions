import React from "react";

function OccPageTitle({ occDate, occName, occasion }) {
  return (
    <div className="occasion-page-title">
      <h2>{occDate && `${occDate}`}</h2>
      <h2>{`is a special occasion because it's`}</h2>
      <h1>{`${occName}'s ${occasion}`}</h1>
    </div>
  );
}

export default OccPageTitle;
