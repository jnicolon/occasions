const functions = require("firebase-functions");
const { getTodayOccasions } = require("./scheduledOcc/occArrayFunctions");
const { emailTemplate } = require("./scheduledOcc/emailTemplate");
const { sendMail } = require("./scheduledOcc/sendMail");

exports.sendScheduledMail = functions.https.onRequest(async (req, res) => {
  const todayOccasionsFull = await getTodayOccasions();
  const msjs = [];

  //We use a map function and promise.all because forEach in await
  //Doesn't wait for the whole function before moving on.
  await Promise.all(
    todayOccasionsFull.map(async (occ) => {
      const occasion = occ.occasion.currentOccasion.occasion;
      const userFirstName = occ.occasion.currentUserInfo.firstName;
      const userLastName = occ.occasion.currentUserInfo.lastName;
      const cardUrl = occ.occasion.card.url;
      const cardName = occ.occasion.card.cardName;
      const toEmail = occ.occasion.currentOccasion.occEmail;

      const email = emailTemplate(
        occasion,
        userFirstName,
        userLastName,
        cardUrl,
        cardName
      );
      const msj = await sendMail(toEmail, email).catch((err) =>
        console.log(err)
      );
      msjs.push(msj);
    })
  );

  res.json(msjs);
});
