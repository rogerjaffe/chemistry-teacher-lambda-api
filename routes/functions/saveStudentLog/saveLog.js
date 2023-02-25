const ddbClient = require("../../helpers/aws/dynamoDb");
const { BatchWriteItemCommand } = require("@aws-sdk/client-dynamodb");
const { nanoid } = require("nanoid");

/**
 * Save the log information to the DB
 *
 * @param email (string)
 * @param studentId (string)
 * @param logs (object[])
 * @returns {Promise<*>}
 */
const C = require("../../constants");

module.exports = async (email, studentId, logs) => {
  const TABLE_NAME = "logs";
  const expiration =
    Math.floor(new Date().getTime() / 1000) +
    C.EXPIRATION_TIME * 24 * 60 * 60 +
    "";
  const items = logs.map((log) => {
    return {
      PutRequest: {
        Item: {
          emailToken: {
            S: email + ":" + nanoid(),
          },
          timestamp: {
            N: log.timestamp + "",
          },
          studentId: {
            S: studentId + "",
          },
          isCorrect: {
            BOOL: log.isCorrect,
          },
          seq: {
            N: log.seq + "",
          },
          text: {
            S: log.text,
          },
          expiration: {
            N: expiration,
          },
        },
      },
    };
  });
  const request = {
    RequestItems: {
      [TABLE_NAME]: items,
    },
  };
  console.dir(request, { depth: null });
  try {
    await ddbClient.send(new BatchWriteItemCommand(request));
    return null;
  } catch (e) {
    throw e;
  }
};
