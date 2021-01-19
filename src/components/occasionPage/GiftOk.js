import React, { useState, useEffect } from "react";
//Redux
import { useSelector, useDispatch } from "react-redux";
//Router
import { Link } from "react-router-dom";
//Component
import BtnTemplate from "../navbar/BtnTemplate";
//Hooks
import useGetScheduledOccasions from "../../hooks/useGetScheduledOccasions";
//Modal
import { toggleUnscheduleModal } from "../../redux/actions/modalActions";
//Firestore
import { useFirestore } from "react-redux-firebase";

function GiftOk({ occasionId, occDate, occEmail }) {
  const firestore = useFirestore();
  const dispatch = useDispatch();

  const [unscheduledOccasions, setUnscheduledOccasions] = useState([]);
  const [currentScheduledOccasion, setCurrentScheduledOccasion] = useState({});

  const modalStatus = useSelector((state) => state.modal.unscheduleBtn);
  const userId = useSelector((state) => state.firebase.auth.uid);
  const scheduledOccasions = useGetScheduledOccasions(userId);

  useEffect(() => {
    let tempUnscheduledOccasions = [];
    let tempSingleOcc = {};
    scheduledOccasions.forEach((sOcc) => {
      if (occasionId === sOcc.currentOccasion.occasionId) {
        tempSingleOcc = sOcc;
      } else {
        tempUnscheduledOccasions.push(sOcc);
      }
    });
    setUnscheduledOccasions(tempUnscheduledOccasions);
    setCurrentScheduledOccasion(tempSingleOcc);
  }, [scheduledOccasions, occasionId]);

  const unscheduleOccasion = () => {
    firestore
      .collection("occasions")
      .doc(userId)
      .collection("userOccasions")
      .doc(occasionId)
      .update({
        occGift: false,
      });

    firestore
      .collection("scheduledOccasions")
      .doc(userId)
      .set({ scheduledOccasionsInfo: unscheduledOccasions })
      .catch((err) => console.log(err.message));

    toggleModal(false);
  };

  console.log(scheduledOccasions);

  const toggleModal = (status) => {
    dispatch(toggleUnscheduleModal(status));
  };

  return (
    <div className="occasion-page-btn-container">
      <div>
        <h1 style={{ fontSize: "16px", fontFamily: "Lato" }}>
          You already scheduled a card for this occasion.
        </h1>
        {currentScheduledOccasion.card && (
          <div className="occ-page-gitOk-container">
            <img
              className="occasion-page-img"
              src={currentScheduledOccasion.card.url}
              alt="card name"
            ></img>
            <div className="occ-page-giftOk-txt-container">
              <p>Your message:</p>
              <p>{currentScheduledOccasion.card.cardMessage}</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <h3 className="occ-page-giftOk-subtitle">
          This card will be sent on {occDate}
        </h3>
        <h3 className="occ-page-giftOk-subtitle">To {occEmail}</h3>
        <div class="occasion-page-giftOk-btn-container">
          <Link to={`/scheduledpage`}>
            <BtnTemplate text="scheduled occasions page" />
          </Link>
          <BtnTemplate
            onClick={() => toggleModal(true)}
            text="unschedule this card"
          />
        </div>
      </div>
      <div
        style={{
          display: modalStatus ? "block" : "none",
          opacity: modalStatus ? "1" : "0",
        }}
        className="occasion-page-okGift-modal"
      >
        <div className="occasion-page-okGift-modal-container">
          <h1 className="occasion-page-okGift-modal-title">
            Are you sure you want to unschedule this card?
          </h1>
          <div>
            <Link to="/userhome">
              <BtnTemplate
                onClick={() => unscheduleOccasion()}
                size="sm"
                text="yes"
              />
            </Link>
            <BtnTemplate
              onClick={() => toggleModal(false)}
              size="sm"
              text="no"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftOk;
