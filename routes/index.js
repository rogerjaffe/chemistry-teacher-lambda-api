/**
 * Chemistry API entry point
 *   All API function parameters are on the body object unless otherwise noted
 *
 * @param event
 *   {
 *    body: POST parameters
 *    params: {
 *      path {
 *        route: API route variable
 *      },
 *      querystring,
 *      header
 *    },
 *    stageVariables:
 *    context: {
 *      source-ip:
 *    }
 *   }
 * @returns {Promise<{body: string, statusCode: number}>}
 */

const routeToFunctionLookup = {
  "get-question": require("./functions/getQuestion"),
  "check-answer": require("./functions/checkAnswer"),
  "create-account": require("./functions/createAccount"),
  authenticate: require("./functions/authenticate"),
  "change-password": require("./functions/changePassword"),
  "confirm-account": require("./functions/confirmAccount"),
  "get-student-list": require("./functions/getStudentList"),
  "get-teacher-list": require("./functions/getTeacherList"),
  "update-student-list": require("./functions/updateStudentList"),
  "delete-student": require("./functions/deleteStudent"),
  "reset-password": require("./functions/resetPassword"),
  "send-confirm-account-email": require("./functions/sendConfirmAccountEmail"),
  "send-password-reset-email": require("./functions/sendPasswordResetEmail"),
  "save-student-log": require("./functions/saveStudentLog"),
  "update-account": require("./functions/updateAccount"),
  "get-answer-log": require("./functions/getAnswerLog"),
  "get-question-metadata": require("./functions/getQuestionMetadata"),
  "update-question-filter": require("./functions/updateQuestionFilter"),
  "refresh-jwt": require("./functions/refreshJwt"),
  "student-login": require("./functions/studentLogin"),
};

exports.handler = async (event) => {
  const path = event.rawPath.substring(1);
  console.log(path);
  event.params = {
    path: {
      route: path
    }
  }
  const response = await routeToFunctionLookup[event.params.path.route](event);
  response.version = require("./package.json").version;
  return response;
};
