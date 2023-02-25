/**
 * Saves the password reset confirmation code to the DB
 *
 * @param email
 * @returns {Promise<{}|*>}
 */
module.exports = async (email) => {
  const C = require("../../constants");
  const TABLE_NAME = "passwordReset";

  const CONFIRMATION_CODE_LENGTH = 15;
  const CHARSET =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz0123456789";
  const { customAlphabet } = require("nanoid");
  const nanoid = customAlphabet(CHARSET, CONFIRMATION_CODE_LENGTH);
  const confirmationCode = nanoid();

  const confirmationExpiration =
    Math.floor(new Date().getTime() / 1000) + C.PASSWORD_RESET_EXPIRATION * 60;
  const dbParams = {
    Put: {
      TableName: TABLE_NAME,
      Item: {
        resetCode: {
          S: confirmationCode,
        },
        email: {
          S: email,
        },
        expiration: {
          N: confirmationExpiration + "",
        },
      },
    },
  };
  return { confirmationCode, transaction: [dbParams] };
};
