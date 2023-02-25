const ChemistryError = require('../ChemistryError');

/**
 *
 * @param params
 * @returns {Promise<{}|(*&{name: string, error: boolean, message: string})|*>}
 */
const getSecrets = require('../getSecrets');
const jsonwebtoken = require('jsonwebtoken');

module.exports = async (payload, expiry) => {
  let { JWT_SECRET } = await getSecrets();
  try {
    return jsonwebtoken.sign(
      payload,
      JWT_SECRET,
      {expiresIn: expiry * 60}
    )
  } catch (e) {
    throw new ChemistryError(e.name);
  }
}
