const middleware = require("../../common/middleware");
const validateJwt = require("../../common/validateJwt");
const getTeacher = require("../../common/getTeacher");
const mergeStudentList = require("./mergeStudentList");
const updateTeacher = require("../../common/updateTeacher");
const dynamoDbTransaction = require("../../common/dynamoDbTransaction");
const { nanoid } = require("nanoid");
const hashPassword = require("../../common/hashPassword");

/**
 * Create a new teacher account
 * Input:
 *   jwt:
 *   newStudentListJSON:
 *   shouldMerge: True if this data is merged with the old (default and takes priority over shouldReplace)
 *   shouldReplace: True if this data should replace the old (replace if null existing studentList)
 *
 * @param event
 * @returns {Promise<*|(function(*=): (*))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { jwt, newStudentListJSON, shouldMerge, shouldReplace } = event;
  try {
    const { payload } = await validateJwt(jwt);
    const newStudentList = JSON.parse(newStudentListJSON);
    for (let i = 0; i < newStudentList.length; i++) {
      const s = newStudentList[i];
      const { salt, passwordHash } = await hashPassword(s.password);
      s.salt = salt;
      s.passwordHash = passwordHash;
      delete s.password;
    }
    console.log(newStudentList);
    const teacher = await getTeacher(payload.email);
    const studentListJSON = mergeStudentList(
      teacher.studentListJSON ?? "[]",
      JSON.stringify(newStudentList),
      shouldMerge,
      shouldReplace
    );
    const transaction = updateTeacher({
      email: teacher.email,
      studentListJSON,
    });
    dynamoDbTransaction(transaction);
    return { error: false };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
