/**
 * Generate a SHA512 hash of params.password using params.salt and params.pepper
 * @param params
 * @returns {{}}
 */
module.exports = params => {
  if (params.error) return {...params};
  const sha512 = require('crypto-js/sha512');
  const hash = sha512(params.salt+params.password+params.pepper);
  return hash.toString();
}
