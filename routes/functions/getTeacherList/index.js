const middleware = require("../../common/middleware");
const getTeacherList = require("./getTeacherList");

/**
 * Gets a list of teacher names, schools, emails
 * Input:
 *  None
 *
 * @param event
 * @returns {Promise<*|(function(*=): (*))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  try {
    const teacherList = await getTeacherList();
    return { error: false, teacherList };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
