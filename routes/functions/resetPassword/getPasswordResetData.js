const { GetItemCommand } = require("@aws-sdk/client-dynamodb");
const ChemistryError = require("../../helpers/ChemistryError");
const { unmarshall } = require("@aws-sdk/util-dynamodb");
const ddbClient = require("../../helpers/aws/dynamoDb");

/**
 * Retrieves the password reset code
 *
 * @param code Reset code
 * @returns {Promise<{}|{name: string, error: boolean, message: string}|{item: {[p: string]: any}, expired: boolean}>}
 */
module.exports = async (code) => {
  const TABLE_NAME = "passwordReset";
  const dbParams = {
    TableName: TABLE_NAME,
    Key: {
      resetCode: {
        S: code ?? "",
      },
    },
  };

  let data, item;
  try {
    data = await ddbClient.send(new GetItemCommand(dbParams));
  } catch (e) {
    throw e;
  }
  item = data.Item ? unmarshall(data.Item) : null;
  if (item === null) {
    throw new ChemistryError("PasswordResetCodeNotFoundError");
  } else {
    return item;
  }
};
