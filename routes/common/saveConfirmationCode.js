/**
 * Save the confirmation code
 *
 * @param email
 * @returns {Promise<{code: string, transaction: {Put: {TableName: string, Item: {confirmationCode: {S: string}, expiration: {N: string}, email: {S}}}}[]}>}
 * Errors: DynamoDB errors
 */
module.exports = async (email) => {
  const { CONFIRMATION_EXPIRATION } = require("../constants");
  const { nanoid } = require("nanoid");
  const CODE_LENGTH = 20;
  const code = nanoid(CODE_LENGTH);
  const expiration =
    Math.floor(new Date().getTime() / 1000) +
    CONFIRMATION_EXPIRATION * 24 * 60 * 60;

  const { DynamoDB, PutItemCommand } = require("@aws-sdk/client-dynamodb");
  // Set the AWS Region.
  const REGION = "us-west-1";
  const TABLE_NAME = "confirmation";
  // Create an Amazon DynamoDB service client object.
  const ddb = new DynamoDB({ region: REGION });

  const dbParams = {
    Put: {
      TableName: TABLE_NAME,
      Item: {
        confirmationCode: {
          S: code,
        },
        email: {
          S: email,
        },
        expiration: {
          N: expiration + "",
        },
      },
    },
  };
  return { code, transaction: [dbParams] };
};
