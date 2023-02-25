const ChemistryError = require('../ChemistryError');

/**
 * See the developer guide with an example at
 * https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/ses-examples-sending-email.html
 * @param params
 * @returns {Promise<{}|(*&{name: string, error: boolean, message: string})|*>}
 */
const getSecrets = require('../getSecrets');
const jsonwebtoken = require('jsonwebtoken');

module.exports = async (token) => {
  let { JWT_SECRET } = await getSecrets();
  try {
    return {decoded: jsonwebtoken.verify(token, JWT_SECRET, {complete: true})};
  } catch (e) {
    throw new ChemistryError(e.name);
    // return {error: true, name: e.name, message: e.message, jwtVerified: false}
  }
}

