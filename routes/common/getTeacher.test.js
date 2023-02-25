const getTeacher = require('./getTeacher');
const { mockClient } = require('aws-sdk-client-mock');
const {DynamoDBClient} = require('@aws-sdk/client-dynamodb');
const { GetItemCommand } = require("@aws-sdk/client-dynamodb");
const { unmarshall } = require("@aws-sdk/util-dynamodb");
const ddbMock = mockClient(DynamoDBClient);

describe('getTeacher', () => {

  beforeEach(() => {
    ddbMock.reset();
  })

  test('should return null for correct set of transactions', async () => {
    const email = 'rogerjaffe@gmail.com';
    const Item = {
      email: {
        S: 'email'
      },
      accountExpiration: {
        N: 'accountExpiration'
      },
      passwordHash: {
        S: 'passwordHash'
      },
      school: {
        S: 'school'
      },
      accountDeletion: {
        N: 'accountDeletion'
      },
      questionFilter: {
        S: 'questionFilter'
      },
      salt: {
        S: 'salt'
      },
      emailConfirmed: {
        BOOL: true
      },
      lastName: {
        S: 'lastName'
      },
      firstName: {
        S: 'firstName'
      },
      studentListJSON: {
        S: 'studentListJSON'
      }}
    ddbMock.on(GetItemCommand).resolves({
      Item
    })
    const res = await getTeacher(email);
    expect(res).toEqual(unmarshall(Item));
  })

})
