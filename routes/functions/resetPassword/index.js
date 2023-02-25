const middleware = require("../../common/middleware");
const getPasswordResetData = require("./getPasswordResetData");
const resetPassword = require("./resetPassword");
const hashPassword = require("../../common/hashPassword");
const deleteResetPasswordCode = require("./deleteResetPasswordCode");
const dynamoDbTransaction = require("../../common/dynamoDbTransaction");

/**
 * Reset a password validated with an emailed reset code
 * Input:
 *  code
 *  password
 *
 * @param event
 * @returns {Promise<*|(function(*=): (*))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { code, password } = event;
  try {
    const { email } = await getPasswordResetData(code);
    const { passwordHash, salt } = await hashPassword(password);
    const transaction1 = resetPassword(email, passwordHash, salt);
    const transaction2 = deleteResetPasswordCode(code);
    await dynamoDbTransaction(transaction1.concat(transaction2));
    return { error: false };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
