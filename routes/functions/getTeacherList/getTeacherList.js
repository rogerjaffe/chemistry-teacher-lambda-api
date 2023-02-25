const { ScanCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } = require("@aws-sdk/util-dynamodb");
const ddbClient = require("../../helpers/aws/dynamoDb");

/**
 * Retrieves the list of teachers in the DB
 *
 * @returns {Promise<{[p: string]: any}[]|*[]>}
 */
module.exports = async () => {
  const TABLE_NAME = "teachers";
  const dbParams = {
    TableName: TABLE_NAME,
    FilterExpression: "emailConfirmed = :true",
    ExpressionAttributeValues: {
      ":true": { BOOL: true },
    },
    ProjectionExpression: "email, lastName, firstName, school",
  };

  try {
    const data = await ddbClient.send(new ScanCommand(dbParams));
    return data.Items ? data.Items.map((item) => unmarshall(item)) : [];
  } catch (e) {
    throw e;
  }
};
