const checkAnswerWithTolerance = require("./checkAnswerWithTolerance");

describe("checkAnswerWithTolerance", () => {
  test("answers are exact", async () => {
    const response = await checkAnswerWithTolerance(1.0, 1.0, 0.05);
    expect(response).toBeTruthy();
  });

  test("answer is high but in tolerance", async () => {
    const response = await checkAnswerWithTolerance(1.02, 1.0, 0.05);
    expect(response).toBeTruthy();
  });

  test("answer is low but in tolerance", async () => {
    const response = await checkAnswerWithTolerance(0.98, 1.0, 0.05);
    expect(response).toBeTruthy();
  });

  test("answer is high and not in tolerance", async () => {
    const response = await checkAnswerWithTolerance(1.06, 1.0, 0.05);
    expect(response).toBeFalsy();
  });

  test("answer is low and not in tolerance", async () => {
    const response = await checkAnswerWithTolerance(0.94, 1.0, 0.05);
    expect(response).toBeFalsy();
  });

  test("answer is correct and in scientific notation with spaces", async () => {
    const response = await checkAnswerWithTolerance(
      "1.25 e+6",
      "1250000",
      0.05
    );
    expect(response).toBeTruthy();
  });
});
