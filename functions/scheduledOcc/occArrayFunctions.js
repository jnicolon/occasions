const { db } = require("../congif");

const separateOccasionsToArray = (data) => {
  const occasionsInArray1 = [];
  data.forEach((user) => {
    occasionsInArray1.push(...user.scheduledOccasionsInfo);
  });
  return occasionsInArray1;
};

const separateTodayOccasionsToArray = (occasions) => {
  const today = new Date(2021, 1, 1);
  const todayOccasions = [];
  occasions.forEach((occasion) => {
    const occasionTime = occasion.currentOccasion.occDateString;
    const occasionDate = new Date(occasionTime);
    if (today.toDateString() === occasionDate.toDateString()) {
      todayOccasions.push({ occasion });
    } else return;
  });
  return todayOccasions;
};

const getTodayOccasions = async () => {
  const doc = await db.collection("scheduledOccasions").get();
  const tempScheduledOccasions = [];
  //we get all the schedules occasions from all users.
  doc.forEach((doc) => {
    tempScheduledOccasions.push(doc.data());
  });
  //   //We separate them form the users into one array
  const occasionsArray = separateOccasionsToArray(tempScheduledOccasions);
  //   //We filter the ones that match today's date
  const todayOccasions = separateTodayOccasionsToArray(occasionsArray);

  return todayOccasions;
};

exports.getTodayOccasions = getTodayOccasions;
