const C = require('../../constants');
const { SecretsManager } = require("@aws-sdk/client-secrets-manager");
module.exports = new SecretsManager({region: C.REGION});
