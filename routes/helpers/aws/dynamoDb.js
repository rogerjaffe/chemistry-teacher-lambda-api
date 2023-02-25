const C = require('../../constants');
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
module.exports = new DynamoDBClient({region: C.REGION});
