import React, { useState, useEffect } from "react";
//Redux
import { useSelector } from "react-redux";
//Firestore
import { useFirestore } from "react-redux-firebase";
//Moment
import moment from "moment";
//Router
import { Link } from "react-router-dom";

function ScheduledPage() {
  const userId = useSelector((state) => state.firebase.auth.uid);
  const firestore = useFirestore();

  const [scheduledOccasions, setScheduledOccasions] = useState([
    {
      card: {
        cardName: "Birthday",
        url:
          "https://firebasestorage.googleapis.com/v0/b/thoughtfulv3.appspot.com/o/cards%2Fbirthday%2Fbirthday_4.png?alt=media&token=c322743c-d7b9-4c86-aef9-71634b2d7b59",
      },
      currentOccasion: {
        occName: "Maria",
        occasion: "Birthday",
        occDate: "September 29th 2021",
      },
    },
  ]);

  useEffect(() => {
    userId &&
      firestore
        .collection("scheduledOccasions")
        .doc(userId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            let temp = doc.data();
            setScheduledOccasions(temp.scheduledOccasionsInfo);
          } else {
            console.log("doc doesnt exist");
          }
        });
  }, [firestore, userId]);

  return (
    <div className="scheduled-page-container">
      <h3>Your scheduled occasions</h3>
      {scheduledOccasions &&
        scheduledOccasions.map((item) => {
          return (
            <Link
              key={scheduledOccasions.indexOf(item)}
              to={`/occasionpage/${item.currentOccasion.occasionId}`}
            >
              <div className="scheduled-page-item-container">
                <img
                  className="scheduled-page-item-img"
                  src={item.card.url}
                  alt={`card name ${item.card.cardName}`}
                ></img>
                <div>
                  <p className="scheduled-page-item-title">
                    {`For ${item.currentOccasion.occName}'s ${item.currentOccasion.occasion}`}
                  </p>
                  <p className="scheduled-page-item-txt">
                    {`You have selected the card ${item.card.cardName} by ${item.card.cardAuthor}`}
                  </p>
                  <p className="scheduled-page-item-txt">{`to be sent on ${moment(
                    item.currentOccasion.occDate.toDate()
                  ).format("LL")}`}</p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default ScheduledPage;
