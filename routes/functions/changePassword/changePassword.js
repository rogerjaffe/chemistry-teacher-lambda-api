/**
 * Change the password
 *   params.newPasswordHash: New password hash
 *   params.email: Teacher email
 *
 * @param email: string
 * @param salt: string
 * @param passwordHash: string
 * @returns {Promise<*>}
 */
module.exports = async (email, salt, passwordHash) => {
  const ddbClient = require("../../helpers/aws/dynamoDb");
  const TABLE_NAME = "teachers";
  const dbParams = {
    Update: {
      TableName: TABLE_NAME,
      Key: {
        email: {
          S: email,
        },
      },
      UpdateExpression: "SET passwordHash = :val1, salt = :val2",
      ExpressionAttributeValues: {
        ":val1": { S: passwordHash },
        ":val2": { S: salt },
      },
    },
  };
  return [dbParams];
};
