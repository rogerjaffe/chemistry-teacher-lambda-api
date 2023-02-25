const sha512 = require("crypto-js/sha512");
const getSecrets = require("../helpers/getSecrets");

/**
 * Authenticate the provided password
 *
 * @param password: (string)
 * @param passwordHash: (string)
 * @param salt: (string)
 * @returns {Promise<boolean>}
 */
module.exports = async (password, passwordHash, salt) => {
  let { PEPPER } = await getSecrets();
  return sha512(salt + password + PEPPER).toString() === passwordHash;
};
