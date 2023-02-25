describe("checkAnswers", () => {
  const checkAnswers = require("./checkAnswers");

  test("multiple numbers all correct", async () => {
    const studentAnswerPayload = ["1.7101", "2.5", "10", "15"];
    const answerPayload = {
      answerPayload: [
        { answer: "1.7101", useTolerance: false, type: "number" },
        { answer: "2.5", useTolerance: false, type: "number" },
        {
          answer: "10.00",
          useTolerance: true,
          tolerance: 0.05,
          type: "number",
        },
        {
          answer: "15.00",
          useTolerance: true,
          tolerance: 0.05,
          type: "number",
        },
      ],
    };
    const response = await checkAnswers(answerPayload, studentAnswerPayload);
    expect(response).toEqual([true, true, true, true]);
  });

  test("number answer without tolerance should be not correct", async () => {
    const studentAnswerPayload = ["1.7102"];
    const answerPayload = {
      answerPayload: [
        { answer: "1.7101", useTolerance: false, type: "number" },
      ],
    };
    const response = checkAnswers(answerPayload, studentAnswerPayload);
    expect(response).toEqual([false]);
  });

  test("number exact answer using tolerance should be correct", async () => {
    const studentAnswerPayload = ["10"];
    const answerPayload = {
      answerPayload: [
        {
          answer: "10.00",
          useTolerance: true,
          tolerance: 0.05,
          type: "number",
        },
      ],
    };
    const response = checkAnswers(answerPayload, studentAnswerPayload);
    expect(response).toEqual([true]);
  });

  test("number answer above but within tolerance should be correct", async () => {
    const studentAnswerPayload = ["10.05"];
    const answerPayload = {
      answerPayload: [
        {
          answer: "10.00",
          useTolerance: true,
          tolerance: 0.05,
          type: "number",
        },
      ],
    };
    const response = checkAnswers(answerPayload, studentAnswerPayload);
    expect(response).toEqual([true]);
  });

  test("number answer below but within tolerance should be correct", async () => {
    const studentAnswerPayload = ["9.92"];
    const answerPayload = {
      answerPayload: [
        {
          answer: "10.00",
          useTolerance: true,
          tolerance: 0.05,
          type: "number",
        },
      ],
    };
    const response = checkAnswers(answerPayload, studentAnswerPayload);
    expect(response).toEqual([true]);
  });

  test("number answer above but out of tolerance should be incorrect", async () => {
    const studentAnswerPayload = ["10.55"];
    const answerPayload = {
      answerPayload: [
        {
          answer: "10.00",
          useTolerance: true,
          tolerance: 0.05,
          type: "number",
        },
      ],
    };
    const response = checkAnswers(answerPayload, studentAnswerPayload);
    expect(response).toEqual([false]);
  });

  test("number answer below but out of tolerance should be incorrect", async () => {
    const studentAnswerPayload = ["9.42"];
    const answerPayload = {
      answerPayload: [
        {
          answer: "10.00",
          useTolerance: true,
          tolerance: 0.05,
          type: "number",
        },
      ],
    };
    const response = checkAnswers(answerPayload, studentAnswerPayload);
    expect(response).toEqual([false]);
  });

  test("string answer correct", async () => {
    const studentAnswerPayload = ["abcde"];
    const answerPayload = {
      answerPayload: [{ answer: "abcde", type: "string" }],
    };
    const response = checkAnswers(answerPayload, studentAnswerPayload);
    expect(response).toEqual([true]);
  });

  test("string answer incorrect", async () => {
    const studentAnswerPayload = ["1bcde"];
    const answerPayload = {
      answerPayload: [{ answer: "abcde", type: "string" }],
    };
    const response = checkAnswers(answerPayload, studentAnswerPayload);
    expect(response).toEqual([false]);
  });
});
