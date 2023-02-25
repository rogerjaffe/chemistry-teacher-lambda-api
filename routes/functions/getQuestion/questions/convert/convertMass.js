const r = require("random");
const randomlyChooseOne = require("../utils/randomlyChooseN");

const convertMass = () => {
  let lb = Math.trunc(1000 * r.float()) / 100;

  let oz = Math.round(100 * (16 * lb)) / 100;
  let gram = Math.round(4536 * lb) / 10;
  let mg = 1000 * gram;
  let kg = Math.round(100 * gram) / 100000;

  let vals = {
    english: [
      { text: "oz", val: oz },
      { text: "lb", val: lb },
    ],
    metric: [
      { text: "gram", val: gram },
      { text: "mg", val: mg },
      { text: "kg", val: kg },
    ],
  };

  const system = r.boolean() ? ["english", "metric"] : ["metric", "english"];
  const _vals = {
    english: vals.english.sort(() => 0.5 - r.float()),
    metric: vals.metric.sort(() => 0.5 - r.float()),
  };

  const known = _vals[system[0]][0];
  const unknown = _vals[system[1]][0];

  const values1 = [
    `<span class="bold">${known.val}</span>`,
    `<span class="bold">${known.text}</span>`,
    "equals",
    "$input-0",
    `<span class="bold">${unknown.text}</span>`,
  ];
  const values2 = [
    "$input-0",
    `<span class="bold">${unknown.text}</span>`,
    "equals",
    `<span class="bold">${known.val}</span>`,
    `<span class="bold">${known.text}</span>`,
  ];

  const response = {
    questionPayload: {
      template: "table",
      answerCount: 1,
      width: "",
      cellSpacing: 5,
      cellPadding: 10,
      skeletonCount: 3,
      values: randomlyChooseOne([values1, values2]),
      title: `<h6>
          This page tests converting mass measures between the English (pounds
          and ounces) and the metric (grams, etc). It will help you with both
          your math skills and you understanding of both systems of measure.
        </h6>
      `,
    },
    answerPayload: [
      {
        answer: unknown.val + "",
        useTolerance: true,
        tolerance: 0.05,
        type: "number",
      },
    ],
  };
  return response;
};

module.exports = convertMass;
