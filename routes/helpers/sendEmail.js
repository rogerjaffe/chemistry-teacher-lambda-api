/**
 * Sends an email to the provided email
 *
 * See the developer guide with an example at
 * https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/ses-examples-sending-email.html
 * @param params
 *    email:  Email to send to
 *    bcc: Email to cc address
 *    subject: Email subject
 *    text: Email text
 *    replyTo: Reply to address
 *
 * @returns {Promise<{}|(*&{name: string, error: boolean, message: string})|*>}
 */
module.exports = async params => {
  const { SendEmailCommand } = require("@aws-sdk/client-ses");
  const sesClient = require('./aws/ses');
  try {
    const emailParams = {
      Destination: {
        ToAddresses: [params.email],
      },
      Message: {
        Body: {
          Text: { Data: params.text },
        },
        Subject: { Data: params.subject },
      },
      Source: params.replyTo,
    };
    if (params.bcc) {
      emailParams.Destination.BccAddresses = [params.bcc];
    }

    await sesClient.send(new SendEmailCommand(emailParams))
    return {error: false};
  } catch (e) {
    throw e;
  }
}

