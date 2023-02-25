const jwtVerify = require("../helpers/jwt/verify");
const jwtSign = require("../helpers/jwt/sign");
const C = require("../constants");
const omit = require("ramda/src/omit");
const ChemistryError = require("../helpers/ChemistryError");

/**
 * Validates the JWT and returns the payload if it's valid, otherwise
 * throws an error
 *
 * @param jwt
 * @returns {Promise<{payload: (*), jwt: (string)}>}
 *
 * Errors: TokenExpiredError, JsonWebTokenError
 */
module.exports = async (jwt) => {
  if (!jwt) {
    throw new ChemistryError("JWTNotProvided");
  }
  let jwtData;
  try {
    jwtData = await jwtVerify(jwt);
  } catch (e) {
    throw e;
  }
  const payload = omit(["iat", "exp"], jwtData.decoded.payload);
  return { payload };
};
