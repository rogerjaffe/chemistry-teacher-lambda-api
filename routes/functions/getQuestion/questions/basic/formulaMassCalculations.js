const r = require("random");
const compoundUtils = require("../utils/compoundUtils");

const formulaMassCalculations = () => {
  const hc = compoundUtils.getRandomCompoundBySeq(17);
  const elements = compoundUtils.getElements(hc.formula);
  const gC = elements.reduce(
    (total, el) => (el.symbol === "C" ? total + 12 * el.n : total),
    0
  );
  const gH = elements.reduce(
    (total, el) => (el.symbol === "H" ? total + el.n : total),
    0
  );
  const gfw = gC + gH;
  const mt = Math.pow(10, r.float()).toFixed(3);
  const mC = (mt * (gC / gfw)).toFixed(3);
  const mH = (mt * (gH / gfw)).toFixed(3);

  const values = [
    [compoundUtils.getHtml(hc.formula), "$input-0", "$input-1", mH],
    [compoundUtils.getHtml(hc.formula), "$input-0", mC, "$input-1"],
    [compoundUtils.getHtml(hc.formula), mt, "$input-0", "$input-1"],
  ];
  const answers = [
    [
      { answer: mt + "", useTolerance: true, tolerance: 0.05, type: "number" },
      { answer: mC + "", useTolerance: true, tolerance: 0.05, type: "number" },
    ],
    [
      { answer: mt + "", useTolerance: true, tolerance: 0.05, type: "number" },
      { answer: mH + "", useTolerance: true, tolerance: 0.05, type: "number" },
    ],
    [
      { answer: mC + "", useTolerance: true, tolerance: 0.05, type: "number" },
      { answer: mH + "", useTolerance: true, tolerance: 0.05, type: "number" },
    ],
  ];
  const choice = r.int(0, values.length - 1);

  return {
    questionPayload: {
      headers: ["Formula", "Mass of compound", "Mass of C", "Mass of H"],
      template: "table",
      answerCount: 2,
      skeletonCount: 5,
      values: values[choice],
      title: `
        <h6 class="text-left">This page is a test of the mass relationships in simple chemical compounds.</h6>
        <h6 class="text-left">To begin, press "New Problem" and a formula will appear in the left cell. Also,
          a value will appear in one of the remaining three cells, corresponding to the mass
          of that particular item in the sample.
          Enter the correct masses in the remaining two cells.</h6>
      `,
    },
    answerPayload: answers[choice],
  };
};

module.exports = formulaMassCalculations;
