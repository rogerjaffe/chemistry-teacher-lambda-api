// const sendEmail = require("../helpers/sendEmail");
const { SendEmailCommand } = require("@aws-sdk/client-ses");
const sesClient = require("../helpers/aws/ses");
const C = require("../constants");

/**
 * Send an email to confirm the account to the teacher
 *
 * @param email: (string)
 * @param confirmationCode: (string)
 * @param host:(string)      Webpage host for confirmation
 * @param protocol:(string)  "https:"
 * @returns {Promise<null>}
 */
module.exports = async (email, confirmationCode, host, protocol) => {
  const url = protocol + "//" + host + "/confirm-account/" + confirmationCode;
  const bcc = C.ADMIN_EMAIL;
  const subject =
    "Confirm your email for your new account at chemistry-practice.com";
  const text =
    "Thank you for signing up at chemistry-practice.com.\n\nBefore you can assign homework problems to your students you must confirm your email.\n\nClick or copy/paste this URL to confirm your email:\n\n" +
    url +
    "\n\nPlease confirm your email within 7 days or your account will be deleted.";
  const replyTo = C.REPLY_TO_EMAIL;

  try {
    const emailParams = {
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Body: {
          Text: { Data: text },
        },
        Subject: { Data: subject },
      },
      Source: replyTo,
    };
    if (bcc) {
      emailParams.Destination.BccAddresses = [bcc];
    }
    await sesClient.send(new SendEmailCommand(emailParams));
    return null;
  } catch (e) {
    throw e;
  }
  return null;
  //
  //
  // try {
  //   await sendEmail(emailParams);
  // } catch (e) {
  //   throw e;
  // }
  // return null;
};
