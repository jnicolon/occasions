import React, { useState } from "react";
//Redux
import { useSelector } from "react-redux";
//Moment
import moment from "moment";
//Hooks
import useGetScheduledOccasions from "../hooks/useGetScheduledOccasions";
//Component
import ScheduledItem from "../components/scheduledpage/ScheduledItem";

function ScheduledPage() {
  const userId = useSelector((state) => state.firebase.auth.uid);
  const scheduledOccasions = useGetScheduledOccasions(userId);
  const [orderBy, setOrderBy] = useState("occDate");

  const orderArray = (order) => {
    if (order === "occDate") {
      scheduledOccasions.sort((a, b) => {
        return (
          a.currentOccasion.occDateString - b.currentOccasion.occDateString
        );
      });
    } else if (order === "occName") {
      scheduledOccasions.sort((a, b) => {
        let nameA = a.currentOccasion.occName.toUpperCase(); // ignore upper and lowercase
        let nameB = b.currentOccasion.occName.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }

    setOrderBy(order);
  };

  return (
    <div className="scheduled-page-container">
      <h3>Your scheduled occasions</h3>
      <div className="scheduled-page-btn-container">
        <h2 className="scheduled-page-btn">OrderBy</h2>
        <h1
          onClick={() => orderArray("occName")}
          className={
            orderBy === "occName"
              ? "scheduled-page-btn-selected"
              : "scheduled-page-btn"
          }
        >
          Name
        </h1>
        <h1
          onClick={() => orderArray("occDate")}
          className={
            orderBy === "occDate"
              ? "scheduled-page-btn-selected"
              : "scheduled-page-btn"
          }
        >
          Date
        </h1>
      </div>
      {scheduledOccasions &&
        scheduledOccasions.map((item) => {
          let today = new Date();
          let compare = new Date(
            moment(item.currentOccasion.occDate.toDate()).format()
          );
          if (compare.getTime() >= today.getTime()) {
            return (
              <ScheduledItem
                key={scheduledOccasions.indexOf(item)}
                item={item}
                scheduledOccasions={scheduledOccasions}
              />
            );
          } else {
            return null;
          }
        })}
    </div>
  );
}

export default ScheduledPage;
