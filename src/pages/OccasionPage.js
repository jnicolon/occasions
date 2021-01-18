import React from "react";
//Redux
import { useSelector } from "react-redux";
//Moment
import moment from "moment";
//Router
import { Link } from "react-router-dom";
//Components
import BtnTemplate from "../components/navbar/BtnTemplate";

function OccasionPage() {
  const occasionInCart = false;
  const { occDate, occName, occasion, occGift, occasionId } = useSelector(
    (state) => state.occasions.currentOccasion
  );

  if (occasion) {
    return (
      <div className="occasion-page-container">
        <>
          <div className="occasion-page-title">
            <h2>{occDate && `${moment(occDate.toDate()).format("LL")}`}</h2>
            <h2>{`is a special occasion because it's`}</h2>
            <h1>{`${occName}'s ${occasion}`}</h1>
          </div>
          <div className="occasion-page-status">
            {occGift ? (
              <div className="occasion-page-btn-container">
                <h1>You already set up a gift for this occasion. </h1>{" "}
                <h1> Check it on your </h1>
                <Link to={`/scheduledpage`}>
                  <BtnTemplate text="scheduled occasions page" />
                </Link>
              </div>
            ) : occasionInCart ? (
              <div className="occasion-page-btn-container">
                <h1>There's already a gift in the cart for this occasion.</h1>
                <div className="occasion-page-options">
                  <Link to={`/cartpage`}>
                    <BtnTemplate text="Go to cart page" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="occasion-page-btn-container">
                <h1>You have not set a gift for this special occasion!</h1>
                <div className="occasion-page-options">
                  <Link to={`/giftspage/${occasionId}`}>
                    <BtnTemplate text="Buy and schedule a gift" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </>
      </div>
    );
  } else {
    return <></>;
  }
}

export default OccasionPage;
