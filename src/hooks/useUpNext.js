import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import moment from "moment";

const useUpNext = () => {
  const firestore = useFirestore();
  const [upNext, setUpNext] = useState({});
  const userId = useSelector((state) => state.firebase.auth.uid);

  useEffect(() => {
    firestore
      .collection("occasions")
      .doc(userId)
      .collection("userOccasions")
      .orderBy("occDate", "asc")
      .get()
      .then((doc) => {
        const tempOcc = [];
        doc.forEach((element) => {
          tempOcc.push({ ...element.data(), occasionId: element.id });
        });

        //Rercursive function to compare the dates of
        //the occasions with today's date.
        const checkUpNext = (index) => {
          let tempIndex = index;
          let today = new Date();
          let compare;

          if (tempOcc[index]) {
            compare = new Date(
              moment(tempOcc[index].occDate.toDate()).format()
            );
            if (today.getTime() <= compare.getTime()) {
              setUpNext(tempOcc[index]);
              return;
            } else {
              tempIndex++;
              return checkUpNext(tempIndex);
            }
          }
        };
        checkUpNext(0);
      });
  }, [userId, firestore]);

  return upNext;
};

export default useUpNext;
