const hash = require('../../helpers/hash');
const getSecrets = require('../../helpers/getSecrets');
const { nanoid } = require('nanoid');
const omit = require('ramda/src/omit');

/**
 * Generate a salt and hash the password
 *
 * @param params
 * @returns {Promise<{}|*>}
 */
module.exports = async params => {
  let { PEPPER } = await getSecrets();
  params.newStudentList = params.newStudentList.map(item => {
    if (item.password.length > 0) {
      item.salt = nanoid();
      item.passwordHash = hash({
        password: item.password,
        salt: item.salt,
        pepper: PEPPER
      })
    }
    item = omit(['password'], item);
    return item;
  })
  return params;
}

