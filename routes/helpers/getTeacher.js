const { GetItemCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } = require("@aws-sdk/util-dynamodb");
const ddbClient = require('./aws/dynamoDb');
const ChemistryError = require('./ChemistryError');
/**
 * Retrieves the teacher with the passed email
 *
 * @param event
 * @returns {Promise<{}|{name: string, error: boolean, message: string}|{item: {[p: string]: any}, expired: boolean}>}
 */
module.exports = async (email) => {
  // Set the AWS Region.
  const TABLE_NAME = 'teachers';
  const dbParams = {
    TableName: TABLE_NAME,
    Key: {
      email: {
        S: email ?? ''
      }
    }
  }

  let data;
  try {
    data = await ddbClient.send(new GetItemCommand(dbParams));
  } catch (e) {
    throw e;
  }

  const item = data.Item ? unmarshall(data.Item) : null;
  if (item) {
    return {error: false, item};
  } else {
    throw new ChemistryError('TeacherNotFoundError');
  }
}

