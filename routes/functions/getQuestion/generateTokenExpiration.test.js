const { dateFaker } = require("date-faker");
const { nanoid } = require("nanoid");
const HOURS = 6;
const NANOID_RETURN_VALUE = "token";
jest.mock("nanoid");

describe("generateTokenExpiration", () => {
  beforeEach(() => {
    nanoid.mockReset();
  });

  test("returns token, expiration, answerJSON", async () => {
    dateFaker.set("2021-01-01 00:00:00");
    nanoid.mockReturnValue(NANOID_RETURN_VALUE);
    const answerPayload = [4, 4, 2];
    const testResponse = {
      token: NANOID_RETURN_VALUE,
      expiration: new Date().getTime() / 1000 + HOURS * 3600 + "",
      answerJSON: JSON.stringify(answerPayload),
    };
    const generateTokenExpiration = require("./generateTokenExpiration");
    const response = await generateTokenExpiration(answerPayload);
    expect(response).toEqual(testResponse);
    dateFaker.reset();
  });
});
