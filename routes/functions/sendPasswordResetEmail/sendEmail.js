const sendEmail = require("../../helpers/sendEmail");
const C = require("../../constants");

/**
 * Sends a password reset email to the teacher email address if present
 *
 * @param email
 * @param protocol
 * @param host
 * @param confirmationCode
 * @returns {Promise<{}|*>}
 */
module.exports = async (email, protocol, host, confirmationCode) => {
  const url = protocol + "//" + host + "/reset-password/" + confirmationCode;
  const emailParams = {
    email: email,
    bcc: C.ADMIN_EMAIL,
    subject: "Password reset code for your chemistry-practice.com account",
    text:
      "Go to this URL to change your password.  This link is valid for 10 minutes.\n" +
      url,
    replyTo: C.REPLY_TO_EMAIL,
  };
  try {
    await sendEmail(emailParams);
    return null;
  } catch (e) {
    throw e;
  }
};
