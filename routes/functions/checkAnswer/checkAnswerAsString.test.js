const checkAnswerAsString = require("./checkAnswerAsString");

describe("checkAnswerAsString", () => {
  test("strings match", async () => {
    const response = await checkAnswerAsString("abc", "abc");
    expect(response).toBeTruthy();
  });

  test("strings do not match", async () => {
    const response = await checkAnswerAsString("abc", "def");
    expect(response).toBeFalsy();
  });
});
