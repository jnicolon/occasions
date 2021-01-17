import React from "react";

function OccasionListBtns({ setOrderBy }) {
  const [listBtnStatus, setListBtnStatus] = React.useState("occDate");

  const clickBtn = (btn) => {
    setListBtnStatus(btn);
    setOrderBy(btn);
  };
  return (
    <div className="occ-list-selectors-container">
      <div
        onClick={() => {
          clickBtn("occName");
        }}
        className={
          listBtnStatus === "occName"
            ? "occ-list-btn-container occ-list-btn-container-active"
            : "occ-list-btn-container"
        }
      >
        <h6>Occasion Name</h6>
      </div>
      <div
        onClick={() => {
          clickBtn("occasion");
        }}
        className={
          listBtnStatus === "occasion"
            ? "occ-list-btn-container occ-list-btn-container-active"
            : "occ-list-btn-container"
        }
      >
        <h6>Occasion</h6>
      </div>
      <div
        onClick={() => {
          clickBtn("occDate");
        }}
        className={
          listBtnStatus === "occDate"
            ? "occ-list-btn-container occ-list-btn-container-active"
            : "occ-list-btn-container"
        }
      >
        <h6>Occasion Date</h6>
      </div>
      <div
        onClick={() => {
          clickBtn("occGift");
        }}
        className={
          listBtnStatus === "occGift"
            ? "occ-list-btn-container occ-list-btn-container-active"
            : "occ-list-btn-container"
        }
      >
        <h6>Occasion Status</h6>
      </div>
    </div>
  );
}

export default OccasionListBtns;
