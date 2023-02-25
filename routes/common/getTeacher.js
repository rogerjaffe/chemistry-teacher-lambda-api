const { GetItemCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } = require("@aws-sdk/util-dynamodb");
const ddbClient = require("../helpers/aws/dynamoDb");
const ChemistryError = require("../helpers/ChemistryError");

/**
 * Gets the teacher information
 *
 * @param email Teacher email
 * @returns {Promise<{
 *   email: (string),
 *   accountExpiration: (number),
 *   passwordHash: (string),
 *   school: (string),
 *   accountDeletion: (number),
 *   questionFilter: (string),
 *   salt: (string),
 *   emailConfirmed: (boolean),
 *   lastName: (string),
 *   firstName: (string),
 *   studentListJSON: (string)
 * } >}
 * Errors: DynamoDB errors
 */
module.exports = async (email) => {
  const TABLE_NAME = "teachers";
  const dbParams = {
    TableName: TABLE_NAME,
    Key: {
      email: {
        S: email ?? "",
      },
    },
  };
  let data;
  try {
    data = await ddbClient.send(new GetItemCommand(dbParams));
  } catch (e) {
    throw e;
  }

  return data.Item ? unmarshall(data.Item) : null;
};
