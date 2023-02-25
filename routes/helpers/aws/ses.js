const C = require('../../constants');
const { SESClient } = require("@aws-sdk/client-ses");
module.exports = new SESClient({region: C.REGION});
