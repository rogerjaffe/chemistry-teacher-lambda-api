const middleware = require("../../common/middleware");
const getTeacher = require("../../common/getTeacher");
const validateJwt = require("../../common/validateJwt");
const removeStudent = require("./removeStudent");
const updateTeacher = require("../../common/updateTeacher");
const dynamoDbTransaction = require("../../common/dynamoDbTransaction");

/**
 * Delete the student
 * Input:
 *  jwt
 *  studentId
 *
 * @param event
 * @returns {Promise<*|(function(*=): (*))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { jwt, studentId } = event;
  try {
    const { payload } = await validateJwt(jwt);
    const teacher = await getTeacher(payload.email);
    teacher.studentListJSON = removeStudent(studentId, teacher.studentListJSON);
    const transaction = updateTeacher(teacher);
    await dynamoDbTransaction(transaction);
    return { error: false };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
