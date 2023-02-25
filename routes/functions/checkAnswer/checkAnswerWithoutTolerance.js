/**
 * True or false whether the parameters match exactly
 *
 * @param answerKey
 * @param student
 * @returns {boolean}
 */
module.exports = (answerKey, student) => {
  if (typeof answerKey === "string") {
    answerKey = answerKey.replace("/d/g", "");
  }
  if (typeof student === "string") {
    student = student.replace("/d/g", "");
  }
  return parseFloat(answerKey) === parseFloat(student);
};
