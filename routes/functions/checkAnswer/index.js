const middleware = require("../../common/middleware");
const getAnswerFromToken = require("./getAnswerFromToken");
const deleteAnswerFromToken = require("./deleteAnswerFromToken");
const checkAnswers = require("./checkAnswers");
const all = require("ramda/src/all");

/**
 * Checks the answer provided by the student against what's been saved in
 * the DB when the question was retrieved
 *
 * Inputs
 *   token: answer token
 *   studentAnswerPayload: array of answers specific to the question
 *
 * @param event {object} Shape looks like {
 *   token: DB token
 *   studentAnswerPayload: JSON encoded string of an array with student answer(s)
 * }
 * @returns {Promise<*|(function(*=): (*))>}
 *
 */
module.exports = async (event) => {
  event = middleware(event);
  const { token, studentAnswerPayload } = event;
  try {
    const answerPayload = await getAnswerFromToken(token);
    if (!answerPayload) {
      return { error: true, type: "QuestionExpiredError" };
    }
    const isCorrectArr = checkAnswers(answerPayload, studentAnswerPayload);
    const isCorrect = all((it) => it, isCorrectArr);
    if (isCorrect) {
      await deleteAnswerFromToken(token);
    }
    return { error: false, isCorrect };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
