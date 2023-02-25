const r = require("random");
const randomlyChooseOne = require("../utils/randomlyChooseN");

const convertDistance = () => {
  let mm = Math.trunc(100 * Math.pow(10, r.float())) / 100;
  let t = r.int(0, 2);
  if (t === 0) {
    mm = 10 * mm;
  } else if (t === 1) {
    mm = 100 * mm;
  }

  const inch = Math.round(1000 * (mm / 25.4)) / 1000;
  const feet = Math.round(10000 * (inch / 12)) / 10000;
  const yard = Math.round(10000 * (feet / 3)) / 10000;
  const cm = Math.round(1000 * (mm / 10)) / 1000;
  const m = Math.round(10000 * (cm / 100)) / 10000;
  mm = mm.toFixed(2);

  let vals = {
    english: [
      { text: "inch", val: inch },
      { text: "yard", val: yard },
      { text: "feet", val: feet },
    ],
    metric: [
      { text: "mm", val: mm },
      { text: "cm", val: cm },
      { text: "m", val: m },
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
            This is a drill and practice page involving converting distance
            measures between the English (inches, feet and yards) and metric
            (mm,cm,meters,km). It is intended to help with both your math skill
            and your understanding of the metric system.
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

module.exports = convertDistance;
