const { DeleteItemCommand } = require("@aws-sdk/client-dynamodb");
const ddbClient = require("../../helpers/aws/dynamoDb");

/**
 * Delete the answer from the DB
 *   event.token: Answer token
 *
 * @param token
 * @returns {Promise<{}>}
 */
module.exports = async (token) => {
  const TABLE_NAME = "answers";
  const dbParams = {
    TableName: TABLE_NAME,
    Key: {
      token: {
        S: token ?? "",
      },
    },
  };

  try {
    await ddbClient.send(new DeleteItemCommand(dbParams));
    return null;
  } catch (e) {
    throw e;
  }
};
