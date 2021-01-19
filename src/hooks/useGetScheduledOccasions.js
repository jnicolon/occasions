import { useState, useEffect } from "react";
import { useFirestore } from "react-redux-firebase";

const useGetScheduledOccasions = (userId) => {
  const firestore = useFirestore();
  const [scheduledOccasions, setScheduledOccasions] = useState([]);

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

  return scheduledOccasions;
};

export default useGetScheduledOccasions;
