const { nanoid } = require("nanoid");
const HOURS = 6;
const EXPIRE_DELTA = HOURS * 3600;

/**
 * Generate the token expiration and answer payload
 *
 * @param event
 * @returns {Promise<*&{expiration: string, answerJSON: string, token: string}>}
 */
module.exports = (answerPayload) => {
  // console.log(event.answerPayload);
  return {
    token: nanoid(),
    expiration: Math.trunc(new Date().getTime() / 1000) + EXPIRE_DELTA + "",
    answerJSON: JSON.stringify(answerPayload),
  };
};
