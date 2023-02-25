const random = require("random");
const { getRandomEquationWithFourReagents } = require("../utils/equations");
const compoundUtils = require("../utils/compoundUtils");
const { makeBold } = require("../utils/html");

const limitingReagentsWp = () => {
  let reaction = getRandomEquationWithFourReagents();

  const c1 = reaction.left[0].formula;
  const c2 = reaction.left[1].formula;
  const c1Mass = random.float(50, 1000);

  const c2C1MolarRatio =
    reaction.left[1].coefficient / reaction.left[0].coefficient;
  const molesC1 = c1Mass / compoundUtils.getCompoundMass(c1);
  const requiredMolesC2 = molesC1 * c2C1MolarRatio;
  const adjustmentFactor =
    1 + (random.bool() ? -1 : 1) * random.float(0.05, 0.3);
  const actualMolesC2 = requiredMolesC2 * adjustmentFactor;
  const c2Mass = actualMolesC2 * compoundUtils.getCompoundMass(c2);
  const answer =
    actualMolesC2 > requiredMolesC2
      ? reaction.left[0].formula.toLowerCase()
      : reaction.left[1].formula.toLowerCase();
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

  const header = `<h6>For the following balanced chemical equation</h6><h6>${eqn}</h6>`;
  const question = `If ${makeBold(
    c1Mass.toFixed(2)
  )} grams of ${compoundUtils.getHtml(c1)} are reacted with ${makeBold(
    c2Mass.toFixed(2)
  )} grams of ${compoundUtils.getHtml(c2)}, what is the limiting reagent?`;

  return {
    questionPayload: {
      html: header + question,
      template: "wordProblemRadio",
      radioOptions: [
        { html: compoundUtils.getHtml(c1), value: c1 },
        { html: compoundUtils.getHtml(c2), value: c2 },
      ],
      answerCount: 1,
      skeletonCount: 5,
      title: `<h6>
          This page is an exercise in identifying limiting reagents.
        </h6>`,
    },
    answerPayload: [
      {
        answer,
        type: "string",
        useTolerance: false,
      },
    ],
  };
};

module.exports = limitingReagentsWp;
