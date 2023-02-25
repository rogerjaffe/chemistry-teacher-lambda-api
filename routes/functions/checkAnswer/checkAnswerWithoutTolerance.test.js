const checkAnswerExact = require("./checkAnswerWithoutTolerance");

describe("checkAnswerExact", () => {
  test("numeric answers match", async () => {
    const response = await checkAnswerExact(1, 1);
    expect(response).toBeTruthy();
  });

  test("numeric answers do not match", async () => {
    const response = await checkAnswerExact(1, 2);
    expect(response).toBeFalsy();
  });
});
