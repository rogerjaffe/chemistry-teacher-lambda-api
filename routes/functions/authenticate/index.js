const middleware = require("../../common/middleware");
const getTeacher = require("../../common/getTeacher");
const isTeacherExpired = require("../../common/isTimeExpired");
const authPassword = require("../../common/authPassword");
const generateJwt = require("../../common/generateJwt");
const omit = require("ramda/src/omit");

/**
 * Authenticate an email / password login attempt
 * Input:
 *  email
 *  password
 *
 * @param event: {email:string, password: string}
 * @returns {Promise<*|(function(*=): ({error: boolean, jwt: string, teacher: {
 *   email: (string),
 *   accountExpiration: (number),
 *   passwordHash: (string),
 *   school: (string),
 *   accountDeletion: (number),
 *   questionFilter: (string),
 *   salt: (string),
 *   emailConfirmed: (boolean),
 *   lastName: (string),
 *   firstName: (string),
 *   studentListJSON: (string)
 * }))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { email, password } = event;
  try {
    // Get teacher information from DB
    const teacher = await getTeacher(email);

    // Verify teacher account is not expired and email has been confirmed
    if (isTeacherExpired(teacher.accountExpiration)) {
      return { error: true, type: "AccountExpiredError" };
    }
    if (!teacher.emailConfirmed) {
      return { error: true, type: "EmailNotConfirmedError" };
    }

    // Authenticate password
    if (!(await authPassword(password, teacher.passwordHash, teacher.salt))) {
      return { error: true, type: "AuthenticationFailedError" };
    }

    // Generate a JWT and remove passwordHash and salt from teacher information
    // then return!
    const jwt = await generateJwt(teacher);
    const tInfo = omit(["passwordHash", "salt"], teacher);
    return { error: false, jwt, teacher: tInfo };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
