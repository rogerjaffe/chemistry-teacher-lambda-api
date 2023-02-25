/**
 * Save the answer and token to the DB
 *
 * @param token
 * @param answerJSON
 * @param expiration
 * @returns {Promise<*>}
 */
module.exports = async (token, answerJSON, expiration) => {
  const { DynamoDB, PutItemCommand } = require("@aws-sdk/client-dynamodb");
  // Set the AWS Region.
  const REGION = "us-west-1";
  const TABLE_NAME = "answers";
  // Create an Amazon DynamoDB service client object.
  const ddb = new DynamoDB({ region: REGION });

  const dbParams = {
    TableName: TABLE_NAME,
    Item: {
      token: {
        S: token,
      },
      answerJSON: {
        S: answerJSON,
      },
      expiration: {
        N: expiration,
      },
    },
  };

  try {
    await ddb.send(new PutItemCommand(dbParams));
    return null;
  } catch (e) {
    throw e;
  }
};
