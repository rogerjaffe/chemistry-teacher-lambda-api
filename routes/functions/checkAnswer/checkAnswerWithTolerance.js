/**
 * True or False depending on if the answer is within tolerance
 *
 * @param answerKey
 * @param student
 * @param tolerance
 * @returns {boolean}
 */
module.exports = (answerKey, student, tolerance) => {
  if (typeof answerKey === "string") {
    answerKey = answerKey.replace(/\s/g, "");
  }
  if (typeof student === "string") {
    student = student.replace(/\s/g, "");
  }
  const theAnswer = parseFloat(answerKey);
  const theGuess = parseFloat(student);
  const low = theAnswer * (1 - tolerance);
  const high = theAnswer * (1 + tolerance);
  return low <= theGuess && theGuess <= high;
};
