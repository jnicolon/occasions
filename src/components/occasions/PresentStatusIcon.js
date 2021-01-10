import React from "react";
import { useState, useRef } from "react";

import { TiGift } from "react-icons/ti";
import { ImCross } from "react-icons/im";

function PresentStatusIcon() {
  const presentStatus = false;
  const [iconDisplayStatus, setIconDisplayStatus] = useState(false);
  const [style, setStyle] = useState({});
  const presentRef = useRef(null);

  const display = () => {
    const offsetTop = presentRef.current.offsetTop;
    const offsetLeft = presentRef.current.offsetLeft;
    const statusWidth = 180;
    let statusX;

    if (window.innerWidth - offsetLeft < statusWidth) {
      statusX = statusWidth - 10;
    } else {
      statusX = -30;
    }

    setStyle({
      top: `${offsetTop + 35}px`,
      left: `${offsetLeft - statusX}px`,
    });

    setIconDisplayStatus((iconDisplayStatus) => !iconDisplayStatus);
  };

  console.log(style);

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => {
        display();
      }}
      onMouseLeave={() => {
        display();
      }}
      ref={presentRef}
    >
      <div className="present-icon-container">
        <TiGift className="occ-list-present-icon" />
        {!presentStatus && <ImCross className="present-cancel-icon" />}
        <div
          style={style}
          className={
            iconDisplayStatus
              ? "present-icon-status present-icon-status-on"
              : "present-icon-status"
          }
        >
          {presentStatus
            ? "Your gift is already set up!"
            : "You have not set up a gift yet!"}
        </div>
      </div>
    </div>
  );
}

export default PresentStatusIcon;
