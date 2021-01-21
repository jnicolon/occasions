import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import useGetScheduledOccasions from "../../hooks/useGetScheduledOccasions";
import useGetCart from "../../hooks/useGetCart";

function DeleteBtn({ occasionId }) {
  const [modalStatus, setModalStatus] = useState(false);
  const firestore = useFirestore();
  const userId = useSelector((state) => state.firebase.auth.uid);
  const scheduledOccasions = useGetScheduledOccasions(userId);
  const currentCart = useGetCart();

  const toggleModal = (status) => {
    setModalStatus(status);
  };

  const deleteOccasion = () => {
    const filteredScheduled = scheduledOccasions.filter(
      (sOcc) => sOcc.currentOccasion.occasionId !== occasionId
    );

    const filteredCart = currentCart.filter(
      (item) => item.currentOccasion.occasionId !== occasionId
    );

    firestore
      .collection("cart")
      .doc(userId)
      .update({ cart: [...filteredCart] });

    firestore
      .collection("scheduledOccasions")
      .doc(userId)
      .set({ scheduledOccasionsInfo: filteredScheduled })
      .catch((err) => console.log(err.message));

    firestore
      .collection("occasions")
      .doc(userId)
      .collection("userOccasions")
      .doc(occasionId)
      .delete()
      .then(toggleModal(false))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="occasion-page-delete-btn-container">
        <p
          onClick={() => toggleModal(true)}
          className="occasion-page-delete-btn"
        >
          delete occasion
        </p>
      </div>
      <ConfirmationModal
        modalStatus={modalStatus}
        yesFunction={deleteOccasion}
        noFunction={toggleModal}
      />
    </>
  );
}

export default DeleteBtn;
