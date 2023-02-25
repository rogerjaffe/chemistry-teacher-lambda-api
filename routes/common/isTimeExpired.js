const ChemistryError = require("../helpers/ChemistryError");

/**
 * Check if time has expired
 *
 * @param accountExpiration: (number) UNIX time
 * @returns {boolean}
 * Error: TimeExpiredError
 */
module.exports = (accountExpiration) => {
  const today = Math.floor(new Date().getTime() / 1000);
  return accountExpiration < today;
};
