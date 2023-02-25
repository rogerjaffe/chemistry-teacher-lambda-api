/**
 * Save the teacher information to the DB
 *
 * @param params
 * @returns {Promise<*>}
 */
module.exports = (params) => {
  const TABLE_NAME = "teachers";
  const dbParams = {
    Put: {
      TableName: TABLE_NAME,
      Item: {
        email: {
          S: params.email,
        },
        passwordHash: {
          S: params.passwordHash,
        },
        school: {
          S: params.school,
        },
        lastName: {
          S: params.lastName,
        },
        firstName: {
          S: params.firstName,
        },
        questionFilter: {
          S: "",
        },
        salt: {
          S: params.salt,
        },
        emailConfirmed: {
          BOOL: false,
        },
        accountExpiration: {
          N: params.accountExpiration + "",
        },
        accountDeletion: {
          N: params.accountDeletion + "",
        },
      },
    },
  };
  return [dbParams];
};
