const ChemistryError = require("../../helpers/ChemistryError");

/**
 * Remove the student with params.studentId
 *
 * @param studentId
 * @param studentListJSON
 * @returns {<*>}
 */
module.exports = (studentId, studentListJSON) => {
  let studentList = JSON.parse(studentListJSON);
  let idx = studentList.findIndex((s) => s.studentId === studentId);
  if (idx >= 0) {
    const s1 = studentList.slice(0, idx);
    const s2 = studentList.slice(idx + 1);
    studentList = s1.concat(s2);
  }
  return JSON.stringify(studentList);
};
