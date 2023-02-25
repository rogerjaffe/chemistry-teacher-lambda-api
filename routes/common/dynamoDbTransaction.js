const ddbClient = require("../helpers/aws/dynamoDb");
const { TransactWriteItemsCommand } = require("@aws-sdk/client-dynamodb");

/**
 * Execute a series of DynamoDB transactions atomically
 *  transactions: Array of DynamoDB transactions
 *
 * @param transactions: (*)
 * @returns {Promise<null>}
 * Errors: AWS DynamoDB errors
 */
module.exports = async (transactions) => {
  try {
    await ddbClient.send(
      new TransactWriteItemsCommand({ TransactItems: transactions })
    );
    return null;
  } catch (e) {
    throw e;
  }
};
