const ChemistryError = require("../../helpers/ChemistryError");

/**
 * Merge / replace student list with new students
 *
 * @param oldStudentListJSON
 * @param newStudentListJSON
 * @param shouldMerge
 * @param shouldReplace
 * @returns {Promise<*>}
 */
module.exports = (
  oldStudentListJSON,
  newStudentListJSON,
  shouldMerge = true,
  shouldReplace = false
) => {
  let studentListJSON = null;
  if (!oldStudentListJSON.length === 0 || (shouldReplace && !shouldMerge)) {
    studentListJSON = newStudentListJSON;
  } else {
    const oldStudentList = JSON.parse(oldStudentListJSON);
    const newStudentList = JSON.parse(newStudentListJSON);
    newStudentList.forEach((newStudent) => {
      let idx = oldStudentList.findIndex(
        (s) => s.studentId === newStudent.studentId
      );
      if (idx < 0) {
        oldStudentList.push(newStudent);
      } else {
        oldStudentList[idx] = { ...oldStudentList[idx], ...newStudent };
      }
    });
    studentListJSON = JSON.stringify(oldStudentList);
  }
  return studentListJSON;
};
