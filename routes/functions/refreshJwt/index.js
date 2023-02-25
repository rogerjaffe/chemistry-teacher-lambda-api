const middleware = require("../../common/middleware");
const getTeacher = require("../../common/getTeacher");
const generateJwt = require("../../common/generateJwt");
const validateJwt = require("../../common/validateJwt");

/**
 * Refresh the JWT
 * Input:
 *  jwt
 *
 * @param event: {jwt: string}
 * @returns {Promise<*|(function(*=): ({jwt: string}))>}
 */
module.exports = async (event) => {
  event = middleware(event);
  const { jwt } = event;
  try {
    const { payload } = await validateJwt(jwt);
    const newJwt = await generateJwt(payload);
    return { error: false, jwt: newJwt };
  } catch (e) {
    return { error: true, type: e.message, stack: e.stack };
  }
};
