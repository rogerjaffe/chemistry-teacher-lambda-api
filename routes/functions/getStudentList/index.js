const middleware = require("../../common/middleware");
const getTeacher = require("../../common/getTeacher");
const validateJwt = require("../../common/validateJwt");
const processStudentList = require("./processStudentList");

/**
 * Get the student list
 * Input:
 *  jwt
 *
 * @param event
 * @returns {Promise<{jwt: string, studentList: Promise<*[]|*>, error: boolean}|{stack, error}>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { jwt } = event;
  try {
    const { payload } = await validateJwt(jwt);
    const teacher = await getTeacher(payload.email);
    const studentList = processStudentList(teacher.studentListJSON);
    return { error: false, studentList };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
