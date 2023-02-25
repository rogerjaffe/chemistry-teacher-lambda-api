const middleware = require("../../common/middleware");
const getTeacher = require("../../common/getTeacher");
const savePasswordResetConfirmationCode = require("./savePasswordResetConfirmationCode");
const sendEmail = require("./sendEmail");
const dynamoDbTransaction = require("../../common/dynamoDbTransaction");

/**
 * Send a password reset email to the passed email address if the account exists
 * Input:
 *  email
 *
 * @param event
 * @returns {Promise<*|(function(*=): (*))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { email, protocol, host } = event;
  try {
    const teacher = await getTeacher(email);
    if (!teacher) {
      return { error: true, type: "TeacherNotFoundError" };
    }
    const { confirmationCode, transaction } =
      await savePasswordResetConfirmationCode(email);
    dynamoDbTransaction(transaction);
    sendEmail(email, protocol, host, confirmationCode);
    return { error: false };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
