const sendEmail = require('./sendEmail');
const { mockClient } = require('aws-sdk-client-mock');
const { SESClient } = require("@aws-sdk/client-ses");
const ddbMock = mockClient(SESClient);

describe('saveConfirmationCode', () => {

  beforeEach(() => {
    ddbMock.reset();
  })

  test('should return null', async () => {
    const email = 'abc@abc.com';
    const protocol = 'https:';
    const host = 'www.chemistry-practice.com';
    const confirmationCode = '123ABC';
    const res = await sendEmail(email, confirmationCode, host, protocol);
    expect(res).toBeNull();
  })

})
