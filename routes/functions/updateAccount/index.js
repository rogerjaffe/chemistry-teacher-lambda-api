const middleware = require("../../common/middleware");
const hashPassword = require("../../common/hashPassword");
const validateJwt = require("../../common/validateJwt");
const updateTeacher = require("../../common/updateTeacher");
const dynamoDbTransaction = require("../../common/dynamoDbTransaction");
const getTeacher = require("../../common/getTeacher");
const generateJwt = require("../../common/generateJwt");

const pick = require("ramda/src/pick");

/**
 * Update an existing teacher account
 * Input:
 *  jwt
 *  password (if provided)
 *  school
 *  lastName
 *  firstName
 *
 * @param event
 * @returns {Promise<*|(function(*=): (*))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { jwt, password, school, lastName, firstName } = event;
  try {
    const { payload } = await validateJwt(jwt);
    let passwordHash = null,
      salt = null;
    if (password && password.length > 0) {
      pwdObj = await hashPassword(password);
      passwordHash = pwdObj.passwordHash;
      salt = pwdObj.salt;
    }
    const transaction = updateTeacher({
      email: payload.email,
      passwordHash,
      salt,
      school,
      lastName,
      firstName,
    });
    await dynamoDbTransaction(transaction);
    return { error: false };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
