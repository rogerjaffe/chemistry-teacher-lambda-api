const checkAnswerWithTolerance = require("./checkAnswerWithTolerance");
const checkAnswerAsString = require("./checkAnswerAsString");
const checkAnswerWithoutTolerance = require("./checkAnswerWithoutTolerance");
const ChemistryError = require("../../helpers/ChemistryError");

/**
 * Check the answer string for an exact match
 *   studentAnswerPayload: Answers provided by the student
 *   answerPayload: Answers returned from the DB
 *
 * @param studentAnswerPayload
 * @param answerPayload
 * @returns {Promise<{correct}|*>}
 */
module.exports = (answerPayload, studentAnswerPayload) => {
  if (studentAnswerPayload.length !== answerPayload.answerPayload.length) {
    throw new ChemistryError("AnswerPayloadsAreDifferentSizesError");
  }
  let answers = [];
  for (let idx = 0; idx < studentAnswerPayload.length; idx++) {
    answers.push({
      student: studentAnswerPayload[idx],
      answerKey: answerPayload.answerPayload[idx],
    });
  }

  const response = answers.map((answerPair) => {
    switch (answerPair.answerKey.type ?? "number") {
      case "number":
        if (answerPair.answerKey.useTolerance) {
          return checkAnswerWithTolerance(
            answerPair.answerKey.answer,
            answerPair.student,
            answerPair.answerKey.tolerance
          );
        } else {
          return checkAnswerWithoutTolerance(
            answerPair.answerKey.answer,
            answerPair.student
          );
        }
        break;

      case "string":
        return checkAnswerAsString(
          answerPair.answerKey.answer,
          answerPair.student
        );
    }
  });
  return response;
};
