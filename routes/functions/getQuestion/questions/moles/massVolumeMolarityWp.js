const r = require("random");
const compoundUtils = require("../utils/compoundUtils");

const massVolumeMolarityWp = () => {
  const lvol = r.float(1, 3);
  const mlvol = lvol * 1000;
  const compound = compoundUtils.getRandomCompoundBySeq(14);
  const gfw = compoundUtils.getCompoundMass(compound.formula);
  const formula = compoundUtils.getHtml(compound.formula);
  const molarity = r.float(0.05, 1);
  const moles = molarity * lvol;
  const gmass = moles * gfw;
  const mgmass = gmass * 1000;

  const mass =
    r.float() < 0.5
      ? {
          value: gmass.toFixed(2),
          units: "gram",
        }
      : {
          value: mgmass.toFixed(2),
          units: "mg",
        };
  const volume =
    r.float() < 0.5
      ? {
          value: lvol.toFixed(2),
          units: "liters",
        }
      : {
          value: mlvol.toFixed(2),
          units: "mL",
        };

  const choice = r.int(0, 2);
  const htmls = [
    `What volume in <span class="bold">${
      volume.units
    }</span> of <span class="bold">${molarity.toFixed(
      2
    )}M </span> <span class="bold">${formula}</span> would be required if you wanted <span class="bold">${
      mass.value
    }</span> <span class="bold">${mass.units}</span> of solute?`,
    `How many grams of <span class="bold">${formula}</span> are in <span class="bold">${
      volume.value
    }</span> <span class="bold">${
      volume.units
    }</span> of a <span class="bold">${molarity.toFixed(2)}M</span> solution?`,
    `What is the molarity of a solution which contains <span class="bold">${mass.value}</span> <span class="bold">${mass.units}</span> of <span class="bold">${formula}</span> in a total volume of <span class="bold">${volume.value}</span> <span class="bold">${volume.units}</span>?`,
  ];
  const answers = [
    {
      answer: volume.value + "",
      useTolerance: true,
      tolerance: 0.05,
      type: "number",
    },
    {
      answer: gmass.toFixed(2) + "",
      useTolerance: true,
      tolerance: 0.05,
      type: "number",
    },
    {
      answer: molarity.toFixed(2) + "",
      useTolerance: true,
      tolerance: 0.05,
      type: "number",
    },
  ];

  const response = {
    questionPayload: {
      html: htmls[choice],
      template: "wordProblem",
      answerCount: 1,
      skeletonCount: 3,
      title: `<h6>
          This page presents random "word" problems in the area of molarity, mass, and volume. 
        </h6>`,
    },
    answerPayload: [answers[choice]],
  };
  return response;
  //
  // const payload = [
  //   {
  //     questionPayload: {
  //       questionChoice,
  //       v1: volume.units,
  //       v2: molarity.toFixed(2),
  //       v3: compound.formula,
  //       v4: mass.value,
  //       v5: mass.units,
  //     },
  //     answerPayload: [
  //       {
  //         answer: volume.value + "",
  //         useTolerance: true,
  //         tolerance: 0.05,
  //       },
  //     ],
  //   },
  //   {
  //     questionPayload: {
  //       questionChoice,
  //       v1: compound.formula,
  //       v2: volume.value,
  //       v3: volume.units,
  //       v4: molarity.toFixed(2),
  //     },
  //     answerPayload: [
  //       { answer: gmass.toFixed(2) + "", useTolerance: true, tolerance: 0.05 },
  //     ],
  //   },
  //   {
  //     questionPayload: {
  //       questionChoice,
  //       v1: mass.value,
  //       v2: mass.units,
  //       v3: compound.formula,
  //       v4: volume.value,
  //       v5: volume.units,
  //     },
  //     answerPayload: [
  //       {
  //         answer: molarity.toFixed(2) + "",
  //         useTolerance: true,
  //         tolerance: 0.05,
  //       },
  //     ],
  //   },
  // ];
  // return payload[questionChoice];
};

module.exports = massVolumeMolarityWp;
