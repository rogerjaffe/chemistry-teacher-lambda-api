const r = require("random");
const R = require("ramda");
const randomlyChooseOne = require("../utils/randomlyChooseN");

const massMoles = () => {
  let gfw = Math.pow(500, r.float(0.5114, 0.9641)).toFixed(3);
  let mass = Math.pow(1000, r.float()).toFixed(3);
  let moles = (mass / gfw).toFixed(3);

  let response = {
    questionPayload: {
      headers: ["GFW", "Mass", "Moles"],
      template: "table",
      answerCount: 1,
      skeletonCount: 3,
      title:
        "<h6>This page provides basic problems dealing with the relationships between mass, moles and the GFW</h6>",
    },
  };

  let payloads = [
    {
      questionPayload: {
        values: [gfw, mass, "$input-0"],
      },
      answerPayload: [
        {
          answer: moles + "",
          useTolerance: true,
          tolerance: 0.05,
          type: "number",
        },
      ],
    },
    {
      questionPayload: {
        values: ["$input-0", mass, moles],
      },
      answerPayload: [
        {
          answer: gfw + "",
          useTolerance: true,
          tolerance: 0.05,
          type: "number",
        },
      ],
    },
    {
      questionPayload: {
        values: [gfw, "$input-0", moles],
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
  ];
  return R.mergeDeepRight(response, randomlyChooseOne(payloads));
};

module.exports = massMoles;
