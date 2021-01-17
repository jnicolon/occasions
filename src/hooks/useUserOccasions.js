import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";

const useUserOccasions = (orderBy) => {
  const firestore = useFirestore();
  const [userOccasions, setUserOccasions] = useState([]);
  const userId = useSelector((state) => state.firebase.auth.uid);

  useEffect(() => {
    if (userId) {
      firestore
        .collection("occasions")
        .doc(userId)
        .collection("userOccasions")
        .orderBy(orderBy, "asc")
        .get()
        .then((snap) => {
          const tempOcc = [];
          snap.forEach((element) => {
            tempOcc.push({ ...element.data(), occasionId: element.id });
          });
          setUserOccasions(tempOcc);
        });
    }
  }, [userId, firestore, orderBy]);

  return userOccasions;
};

export default useUserOccasions;
