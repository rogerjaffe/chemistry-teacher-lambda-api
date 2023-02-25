const { ScanCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } = require("@aws-sdk/util-dynamodb");
const ddbClient = require("../../helpers/aws/dynamoDb");

/**
 * Retrieves the answer log with the passed email
 *
 * @param email
 * @returns {Promise<{}|{name, error: boolean, message}|{teachers: ({[p: string]: any}[]|*[]), error: boolean}>}
 */
module.exports = async (email) => {
  // Set the AWS Region.
  const TABLE_NAME = "logs";
  const dbParams = {
    TableName: TABLE_NAME,
    FilterExpression: "begins_with(emailToken, :val1)",
    ExpressionAttributeValues: {
      ":val1": { S: email },
    },
  };

  try {
    const data = await ddbClient.send(new ScanCommand(dbParams));
    return data.Items ? data.Items.map((item) => unmarshall(item)) : [];
  } catch (e) {
    throw e;
  }
};
