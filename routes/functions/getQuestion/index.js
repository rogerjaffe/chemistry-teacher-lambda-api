const middleware = require("../../common/middleware");
const callQuestion = require("./callQuestion");
const generateTokenExpiration = require("./generateTokenExpiration");
const saveAnswerAndToken = require("./saveAnswerAndToken");

/**
 * Get a question from the library (add some spaces for update testing)
 *
 * Input:
 *   fcn: Folder name of the question to retrieve
 *
 * Workflow:
 *    middleware
 *
 *    callQuestion: Call the function that generates the question data
 *      Output: Add {questionPayload, answerPayload}
 *      Error: UnknownQuestionError
 *
 *    generateTokenExpiration: Append a token string and expiration to response
 *      Output: Add {token, expiration, answerJSON}
 *
 *    saveAnswerAndToken: Save answer data and token string in the DB.
 *
 *    Properties returned are {
 *      error, cause, message, questionPayload, token
 *    }
 *
 * @param event
 * @returns {Promise<*|(function(*=): (*))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { fcn } = event;
  try {
    const payload = callQuestion(fcn);
    console.dir(payload, { depth: null, maxArrayLength: null });
    const { questionPayload, answerPayload } = payload;
    const { token, expiration, answerJSON } =
      generateTokenExpiration(answerPayload);
    await saveAnswerAndToken(token, answerJSON, expiration);
    return { error: false, questionPayload, token };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
