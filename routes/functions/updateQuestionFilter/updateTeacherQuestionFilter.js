/**
 * Update the teacher's question filter
 *
 * @param email
 * @param newQuestionFilter
 * @returns {Promise<*>}
 */
module.exports = async (email, newQuestionFilter) => {
  const ddbClient = require("../../helpers/aws/dynamoDb");
  const { UpdateItemCommand } = require("@aws-sdk/client-dynamodb");
  const UpdateExpression = "SET questionFilter = :val1";
  const ExpressionAttributeValues = {
    ":val1": { S: newQuestionFilter },
  };

  const TABLE_NAME = "teachers";
  const dbParams = {
    TableName: TABLE_NAME,
    Key: {
      email: {
        S: email,
      },
    },
    UpdateExpression,
    ExpressionAttributeValues,
  };

  try {
    await ddbClient.send(new UpdateItemCommand(dbParams));
    return null;
  } catch (e) {
    throw e;
  }
};
