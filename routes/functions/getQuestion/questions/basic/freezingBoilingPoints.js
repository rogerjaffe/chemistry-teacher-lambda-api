const r = require("random");
const compoundUtils = require("../utils/compoundUtils");

const freezingBoilingPoints = () => {
  const solute = compoundUtils.getRandomCompoundBySeq(16);
  const formula = compoundUtils.getHtml(solute.formula);
  const gfw = compoundUtils.getCompoundMass(solute.formula);
  let b = r.float(0, solute.gs);
  if (b > 10) {
    b = b.toFixed(1);
  } else if (b < 0.1) {
    b = b.toFixed(3);
  } else {
    b = b.toFixed(2);
  }
  const m = r.int(100, 1099);
  const moles = b / gfw;
  const u = ((moles * 1000) / m) * solute.parts;
  const fp = (-1.86 * u).toFixed(2);
  const bp = (100 + 0.512 * u).toFixed(2);

  const values = [
    [formula, "$input-0", m, fp, "$input-1"],
    [formula, "$input-0", m, "$input-1", bp],
    [formula, b, "$input-0", "$input-1", bp],
    [formula, b, "$input-0", fp, "$input-1"],
    [formula, b, m, "$input-0", "$input-1"],
  ];
  const answers = [
    [
      { answer: b + "", useTolerance: true, tolerance: 0.05, type: "number" },
      { answer: bp + "", useTolerance: true, tolerance: 0.05, type: "number" },
    ],
    [
      { answer: b + "", useTolerance: true, tolerance: 0.05, type: "number" },
      { answer: fp + "", useTolerance: true, tolerance: 0.05, type: "number" },
    ],
    [
      { answer: m + "", useTolerance: true, tolerance: 0.05, type: "number" },
      { answer: fp + "", useTolerance: true, tolerance: 0.05, type: "number" },
    ],
    [
      { answer: m + "", useTolerance: true, tolerance: 0.05, type: "number" },
      { answer: bp + "", useTolerance: true, tolerance: 0.05, type: "number" },
    ],
    [
      { answer: fp + "", useTolerance: true, tolerance: 0.05, type: "number" },
      { answer: bp + "", useTolerance: true, tolerance: 0.05, type: "number" },
    ],
  ];
  const choice = r.int(0, values.length - 1);

  return {
    questionPayload: {
      headers: ["Solute", "Solute (grams)", "Water mass (g)", "FP", "BP"],
      template: "table",
      answerCount: 2,
      skeletonCount: 5,
      values: values[choice],
      title: `
        <h6 class="text-left">This page is an exercise in colligative properties. A solute formula will appear in the first cell and
        two of the other cells will show values.</h6>
        <h6 class="bold text-left">Hints</h6>
        <h6 class="text-left">&bull; Be careful about dissociating solutes</h6>
        <h6 class="text-left">&bull; All solutions are treated as ideal</h6>
        <h6 class="text-left">&bull; It is assumed there are not additional processes beyond the possible solute dissociation</h6>
        <h6 class="text-left">&bull; You should continue to work on a problem until you get it correct, but you can get a new problem at any time.</>
      `,
    },
    answerPayload: answers[choice],
  };
};

module.exports = freezingBoilingPoints;
