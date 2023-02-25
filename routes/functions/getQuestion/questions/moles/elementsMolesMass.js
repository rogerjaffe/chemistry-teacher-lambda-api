const r = require("random");
const R = require("ramda");
const randomlyChooseOne = require("../utils/randomlyChooseN");
const periodicTable = require("../utils/periodicTable");

const elementsMolesMass = () => {
  let atom = periodicTable.getRandomElement();
  const an = atom.number;
  let mass = r.float() * 90;
  let moles = mass / atom.atomic_mass;
  if (moles < 0.01) moles = moles.toFixed(5);
  else if (moles < 0.1) moles = moles.toFixed(4);
  else moles = moles.toFixed(3);
  mass = mass.toFixed(2);

  let response = {
    questionPayload: {
      headers: ["Atomic #", "Moles", "Mass"],
      template: "table",
      answerCount: 1,
      skeletonCount: 3,
      width: "",
      cellSpacing: 5,
      cellPadding: 10,
      title: "<h6>Put the correct value in the empty cell</h6>",
    },
  };

  let payloads = [
    {
      questionPayload: {
        values: ["$input-0", moles, mass],
      },
      answerPayload: [{ answer: an + "", type: "string" }],
    },
    {
      questionPayload: {
        values: [an, "$input-0", mass],
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
        values: [an, moles, "$input-0"],
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

module.exports = elementsMolesMass;
