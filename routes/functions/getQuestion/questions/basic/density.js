const r = require("random");
const R = require("ramda");
const randomlyChooseOne = require("../utils/randomlyChooseN");

const density = () => {
  let mass = (r.float() / r.float()).toFixed(2);
  let volume = (r.float() / r.float()).toFixed(2);
  let density = (mass / volume).toFixed(4);

  let payloads = [
    {
      questionPayload: {
        values: [mass, volume, "$input-0"],
      },
      answerPayload: [
        {
          answer: density + "",
          useTolerance: true,
          tolerance: 0.05,
          type: "number",
        },
      ],
    },
    {
      questionPayload: {
        values: ["$input-0", volume, density],
      },
      answerPayload: [
        {
          answer: mass + "",
          useTolerance: true,
          tolerance: 0.05,
          type: "number",
        },
      ],
    },
    {
      questionPayload: {
        values: [mass, "$input-0", density],
      },
      answerPayload: [
        {
          answer: volume + "",
          useTolerance: true,
          tolerance: 0.05,
          type: "number",
        },
      ],
    },
  ];

  let response = {
    questionPayload: {
      headers: ["Mass (grams)", "Volume (cc)", "Density (g/cc)"],
      template: "table",
      answerCount: 1,
      skeletonCount: 3,
      title: `<h6>
          This page lets you practice your density, mass and volume
          calculations.
        </h6>`,
    },
  };

  return R.mergeDeepRight(response, randomlyChooseOne(payloads));
};

module.exports = density;
