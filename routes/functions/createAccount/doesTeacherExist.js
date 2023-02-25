const getTeacher = require('../../helpers/getTeacher');
const ChemistryError = require('../../helpers/ChemistryError');

/**
 * Check if the teacher exists already. If so, then throw an error since we're
 * creating a new account
 *
 * @param params
 * @returns {Promise<*>}
 */
module.exports = async params => {
  try {
    await getTeacher(params.email);
  } catch (e) {
    if (e.message === "TeacherNotFoundError") {
      return params;
    }
  }
  throw new ChemistryError('TeacherExistsError');
}

