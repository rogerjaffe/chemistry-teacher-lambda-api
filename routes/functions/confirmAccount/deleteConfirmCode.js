/**
 * Deletes the confirmation code in the confirmation table in the DB
 *
 * @param code: string
 * @returns {Promise<*>}
 */
module.exports = (code) => {
  const TABLE_NAME = "confirmation";
  const dbParams = {
    Delete: {
      TableName: TABLE_NAME,
      Key: {
        confirmationCode: {
          S: code,
        },
      },
    },
  };
  return [dbParams];
};
