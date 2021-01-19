const handleClickCartPage = async (currentCart, userId, firestore) => {
  //Change gift status of occasions to true
  let giftOccasions = [];
  currentCart.forEach((element) => {
    giftOccasions.push(element.currentOccasion.occasionId);
  });

  giftOccasions.forEach((element) => {
    firestore
      .collection("occasions")
      .doc(userId)
      .collection("userOccasions")
      .doc(element)
      .update({
        scheduledOccasionId: element,
        occGift: true,
      });
  });

  //Empty the cart after clicking
  firestore.collection("cart").doc(userId).set({
    cart: [],
  });

  //update the scheduled occasions
  let tempScheduledOccasions = await firestore
    .collection("scheduledOccasions")
    .doc(userId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        return [];
      }
    });

  let currentUserInfo = await firestore
    .collection("users")
    .doc(userId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return { currentUserInfo: doc.data() };
      } else return [];
    });

  let oldScheduledOccasions;
  if (tempScheduledOccasions.scheduledOccasionsInfo) {
    oldScheduledOccasions = tempScheduledOccasions.scheduledOccasionsInfo;
  } else {
    oldScheduledOccasions = [];
  }

  let newScheduledOccasions = [...oldScheduledOccasions, ...currentCart];
  let finalScheduledOccasions = [];

  newScheduledOccasions.forEach((occ) => {
    finalScheduledOccasions.push({ ...occ, ...currentUserInfo });
  });

  firestore
    .collection("scheduledOccasions")
    .doc(userId)
    .set({ scheduledOccasionsInfo: finalScheduledOccasions })
    .then(console.log("scheduled occasions set!"));
};

export default handleClickCartPage;
