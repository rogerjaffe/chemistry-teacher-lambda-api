const middleware = require("../../common/middleware");
const validateJwt = require("../../common/validateJwt");
const getTeacher = require("../../common/getTeacher");
const updateTeacherQuestionFilter = require("./updateTeacherQuestionFilter.js");
const generateJwt = require("../../common/generateJwt");

const pick = require("ramda/src/pick");

/**
 * Update the question filter for a teacher
 * Input:
 *  jwt
 *  newQuestionFilter: new question filter string i.e. '1,3,5,7,9'
 *
 * @param event
 * @returns {Promise<*|(function(*=): (*))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { jwt: authJwt, newQuestionFilter } = event;
  try {
    const { payload } = await validateJwt(authJwt);
    await updateTeacherQuestionFilter(payload.email, newQuestionFilter);
    const teacher = await getTeacher(payload.email);
    const newJwt = await generateJwt(teacher);
    return { error: false, jwt: newJwt };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
