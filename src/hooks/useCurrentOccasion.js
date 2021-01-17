import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";

const useCurrentOccasion = (occasionId) => {
  const firestore = useFirestore();
  const userId = useSelector((state) => state.firebase.auth.uid);
  const [currentOccasion, setCurrentOccasion] = useState({});

  useEffect(() => {
    if (userId) {
      firestore
        .collection("occasions")
        .doc(userId)
        .collection("userOccasions")
        .doc(occasionId)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setCurrentOccasion(doc.data());
          } else {
            console.log("no such document");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [firestore, occasionId, userId]);

  return currentOccasion;
};

export default useCurrentOccasion;
