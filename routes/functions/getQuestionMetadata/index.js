const middleware = require("../../common/middleware");
const questionMetadata = require("../../questionMetadata");

/**
 * Get the question metadata
 * @param event
 * @returns {Promise<{error: boolean, questionMetadata: [{route: string, text: string, seq: number}, {route: string, text: string, seq: number}, {route: string, text: string, seq: number}, {route: string, text: string, seq: number}, {route: string, text: string, seq: number}, null, null, null, null, null, null, null, null, null, null, null, null]}>}
 */
module.exports = async (event) => {
  event = middleware(event);
  questionMetadata.shift();
  return { error: false, questionMetadata };
};
