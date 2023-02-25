const saveConfirmationCode = require("./saveConfirmationCode");
const { mockClient } = require("aws-sdk-client-mock");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { PutItemCommand } = require("@aws-sdk/client-dynamodb");
const ddbMock = mockClient(DynamoDBClient);

describe("saveConfirmationCode", () => {
  beforeEach(() => {
    ddbMock.reset();
  });

  test("should return a transaction array with one transaction and an alpha code", async () => {
    const res = await saveConfirmationCode("abc@abc.com");
    expect(Array.isArray(res.transaction)).toBeTruthy();
    expect(res.code.length).toBe(20);
  });
});
