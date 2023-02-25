const sha512 = require("crypto-js/sha512");
const ChemistryError = require("../../helpers/ChemistryError");
const getSecrets = require("../../helpers/getSecrets");

/**
 * Authenticate the provided password
 *
 * @param studentListJSON
 * @param studentId
 * @param password
 * @returns {null|object}
 */
module.exports = async (studentListJSON, studentId, password) => {
  let { PEPPER } = await getSecrets();
  const studentList = JSON.parse(studentListJSON);
  const student = studentList.find((s) => s.studentId === studentId);
  if (!student) {
    return null;
  } else {
    const hash = sha512(student.salt + password + PEPPER).toString();
    if (hash === student.passwordHash) {
      return student;
    } else {
      return null;
    }
  }
};
