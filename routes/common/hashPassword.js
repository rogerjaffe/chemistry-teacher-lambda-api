const { nanoid } = require("nanoid");
const hash = require("../helpers/hash");
const getSecrets = require("../helpers/getSecrets");

/**
 * Generate a salt and hash the password
 *
 * @param password : (string)
 * @param salt?: (string)  generate salt when not provided
 * @returns {Promise<{salt:(string), passwordHash:(string)}>}
 */
module.exports = async (password, salt = nanoid()) => {
  const { PEPPER } = await getSecrets();
  const passwordHash = hash({
    password,
    salt: salt,
    pepper: PEPPER,
  });
  return { salt, passwordHash };
};
