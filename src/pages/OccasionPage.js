import React, { useState, useEffect } from "react";
//Router
import { useParams } from "react-router-dom";
//Components
import GiftNotOk from "../components/occasionPage/GiftNotOk";
import OccPageTitle from "../components/occasionPage/OccPageTitle";
import GiftOk from "../components/occasionPage/GiftOk";
import OccInCart from "../components/occasionPage/OccInCart";
import DeleteBtn from "../components/occasionPage/DeleteBtn";
//Hooks
import useCurrentOccasion from "../hooks/useCurrentOccasion";
import useGetCart from "../hooks/useGetCart";
//Moment
import moment from "moment";

function OccasionPage() {
  const [occasionInCart, setOccasionInCart] = useState(false);
  const { occasionId } = useParams();
  const currentOccasion = useCurrentOccasion(occasionId);
  const { occDate, occName, occasion, occGift, occEmail } = currentOccasion;
  const currentCart = useGetCart();

  useEffect(() => {
    currentCart.forEach((item) => {
      if (item.currentOccasion.occasionId === occasionId) {
        setOccasionInCart(true);
      }
    });
  }, [currentCart, occasionId]);

  if (occasion) {
    return (
      <div className="occasion-page-container">
        <>
          <OccPageTitle
            occDate={moment(occDate.toDate()).format("LL")}
            occName={occName}
            occasion={occasion}
          />
          <div className="occasion-page-status">
            {occGift ? (
              <GiftOk
                occEmail={occEmail}
                occasionId={occasionId}
                occDate={moment(occDate.toDate()).format("LL")}
              />
            ) : occasionInCart ? (
              <OccInCart />
            ) : (
              <GiftNotOk occasionId={occasionId} />
            )}
          </div>
        </>
        <DeleteBtn occasionId={occasionId} />
      </div>
    );
  } else {
    return <></>;
  }
}

export default OccasionPage;
