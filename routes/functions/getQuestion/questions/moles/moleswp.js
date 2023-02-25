const r = require("random");
const periodicTable = require("../utils/periodicTable");

const moleswp = () => {
  let atom = periodicTable.getRandomElement();
  let mass = r.float(1, 1000).toFixed(2);
  let moles = (mass / atom.atomic_mass).toFixed(4);

  const units = {
    mass: [
      { units: "grams", factor: 1 },
      { units: "kg", factor: 0.001 },
      { units: "mg", factor: 1000 },
    ],
    moles: [
      { units: "moles", factor: 1 },
      { units: "mmoles", factor: 1000 },
    ],
  };
  // const units = {
  //   mass: ["grams", "kg", "mg"],
  //   moles: ["moles", "mmoles"],
  // };
  let rn = r.int(0, 2);
  const massUnit = units.mass[rn].units;
  mass = mass * units.mass[rn].factor;
  rn = r.int(0, 1);
  const moleUnit = units.moles[rn].units;
  moles = moles * units.moles[rn].factor;

  let htmls = [
    `How many <span class="bold">${moleUnit}</span> is <span class="bold">${mass.toFixed(
      2
    )}</span> <span class="bold">${massUnit}</span> of <span class="bold">${
      atom.symbol
    }</span>?`,
    `What is the mass in <span class="bold">${massUnit}</span> of <span class="bold">${moles}</span> <span class="bold">${moleUnit}</span> of <span class="bold">${atom.symbol}</span>?`,
    `What is the element if <span class="bold">${moles}</span> <span class="bold">${moleUnit}</span> has a mass of <span class="bold">${mass.toFixed(
      2
    )}</span> <span class="bold">${massUnit}</span>?`,
  ];
  let answers = [
    { answer: moles + "", useTolerance: true, tolerance: 0.05, type: "number" },
    { answer: mass + "", useTolerance: true, tolerance: 0.05, type: "number" },
    { answer: atom.symbol.toLowerCase(), type: "string" },
  ];

  const choice = r.int(0, htmls.length - 1);

  return {
    questionPayload: {
      html: htmls[choice],
      template: "wordProblem",
      answerCount: 1,
      skeletonCount: 3,
      title: `<h6>
          This page presents random "word" problems in the area of elements, mass and moles. 
        </h6>`,
    },
    answerPayload: [answers[choice]],
  };
};

module.exports = moleswp;
