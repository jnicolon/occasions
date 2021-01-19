import React, { useState, useEffect } from "react";
//Redux
import { useSelector } from "react-redux";
//Router
import { Link } from "react-router-dom";
//Component
import BtnTemplate from "../navbar/BtnTemplate";
//Hooks
import useGetScheduledOccasions from "../../hooks/useGetScheduledOccasions";

function GiftOk({ occasionId, occDate, occEmail }) {
  const userId = useSelector((state) => state.firebase.auth.uid);
  const scheduledOccasions = useGetScheduledOccasions(userId);
  const [currentScheduledOccasion, setCurrentScheduledOccasion] = useState({});

  useEffect(() => {
    let tempOcc = {};
    scheduledOccasions.forEach((sOcc) => {
      if (occasionId === sOcc.currentOccasion.occasionId) {
        tempOcc = sOcc;
      }
    });
    setCurrentScheduledOccasion(tempOcc);
  }, [scheduledOccasions, occasionId]);

  console.log(currentScheduledOccasion);

  return (
    <div className="occasion-page-btn-container">
      <div>
        <h1 style={{ fontSize: "16px" }}>
          You already scheduled a card for this occasion.
        </h1>
        {currentScheduledOccasion.card && (
          <div className="occ-page-gitOk-container">
            <img
              className="occasion-page-img"
              src={currentScheduledOccasion.card.url}
              alt="card name"
            ></img>
            <div className="occ-page-gitOk-txt-container">
              <p>Your message:</p>
              <p>{currentScheduledOccasion.card.cardMessage}</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <h2>This card will be sent on {occDate}</h2>
        <h2>To {occEmail}</h2>
        <div class="occasion-page-giftOk-btn-container">
          <Link to={`/scheduledpage`}>
            <BtnTemplate text="scheduled occasions page" />
          </Link>
          <BtnTemplate text="unschedule this card" />
        </div>
      </div>
    </div>
  );
}

export default GiftOk;
