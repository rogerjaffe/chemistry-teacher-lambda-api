const omit = require("ramda/src/omit");

/**
 * Retrieve the student list from the teacher account
 * @param studentListJSON
 * @returns {Promise<*[]|*>}
 */
module.exports = (studentListJSON) => {
  try {
    const _studentList = JSON.parse(studentListJSON);
    const studentList = _studentList.map((item) =>
      omit(["passwordHash", "salt"], item)
    );
    return studentList;
  } catch (e) {
    return [];
  }
};
