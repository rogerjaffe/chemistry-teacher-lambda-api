const dynamoDbTransaction = require('./dynamoDbTransaction');
const { mockClient } = require('aws-sdk-client-mock');
const {DynamoDBClient} = require('@aws-sdk/client-dynamodb');
const { TransactWriteItemsCommand } = require("@aws-sdk/client-dynamodb");
const ddbMock = mockClient(DynamoDBClient);

describe('dynamoDbTransaction', () => {

  beforeEach(() => {
    ddbMock.reset();
  })

  test('should return null for correct set of transactions', async () => {
    ddbMock.on(TransactWriteItemsCommand).resolves({
      Item: {id: 'user1', name:"John"}
    })
    const res = await dynamoDbTransaction(['t1','t2','t3']);
    expect(res).toBeNull();
  })

})
