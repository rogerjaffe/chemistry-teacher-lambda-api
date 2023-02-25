const random = require("random");
const { getRandomEquationWithFourReagents } = require("../utils/equations");
const compoundUtils = require("../utils/compoundUtils");
const periodicTable = require("../utils/periodicTable");

const reactionMassesWp = () => {
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
  let p, r, mass, answer, rn, rn1, rn2;
  const questionNumber = random.int(0, 2);
  switch (questionNumber) {
    case 0:
      rn = random.int(0, 1);
      p = rn === 0 ? reaction.left[0].formula : reaction.left[1].formula;
      r = rn === 0 ? reaction.left[1].formula : reaction.left[0].formula;
      mass =
        massBase * (rn === 0 ? reaction.left[1].ratio : reaction.left[0].ratio);
      answer =
        massBase * (rn === 0 ? reaction.left[0].ratio : reaction.left[1].ratio);
      break;

    case 1:
      rn1 = random.int(0, 1);
      rn2 = random.int(0, 2);
      p = rn1 === 0 ? reaction.right[0].formula : reaction.right[1].formula;
      r = rn2 === 0 ? reaction.left[0].formula : reaction.left[1].formula;
      mass =
        massBase *
        (rn2 === 0 ? reaction.left[0].ratio : reaction.left[1].ratio);
      answer =
        massBase *
        (rn1 === 0 ? reaction.right[0].ratio : reaction.right[1].ratio);
      break;

    case 2:
      rn = random.int(0, 1);
      p = rn === 0 ? reaction.right[0].formula : reaction.right[1].formula;
      r = rn === 0 ? reaction.right[1].formula : reaction.right[0].formula;
      mass =
        massBase *
        (rn === 0 ? reaction.right[1].ratio : reaction.right[0].ratio);
      answer =
        massBase *
        (rn === 0 ? reaction.right[0].ratio : reaction.right[1].ratio);
      break;
  }

  const header = `<h6>For the following balanced chemical equation</h6><h6>${eqn}</h6>`;
  const questions = [
    `How many grams of ${compoundUtils.getHtml(
      p
    )} will react with <span class="bold">${mass.toFixed(
      2
    )}</span> grams of ${compoundUtils.getHtml(r)}?`,
    `How many grams of ${compoundUtils.getHtml(
      p
    )} will be produced by the reaction of <span class="bold">${mass.toFixed(
      2
    )}</span> grams of ${compoundUtils.getHtml(r)}?`,
    `How many grams of ${compoundUtils.getHtml(
      p
    )} will be produced, if <span class="bold">${mass.toFixed(
      2
    )}</span> grams of ${compoundUtils.getHtml(r)} are produced?`,
  ];

  return {
    questionPayload: {
      html: header + questions[questionNumber],
      template: "wordProblem",
      answerCount: 1,
      skeletonCount: 5,
      title: `<h6>
          This page is an exercise in basic stoichiometry. A reaction with a question will appear.
        </h6>`,
    },
    answerPayload: [
      {
        answer: answer + "",
        type: "number",
        useTolerance: true,
        tolerance: 0.05,
      },
    ],
  };
};

module.exports = reactionMassesWp;
