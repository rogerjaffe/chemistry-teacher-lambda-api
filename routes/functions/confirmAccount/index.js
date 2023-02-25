const middleware = require("../../common/middleware");
const getConfirmationData = require("./getConfirmationData");
const confirmAccount = require("./confirmAccount");
const deleteConfirmCode = require("./deleteConfirmCode");
const dynamoDbTransaction = require("../../common/dynamoDbTransaction");

/**
 * Confirm a teacher email
 * Input:
 *  code: Confirmation code
 *
 * @param event
 * @returns {Promise<*|(function(*=): (*))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { confirmationCode } = event;
  try {
    const confirmationData = await getConfirmationData(confirmationCode);
    const transaction1 = confirmAccount(confirmationData.email);
    const transaction2 = deleteConfirmCode(confirmationCode);
    await dynamoDbTransaction(transaction1.concat(transaction2));
    return { error: false };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
