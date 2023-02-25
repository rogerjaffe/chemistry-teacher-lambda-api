const middleware = require("../../common/middleware");
const saveLog = require("./saveLog");
const getTeacher = require("../../common/getTeacher");
const isTeacherExpired = require("../../common/isTimeExpired");
const authStudentPassword = require("./authStudentPassword");

/**
 * Save student question log
 * Input:
 *  email
 *  studentId
 *  password
 *  logs[] array of {timestamp, isCorrect, questionMetadata: {seq, text} }
 *
 * @param event
 * @returns {Promise<*|(function(*=): (*))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { email, studentId, password, logs } = event;
  try {
    const teacher = await getTeacher(email);
    if (!teacher.emailConfirmed) {
      return { error: true, type: "EmailNotConfirmedError" };
    }
    if (isTeacherExpired(teacher.accountExpiration)) {
      return { error: true, type: "AccountExpiredError" };
    }
    const student = await authStudentPassword(
      teacher.studentListJSON,
      studentId,
      password
    );
    if (!student) {
      return { error: true, type: "StudentAuthenticationError" };
    }
    await saveLog(email, studentId, logs);
    return { error: false };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
