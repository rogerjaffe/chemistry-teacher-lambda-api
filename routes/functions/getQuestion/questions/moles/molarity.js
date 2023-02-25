const r = require("random");
const R = require("ramda");
const randomlyChooseOne = require("../utils/randomlyChooseN");

const molarity = () => {
  const moles = r.float(0.01, 1);
  const volume = r.float(0.001, 10);
  const molarity = moles / volume;

  let response = {
    questionPayload: {
      headers: ["Moles", "Volume (L)", "Molarity"],
      template: "table",
      width: "",
      cellPadding: "5",
      cellSpacing: "10",
      answerCount: 1,
      skeletonCount: 3,
      title: `<h6>
          This page lets you practice your density, mass and volume
          calculations.
        </h6>`,
    },
  };

  let payloads = [
    {
      questionPayload: {
        values: [moles.toFixed(2), volume.toFixed(2), "$input-0"],
      },
      answerPayload: [
        {
          answer: molarity + "",
          useTolerance: true,
          tolerance: 0.05,
          type: "number",
        },
      ],
    },
    {
      questionPayload: {
        values: ["$input-0", volume.toFixed(2), molarity.toFixed(2)],
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
        values: [moles.toFixed(2), "$input-0", molarity.toFixed(2)],
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

  return R.mergeDeepRight(response, randomlyChooseOne(payloads));
};

module.exports = molarity;
