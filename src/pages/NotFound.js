import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="email-container">
      <h4 className="occ-upNext-title">Occasions</h4>
      <br />
      <h2 className="occ-upNext-name">404</h2>
      <h2 className="occ-upNext-name">Page not found</h2>
      <div className="occ-upNext-center">
        <div
          style={{ textAlign: "center" }}
          className="occ-upNext-left-container"
        ></div>
      </div>
      <br />

      <Link to="/">
        <h4 className="occ-upNext-title">Back to home page.</h4>
      </Link>
    </div>
  );
}

export default NotFound;
