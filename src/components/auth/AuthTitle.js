import React from "react";
import { Link } from "react-router-dom";

function AuthTitle() {
  return (
    <Link to="/">
      {" "}
      <h1 className="auth-occasions-title">Occasions</h1>{" "}
    </Link>
  );
}

export default AuthTitle;
