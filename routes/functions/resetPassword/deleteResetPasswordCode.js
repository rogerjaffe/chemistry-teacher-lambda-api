/**
 * Delete the password reset code from the DB
 *
 * @param code
 * @returns {Promise<*>}
 */
module.exports = (code) => {
  const TABLE_NAME = "passwordReset";
  const dbParams = {
    Delete: {
      TableName: TABLE_NAME,
      Key: {
        resetCode: {
          S: code,
        },
      },
    },
  };
  return [dbParams];
};
