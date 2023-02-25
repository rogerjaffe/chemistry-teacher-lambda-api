const questionMetadata = require("../../questionMetadata");

/**
 *
 *
 * @param event
 * @returns {Promise<*&{expiration: string, answerJSON: string, token: string}>}
 */
module.exports = async (event) => {
  return {
    ...event,
    questionMetadata,
  };
};
