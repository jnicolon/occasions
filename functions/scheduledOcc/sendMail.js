const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

oauth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

const accessToken = oauth2Client.getAccessToken();

async function sendMail(toEmail, email) {
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "nicolonwebdev@gmail.com",
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: '"Occasions" <nicolonwebdev@gmail.com>', // sender address
    to: toEmail, // list of receivers
    subject: "Someone thought of you!", // Subject line
    html: email, // html body
  };

  // send mail with defined transport object
  let info = await smtpTransport.sendMail(mailOptions);

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  const msg = { msg: "Message sent", info: info.messageId };

  return msg;
}

exports.sendMail = sendMail;
