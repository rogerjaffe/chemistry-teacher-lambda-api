const sign = require("../helpers/jwt/sign");
const C = require("../constants");
const ChemistryError = require("../helpers/ChemistryError");

/**
 * Generate a JWT and return the token
 *
 * @param teacher
 * @returns {Promise<{}|{authenticated}|*>}
 */
module.exports = async (teacher) => {
  const payload = {
    email: teacher.email,
    accountExpiration: teacher.accountExpiration,
    accountDeletion: teacher.accountDeletion,
    school: teacher.school,
    emailConfirmed: teacher.emailConfirmed,
    lastName: teacher.lastName,
    firstName: teacher.firstName,
    accountExpired: teacher.accountExpired,
    questionFilter: teacher.questionFilter,
  };
  let jwt;
  try {
    jwt = await sign(payload, C.TOKEN_EXPIRY);
    return jwt;
  } catch (e) {
    throw new ChemistryError(e.name);
  }
};
