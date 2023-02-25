const middleware = require("../../common/middleware");
const getTeacher = require("../../common/getTeacher");
const changePassword = require("./changePassword");
const authPassword = require("../../common/authPassword");
const hashPassword = require("../../common/hashPassword");
const dynamoDbTransaction = require("../../common/dynamoDbTransaction");

/**
 * Change the password
 * Input:
 *  email
 *  password
 *  newPassword
 *
 * @param event
 * @returns {Promise<*|(function(*=): (*))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { email, password, newPassword } = event;
  try {
    const teacher = await getTeacher(email);
    if (!(await authPassword(password, teacher.passwordHash, teacher.salt))) {
      return { error: true, type: "AuthenticationFailedError" };
    }
    const { salt, passwordHash } = await hashPassword(newPassword);
    const transaction = await changePassword(email, salt, passwordHash);
    await dynamoDbTransaction(transaction);
    return { error: false };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
