/**
 * Resets the password in the DB
 *
 * @param email
 * @param password
 * @param salt
 * @returns {Promise<*>}
 */
module.exports = (email, passwordHash, salt) => {
  const TABLE_NAME = "teachers";
  const dbParams = {
    Update: {
      TableName: TABLE_NAME,
      Key: {
        email: {
          S: email,
        },
      },
      UpdateExpression:
        "SET passwordHash = :val1, salt = :val2 REMOVE confirmationCode",
      ExpressionAttributeValues: {
        ":val1": { S: passwordHash },
        ":val2": { S: salt },
      },
    },
  };
  return [dbParams];
};
