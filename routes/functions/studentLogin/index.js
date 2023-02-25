const middleware = require("../../common/middleware");
const getTeacher = require("../../common/getTeacher");
// const isTeacherExpired = require("../../common/isTimeExpired");
// const authPassword = require("../../common/authPassword");
// const omit = require("ramda/src/omit");
const sha512 = require("crypto-js/sha512");
const sign = require("../../helpers/jwt/sign");
const C = require("../../constants");
const ChemistryError = require("../../helpers/ChemistryError");

const generateJwt = async ({
  studentId,
  period,
  lastName,
  firstName,
  className,
}) => {
  const payload = {
    studentId,
    period,
    lastName,
    firstName,
    className,
  };
  let jwt;
  try {
    jwt = await sign(payload, C.TOKEN_EXPIRY);
    return jwt;
  } catch (e) {
    throw new ChemistryError(e.name);
  }
};

/**
 * Authenticate an studentId / password login attempt
 * Input:
 *  email:      Teacher email
 *  studentId
 *  password
 *
 * @param event: {email:string, password: string}
 * @returns {Promise<*|(function(*=): ({error: boolean, jwt: string}))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { email, studentId, password } = event;
  try {
    // Get teacher information from DB
    const teacher = await getTeacher(email);
    const studentList = JSON.parse(teacher.studentListJSON);
    const student = studentList.find((s) => s.studentId === studentId);
    if (!student) {
      return { error: true, type: "StudentNotFoundError" };
    }
    const hash = sha512(student.salt + password + C.PEPPER).toString();
    if (hash !== student.passwordHash) {
      return { error: true, type: "AuthenticationError" };
    } else {
      const jwt = await generateJwt(student);
      return { error: false, jwt };
    }
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
