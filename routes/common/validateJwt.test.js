describe("validateJwt", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("No JWT throws error", async () => {
    const index = require("./validateJwt");
    await expect(async () => {
      await index();
    }).rejects.toThrowError("JWTNotProvided");
  });

  test("valid JWT", async () => {
    const verifyResponse = {
      error: false,
      name: "",
      message: "",
      jwt: "SampleJWT",
      decoded: {
        header: "header",
        payload: {
          p1: "abc",
          p2: "def",
          iat: "abcdef",
          exp: "expiry",
        },
        signature: "signature",
      },
    };
    const expected = {
      payload: {
        p1: "abc",
        p2: "def",
      },
    };

    jest.mock("../helpers/jwt/verify", () => {
      return () => verifyResponse;
    });
    const index = require("./validateJwt");
    const validate = await index({ jwt: "SampleJWT" });
    expect(validate).toEqual(expected);
  });
});
