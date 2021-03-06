const emailTemplate = (
  occasion,
  userFirtName,
  userLastName,
  cardUrl,
  cardName,
  occasionMessage
) => {
  return `<html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Occasions email</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin: 0; padding: 0">
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
    >
      <tr>
        <td>
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="600"
            style="border-collapse: collapse"
          >
            <tr>
              <td
                align="center"
                style="padding: 10px 0 10px 0; border-bottom: 3px solid #00cccc"
              >
                <h3
                  style="
                    margin: 0px;
                    font-size: 50px;
                    color: #00cccc;
                    font-family: Arial, Helvetica, sans-serif;
                  "
                >
                  Occasions
                </h3>
              </td>
            </tr>
            <tr>
              <td bgcolor="#ffffff" style="padding: 20px 30px 40px 30px">
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="border-collapse: collapse"
                >
                  <tr>
                    <td align="center">
                      <h1 align="center"
                        style="
                          margin: 0px;
                          font-size: 50px;
                          color: black;
                          font-family: Arial, Helvetica, sans-serif;
                        "
                      >
                        Happy ${occasion}!
                      </h1>
                      <h4 align="center"
                        style="
                          margin-top: 5px;
                          font-size: 25px;
                          color: black;
                          font-family: Arial, Helvetica, sans-serif;
                        "
                      >
                        From ${userFirtName} ${userLastName}
                      </h4>
                      <h4 align="center"
                        style="
                          font-size: 13px;
                          color: gray;
                          font-family: Arial, Helvetica, sans-serif;
                        "
                      >
                        This card was picked just for you...
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">
                      <img
                        src="${cardUrl}"
                        alt="${cardName}"
                        width="300"
                        style="box-shadow: 2px 2px 5px 2px grey; display: block"
                      />
                    </td>
                  </tr>
                  ${
                    occasionMessage.trim().length < 1
                      ? ``
                      : `<tr>
                  <td align="center">
                    <h4
                      style="
                        font-size: 13px;
                        color: gray;
                        font-family: Arial, Helvetica, sans-serif;
                        margin-top: 20px;
                      "
                    >
                      And he sent you this message:
                    </h4>
                    <h4
                      style="
                        font-size: 13px;
                        color: black;
                        font-family: Arial, Helvetica, sans-serif;
                        margin-top: 20px;
                      "
                    >
                      ${occasionMessage}
                    </h4>
                  </td>
                </tr>`
                  }
                </table>
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style="
                  padding: 20px 10px 20px 10px;
                  border-top: 3px solid #00cccc;
                "
              >
                <p
                  style="
                    margin: 0px;
                    font-size: 13px;
                    color: #00cccc;
                    font-family: Arial, Helvetica, sans-serif;
                  "
                >
                  Schedule your own card at
                </p>
                <p
                  style="
                    margin: 0px;
                    font-size: 13px;
                    color: #00cccc;
                    font-family: Arial, Helvetica, sans-serif;
                  "
                >
                  occasions.com
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};

exports.emailTemplate = emailTemplate;
