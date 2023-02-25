const middleware = require("../../common/middleware");
const validateTeacherInfo = require("./validateTeacherInfo");
const getTeacher = require("../../common/getTeacher");
const hashPassword = require("../../common/hashPassword");
const saveTeacherToDB = require("./saveTeacherToDB");
const saveConfirmationCode = require("../../common/saveConfirmationCode");
const sendEmail = require("../../common/sendEmail");
const dynamoDbTransaction = require("../../common/dynamoDbTransaction");
const { EXPIRATION_TIME, INITIAL_DELETION_TIME } = require("../../constants");

/**
 * Create a new teacher account
 * Input:
 *  email
 *  password
 *  school
 *  lastName
 *  firstName
 *  host (www.chemistry-practice.com)
 *  protocol (https:)
 *
 * @param event
 * @returns {Promise<*|(function(*=): (*))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  try {
    // Verify a correct email
    if (!validateTeacherInfo(event.email)) {
      return { error: true, type: "InvalidEmailError" };
    }

    // Verify this is a new teacher email
    const teacher = await getTeacher(event.email);
    if (teacher) {
      return { error: true, type: "TeacherExistsError" };
    }

    // Hash password, get expiration and deletion dates
    const { salt, passwordHash } = await hashPassword(event.password);
    const accountExpiration =
      Math.floor(new Date().getTime() / 1000) + EXPIRATION_TIME * 24 * 60 * 60;
    const accountDeletion =
      Math.floor(new Date().getTime() / 1000) +
      INITIAL_DELETION_TIME * 24 * 60 * 60;

    // Save confirmation code and teacher info in DB
    const { code, transaction: transaction1 } = await saveConfirmationCode(
      event.email
    );
    const transaction2 = await saveTeacherToDB({
      ...event,
      salt,
      passwordHash,
      accountExpiration,
      accountDeletion,
      questionFilter: "",
    });
    await dynamoDbTransaction(transaction1.concat(transaction2));

    // Send notification email
    await sendEmail(event.email, code, event.host, event.protocol);
    return { error: false };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
