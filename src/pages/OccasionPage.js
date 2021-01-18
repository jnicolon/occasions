import React, { useState, useEffect } from "react";
//Moment
import moment from "moment";
//Router
import { Link, useParams } from "react-router-dom";
//Components
import BtnTemplate from "../components/navbar/BtnTemplate";
//Hooks
import useCurrentOccasion from "../hooks/useCurrentOccasion";
import useGetCart from "../hooks/useGetCart";

function OccasionPage() {
  const [occasionInCart, setOccasionInCart] = useState(false);
  const { occasionId } = useParams();
  const { occDate, occName, occasion, occGift } = useCurrentOccasion(
    occasionId
  );
  const currentCart = useGetCart();

  useEffect(() => {
    let userCart = [];
    currentCart.forEach((item) => {
      if (item.currentOccasion.occasionId === occasionId) {
        userCart.push(item);
      }
    });
    if (userCart.length > 0) {
      setOccasionInCart(true);
    }
  }, [currentCart, occasionId]);

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
