const middleware = require("../../common/middleware");
const saveConfirmationCode = require("../../common/saveConfirmationCode");
const sendEmail = require("../../common/sendEmail");
const dynamoDbTransaction = require("../../common/dynamoDbTransaction");
const getTeacher = require("../../common/getTeacher");

/**
 * Send a new account confirmation email to the user
 * Input:
 *  email
 *  host       (website URL, retrieved by the client using window.location.host)
 *  protocol   (https:, retrieved by the client using window.location.protocol)
 *
 * @param event
 * @returns {Promise<*|(function(*=): (*))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { email, host, protocol } = event;
  try {
    const teacher = await getTeacher(email);
    if (!teacher) {
      return { error: true, type: "AccountDoesNotExistError" };
    }
    if (teacher.emailConfirmed) {
      return { error: true, type: "EmailAlreadyConfirmedError" };
    }
    const { code, transaction } = await saveConfirmationCode(email);
    await dynamoDbTransaction(transaction);
    await sendEmail(email, code, host, protocol);
    return { error: false };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
