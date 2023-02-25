describe("getQuestion -> callQuestion", () => {
  test("", async () => {
    const callQuestion = require("./callQuestion");
    expect(callQuestion("testFunction")).toEqual({
      questionPayload: "questionPayload",
      answerPayload: "answerPayload",
    });
  });
});
