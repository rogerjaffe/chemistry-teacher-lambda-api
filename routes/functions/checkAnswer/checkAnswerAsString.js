/**
 * True or false whether the strings match
 *
 * @param answerKey
 * @param student
 * @returns {boolean}
 */
module.exports = (answerKey, student) => {
  const a = answerKey.trim().toLowerCase().replace(" ", "");
  const s = student.trim().toLowerCase().replace(" ", "");
  return a === s;
};
