/**
 * System constants used for the Chemistry practice system.
 *
 * The JSON Web Key Set is retrieved from the URL defined below, but it's fixed
 * for the AWS Cognito user pool.  See `https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html`
 * for details about validating a JWT.
 *
 */
const constants = {
  PEPPER: 'ZjWveyaVwYEBoaQnzawt',
  JWT_SECRET: 'uLS67oQy0rWlpiZ63VKf',
  REGION: 'us-west-1',
  USER_POOL_ID: 'us-west-1_O6hpotYDA',
  TOKEN_EXPIRY: 60,                     // minutes
  EXPIRATION_TIME: 365,                 // days
  DELETION_TIME: 365*2,                 // days after email confirmation
  INITIAL_DELETION_TIME: 7,             // days when account is created
  CONFIRMATION_EXPIRATION: 7,           // days
  PASSWORD_RESET_EXPIRATION: 10,        // minutes
  CONFIRM_URL: 'https://teacher.chemistry-practice.com?code=',
  ADMIN_EMAIL: 'rogerjaffe@gmail.com',
  REPLY_TO_EMAIL: 'info@chemistry-practice.com'
}

module.exports = constants;
