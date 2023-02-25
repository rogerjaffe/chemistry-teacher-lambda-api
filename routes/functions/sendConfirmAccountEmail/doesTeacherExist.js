const getTeacher = require('../../helpers/getTeacher');
const ChemistryError = require('../../helpers/ChemistryError');

/**
 * Does the teacher exist in the DB
 *
 * @param params
 * @returns {Promise<*>}
 */
module.exports = async params => {
  let teacher;
  try {
    teacher = await getTeacher(params.email);
  } catch(e) {
    throw e;
  }
  if (teacher.item.emailConfirmed) {
    throw new ChemistryError('EmailAlreadyConfirmedError');
  } else {
    return params;
  }
}

