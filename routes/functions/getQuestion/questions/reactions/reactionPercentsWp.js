const random = require("random");
const { getRandomEquationWithFourReagents } = require("../utils/equations");
const compoundUtils = require("../utils/compoundUtils");
const periodicTable = require("../utils/periodicTable");

const reactionPercentsWp = () => {
  let reaction = getRandomEquationWithFourReagents();
  const massBase = random.float(1, 100);
  const masst =
    compoundUtils.getCompoundMass(reaction.left[0].formula) *
    reaction.left[0].coefficient;
  reaction.left = reaction.left.map((rxn) => {
    rxn.ratio =
      (compoundUtils.getCompoundMass(rxn.formula) * rxn.coefficient) / masst;
    rxn.mass = massBase * rxn.ratio;
    return rxn;
  });
  reaction.right = reaction.right.map((rxn) => {
    rxn.ratio =
      (compoundUtils.getCompoundMass(rxn.formula) * rxn.coefficient) / masst;
    rxn.mass = massBase * rxn.ratio;
    return rxn;
  });
  const eqn = `${compoundUtils.getHtmlWithCoefficient(
    reaction.left[0].coefficient,
    reaction.left[0].formula
  )} + ${compoundUtils.getHtmlWithCoefficient(
    reaction.left[1].coefficient,
    reaction.left[1].formula
  )} => ${compoundUtils.getHtmlWithCoefficient(
    reaction.right[0].coefficient,
    reaction.right[0].formula
  )} + ${compoundUtils.getHtmlWithCoefficient(
    reaction.right[1].coefficient,
    reaction.right[1].formula
  )}`;
  let p, r, mass, answerMass, answerPercent, rn, rn1, rn2;
  let which = random.int(0, 1);
  if (which === 0) {
    r = reaction.left[0].formula;
    mass = reaction.left[0].mass;
  } else {
    r = reaction.left[1].formula;
    mass = reaction.left[1].mass;
  }
  which = random.int(0, 1);
  if (which === 0) {
    p = reaction.right[0].formula;
    answerMass = reaction.right[0].mass;
  } else {
    p = reaction.right[1].formula;
    answerMass = reaction.right[1].mass;
  }
  answerPercent = random.int(1, 100);
  answerMass = (answerMass * answerPercent) / 100;

  const header = `<h6>For the following balanced chemical equation</h6><h6>${eqn}</h6>`;
  const questions = [
    `If the reaction of <span class="bold">${mass.toFixed(
      2
    )}</span> grams of ${compoundUtils.getHtml(
      r
    )} produces <span class="bold">${answerMass.toFixed(
      2
    )}</span> grams of ${compoundUtils.getHtml(
      p
    )} what is the percentage yield?`,
    `The reaction of <span class="bold">${mass.toFixed(
      2
    )}</span> grams of ${compoundUtils.getHtml(
      r
    )} produces a <span class="bold">${answerPercent.toFixed(
      2
    )}</span> percentage yield of ${compoundUtils.getHtml(
      p
    )}.  How many grams are produced?`,
  ];

  const questionChoice = random.int(0, 1);
  return {
    questionPayload: {
      html: header + questions[questionChoice],
      template: "wordProblem",
      answerCount: 1,
      skeletonCount: 5,
      title: `<h6>
          This page is an exercise in percent yields.
        </h6>`,
    },
    answerPayload: [
      {
        answer: (questionChoice === 0 ? answerPercent : answerMass) + "",
        type: "number",
        useTolerance: true,
        tolerance: 0.05,
      },
    ],
  };
};

module.exports = reactionPercentsWp;
