const authenticate = require("../functions/authenticate");

module.exports = (credentials, testFunction, body) => {
  const authEvent = {
    body: {
      email: credentials.email,
      password: credentials.password,
    },
    params: {
      path: {},
      querystring: {},
    },
    context: { "source-ip": "1.2.3.4" },
  };

  authenticate(authEvent).then((response) => {
    const { jwt } = response;
    const testEvent = {
      body: {
        jwt,
        ...body,
      },
      params: {
        path: {},
        querystring: {},
      },
      context: { "source-ip": "1.2.3.4" },
    };
    testFunction(testEvent).then((response) => console.log(response));
  });
};
