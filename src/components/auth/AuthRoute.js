import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = ({ component: Component, ...rest }) => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);

  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn === false ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;
