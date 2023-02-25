const r = require('random');

/**
 * Question AWS Lambda function
 *
 * The function receives no parameters and generates question and answer payloads used
 * to display the question.
 *
 * Response object shape:
 * {
 *   questionPayload: {}
 *   answerPayload: {}
 * }
 *
 * The response shape has the two payload objects.  The UI component uses the questionPayload object to display the question.
 * AWS saves the answerPayload object with a random string token.  The UI must create the answerPayload from the user with the same shape as the Lambda function so it can be validated.
 *
 * Note that the actual API call performs additional transformations on the data.  See the Project Readme for more details.
 *
 * Test the function locally in Node with index.test.js
 */

module.exports = (event) => {

  try {
    // Processing goes here

    // Create response structure
    const response = {
      questionPayload: {p1: 'question to be displayed'},
      answerPayload: {answer: "this is the answer"}
    };
    return response;
  } catch(err) {
    return {error: true, message: err.message, stack: err.stack}
  }

};
