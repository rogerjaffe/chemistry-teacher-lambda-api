const r = require("random");
const randomlyChooseOne = require("../utils/randomlyChooseN");

const convertVolume = () => {
  const qt = Math.trunc(1000 * Math.random()) / 10000;
  const oz = Math.round(1000 * (32 * qt)) / 1000;
  const gal = Math.round(10000 * (qt / 4)) / 10000;
  const ml = Math.round(10 * (946 * qt)) / 10;
  const lit = Math.round(10 * ml) / 10000;

  let vals = {
    english: [
      { text: "qt", val: qt },
      { text: "oz", val: oz },
      { text: "gal", val: gal },
    ],
    metric: [
      { text: "ml", val: ml },
      { text: "lit", val: lit },
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
        Here you will perform problems involving converting volumes between the
        English and metric systems to help develop your math skills and your
        understanding of both systems.
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

module.exports = convertVolume;
