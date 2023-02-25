const r = require("random");
const compoundUtils = require("../utils/compoundUtils");
const randomlyChooseN = require("../utils/randomlyChooseN");

// See https://www.quora.com/How-do-you-find-moles-of-each-element-in-a-compound for computation
// of the moles of each element in a compound
const massFormulaWp = () => {
  const masst = r.float(1, 500);
  const compound = compoundUtils.getRandomCompoundBySeq(18);
  const massc = compoundUtils.getCompoundMass(compound.formula);
  const molest = masst / massc;
  const _elements = compoundUtils.getMassRatios(compound.formula);
  const elements = _elements.map((el) => {
    el.moles = molest * el.n;
    el.mass = el.moles * el.info.atomic_mass;
    return el;
  });
  const useThese = randomlyChooseN(elements, 2);

  let n, p, answer;
  const o = useThese[0].symbol;
  const questionChoice = r.int(0, 11);
  switch (questionChoice) {
    case 0:
      n = masst;
      answer = useThese[0].mass;
      break;

    case 1:
      n = masst;
      answer = useThese[0].moles;
      break;

    case 2:
      n = molest;
      answer = useThese[0].mass;
      break;

    case 3:
      n = molest;
      answer = useThese[0].moles;
      break;

    case 4:
      n = useThese[0].mass;
      answer = masst;
      break;

    case 5:
      n = useThese[0].mass;
      answer = molest;
      break;

    case 6:
      n = useThese[0].mass;
      p = useThese[1].symbol;
      answer = useThese[1].mass;
      break;

    case 7:
      n = useThese[0].mass;
      p = useThese[1].symbol;
      answer = useThese[1].moles;
      break;

    case 8:
      n = useThese[0].moles;
      answer = masst;
      break;

    case 9:
      n = useThese[0].moles;
      answer = molest;
      break;

    case 10:
      n = useThese[0].moles;
      p = useThese[1].symbol;
      answer = useThese[1].mass;
      break;

    case 11:
      n = useThese[0].moles;
      p = useThese[1].symbol;
      answer = useThese[1].moles;
      break;
  }

  // console.log(compound.formula, masst, massc, molest, elements);
  const questions = [
    `<h6>A sample of ${compoundUtils.getHtml(
      compound.formula
    )} has a mass of <span class="bold">${n.toFixed(
      2
    )}</span> grams. How many grams of <span class="bold">${o}</span> does it contain?</h6>`,
    `<h6>A sample of ${compoundUtils.getHtml(
      compound.formula
    )} has a mass of <span class="bold">${n.toFixed(
      2
    )}</span> grams. How many moles of <span class="bold">${o}</span> does it contain?</h6>`,
    `<h6>A sample of ${compoundUtils.getHtml(
      compound.formula
    )} contains <span class="bold">${n.toFixed(
      2
    )}</span> moles of compound. How many grams of <span class="bold">${o}</span> does it contain?</h6>`,
    `<h6>A sample of ${compoundUtils.getHtml(
      compound.formula
    )} contains <span class="bold">${n.toFixed(
      2
    )}</span> moles of compound. How many moles of <span class="bold">${o}</span> does it contain?</h6>`,
    `<h6>A sample of ${compoundUtils.getHtml(
      compound.formula
    )} contains <span class="bold">${n.toFixed(
      2
    )}</span> grams of <span class="bold">${o}</span>. What is the total mass of the sample?</h6>`,
    `<h6>A sample of ${compoundUtils.getHtml(
      compound.formula
    )} contains <span class="bold">${n.toFixed(
      2
    )}</span> grams of <span class="bold">${o}</span>. How many moles of compound are present?</h6>`,
    `<h6>A sample of ${compoundUtils.getHtml(
      compound.formula
    )} contains <span class="bold">${n.toFixed(
      2
    )}</span> grams of <span class="bold">${o}</span>. How many grams of <span class="bold">${p}</span> does it contain?</h6>`,
    `<h6>A sample of ${compoundUtils.getHtml(
      compound.formula
    )} contains <span class="bold">${n.toFixed(
      2
    )}</span> grams of <span class="bold">${o}</span>. How many moles of <span class="bold">${p}</span> does it contain?</h6>`,
    `<h6>A sample of ${compoundUtils.getHtml(
      compound.formula
    )} contains <span class="bold">${n.toFixed(
      2
    )}</span> moles of <span class="bold">${o}</span>. What is the total mass of the sample?</h6>`,
    `<h6>A sample of ${compoundUtils.getHtml(
      compound.formula
    )} contains <span class="bold">${n.toFixed(
      2
    )}</span> moles of <span class="bold">${o}</span>. How many moles of the compound are present?</h6>`,
    `<h6>A sample of ${compoundUtils.getHtml(
      compound.formula
    )} contains <span class="bold">${n.toFixed(
      2
    )}</span> moles of <span class="bold">${o}</span>. How many grams of <span class="bold">${p}</span> does it contain?</h6>`,
    `<h6>A sample of ${compoundUtils.getHtml(
      compound.formula
    )} contains <span class="bold">${n.toFixed(
      2
    )}</span> moles of <span class="bold">${o}</span>. How many moles of <span class="bold">${p}</span> does it contain?</h6>`,
  ];

  return {
    questionPayload: {
      html: questions[questionChoice],
      template: "wordProblem",
      answerCount: 1,
      skeletonCount: 3,
      title: `<h6>
          This page presents problems involving chemical formulas.
        </h6>`,
    },
    answerPayload: [
      {
        answer,
        useTolerance: true,
        tolerance: 0.05,
        type: "number",
      },
    ],
  };
};

module.exports = massFormulaWp;
