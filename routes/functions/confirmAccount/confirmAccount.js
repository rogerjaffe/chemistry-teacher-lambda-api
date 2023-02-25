const C = require("../../constants");

/**
 * Update teacher record in DB with confirmed email
 *
 * @param email
 * @returns {Promise<*>}
 */
module.exports = (email) => {
  const TABLE_NAME = "teachers";
  const accountDeletion =
    Math.floor(new Date().getTime() / 1000) + C.DELETION_TIME * 24 * 60 * 60;
  const dbParams = {
    Update: {
      TableName: TABLE_NAME,
      Key: {
        email: {
          S: email,
        },
      },
      UpdateExpression: "SET emailConfirmed = :val1, accountDeletion = :val2",
      ExpressionAttributeValues: {
        ":val1": { BOOL: true },
        ":val2": { N: `${accountDeletion}` },
      },
    },
  };
  return [dbParams];
};
