const questionMetadata = require("../../questionMetadata");
const ChemistryError = require("../../helpers/ChemistryError");
const PATH = "./questions/";

/**
 * Find the function to call to generate the question data
 *
 * @param fcn
 * @returns {Promise<*&{questionPayload, answerPayload}>}
 */
module.exports = (fcn) => {
  const question = questionMetadata.find((q) => q.route === fcn);
  if (!question) {
    throw new ChemistryError("FunctionFileLookupError");
  }
  try {
    const fname = PATH + question.file;
    const questionFcn = require(fname);
    return questionFcn();
  } catch (e) {
    throw e;
  }
};
