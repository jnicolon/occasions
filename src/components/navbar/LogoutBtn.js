import React from "react";
import { useFirebase } from "react-redux-firebase";

function LogoutBtn() {
  const firebase = useFirebase();

  const handleClick = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <h3 className="profile-btn-popup-txt" onClick={handleClick}>
      Log out
    </h3>
  );
}

export default LogoutBtn;
