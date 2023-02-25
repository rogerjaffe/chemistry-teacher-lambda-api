const random = require("random");
const { getRandomEquationWithFourReagents } = require("../utils/equations");
const compoundUtils = require("../utils/compoundUtils");
const equations = require("../utils/equations");
const html = require("../utils/html");

const reactionCombinedWp = () => {
  let reaction = getRandomEquationWithFourReagents();
  const mass1 = random.float(5, 100);
  const masses = [
    mass1,
    mass1 * reaction.left[1].factor,
    mass1 * reaction.right[0].factor,
    mass1 * reaction.right[1].factor,
  ];

  const limitingReagentIdx = random.int(1, 3);
  if (random.boolean()) {
    // mass 1 will be limiting
    masses[1] = masses[1] + random.float(0, 20);
  } else {
    // mass 2 will be limiting
    masses[0] = masses[0] + random.float(0, 20);
  }
  let qmass, qcmpd;
  const answer = random.float(40, 100);
  if (random.boolean()) {
    // first product will be the question
    qmass = masses[2] * answer;
    qcmpd = reaction.right[0].formula;
  } else {
    // second product is the question
    qmass = masses[3] * answer;
    qcmpd = reaction.right[1].formula;
  }

  const eqn = equations.getEquationHtml(reaction);

  const header = `
    <h6>This page is an exercise in combining the concepts of limting reagent and percent yield. 
To answer the question, you must first determine the limiting reagent and then base your
calculation of percent yield on that chemical species.</h6>
    <h6>For the following balanced chemical equation</h6><h6>${eqn}</h6>
  `;
  const question = `If the reaction of ${html.makeBold(
    masses[0].toFixed(2)
  )} grams of ${compoundUtils.getHtml(
    reaction.left[0].formula
  )} and ${html.makeBold(
    masses[1].toFixed(2)
  )} grams of ${compoundUtils.getHtml(
    reaction.left[1].formula
  )} produces ${html.makeBold(
    qmass.toFixed(2)
  )} grams of ${qcmpd} what is the % yield?`;

  const questionChoice = random.int(0, 1);
  return {
    questionPayload: {
      html: header + question,
      template: "wordProblem",
      answerCount: 1,
      skeletonCount: 8,
      title: `<h6>
          This page is an exercise in percent yields.
        </h6>`,
    },
    answerPayload: [
      {
        answer: answer,
        type: "number",
        useTolerance: true,
        tolerance: 0.05,
      },
    ],
  };
};

module.exports = reactionCombinedWp;
