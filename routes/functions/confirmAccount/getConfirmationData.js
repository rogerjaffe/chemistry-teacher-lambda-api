const { GetItemCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } = require("@aws-sdk/util-dynamodb");
const ddbClient = require("../../helpers/aws/dynamoDb");
const ChemistryError = require("../../helpers/ChemistryError");

/**
 * Retrieves the answer stored in the DynamoDB
 * event must have a token property to lookup the answer record
 *
 * @param code: string
 * @returns {Promise<{}|{...item}>}
 */
module.exports = async (code) => {
  const TABLE_NAME = "confirmation";
  const dbParams = {
    TableName: TABLE_NAME,
    Key: {
      confirmationCode: {
        S: code ?? "",
      },
    },
  };

  let item;
  try {
    const data = await ddbClient.send(new GetItemCommand(dbParams));
    item = data.Item ? unmarshall(data.Item) : null;
  } catch (e) {
    throw e;
  }
  if (item) {
    return { ...item };
  } else {
    throw new ChemistryError("ConfirmationExpired");
  }
};
