const middleware = require("../../common/middleware");
const validateJwt = require("../../common/validateJwt");
const getAnswerLog = require("./getAnswerLog");

/**
 * Gets the answer log for this teacher
 * Input:
 *  jwt
 *
 * Workflow:
 *    middleware: Function middleware
 *
 *    validateJwt: Validate JWT
 *      Error: TokenExpiredError, JsonWebTokenError
 *
 *    getAnswerLog: Get answer logs
 *      Output: Add {logs}
 *
 * @param event
 * @returns {Promise<*|(function(*=): (*))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { jwt } = event;
  try {
    const { payload } = await validateJwt(jwt);
    const answerLog = await getAnswerLog(payload.email);
    return { error: false, answerLog };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
