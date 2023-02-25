const { GetItemCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } = require("@aws-sdk/util-dynamodb");
const ddbClient = require("../../helpers/aws/dynamoDb");
const ChemistryError = require("../../helpers/ChemistryError");

/**
 * Retrieves the answer stored in the DynamoDB
 *  event.token: Token of answer to retrieve
 *
 * @param event
 * @returns {Promise<{}|{name: string, error: boolean, message: string}|{item: {[p: string]: any}, expired: boolean}>}
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

  let item;
  try {
    const data = await ddbClient.send(new GetItemCommand(dbParams));
    item = data.Item ? unmarshall(data.Item) : null;
  } catch (e) {
    throw e;
  }

  if (item) {
    item.answerPayload = JSON.parse(item.answerJSON);
    return item;
    // return {...event, ...item};
  } else {
    return null;
    // throw new ChemistryError('QuestionExpiredError');
  }
};
