import { useState, useEffect } from "react";

function useGetUnscheduledOccasions(userId, occasionId, scheduledOccasions) {
  const [unscheduledOccasions, setUnscheduledOccasions] = useState([]);
  const [currentScheduledOccasion, setCurrentScheduledOccasion] = useState({});

  useEffect(() => {
    let tempUnscheduledOccasions = [];
    let tempSingleOcc = {};
    scheduledOccasions.forEach((sOcc) => {
      console.log(sOcc);
      if (occasionId === sOcc.currentOccasion.occasionId) {
        tempSingleOcc = sOcc;
      } else {
        tempUnscheduledOccasions.push(sOcc);
      }
    });
    setUnscheduledOccasions(tempUnscheduledOccasions);
    setCurrentScheduledOccasion(tempSingleOcc);
  }, [scheduledOccasions, occasionId]);

  console.log(unscheduledOccasions, currentScheduledOccasion);

  return [unscheduledOccasions, currentScheduledOccasion];
}

export default useGetUnscheduledOccasions;
