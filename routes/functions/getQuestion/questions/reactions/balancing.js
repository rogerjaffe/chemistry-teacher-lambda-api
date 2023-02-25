const r = require("random");
const { getRandomEquation } = require("../utils/equations");
const compoundUtils = require("../utils/compoundUtils");

const balancing = () => {
  const equation = getRandomEquation();
  const left = [],
    right = [],
    answers = [];
  equation.left.forEach((d, idx) => {
    left.push("$input-" + idx);
    left.push(`${compoundUtils.getHtml(d.formula)}`);
    answers.push({ answer: d.coefficient + "", type: "number" });
  });
  equation.right.forEach((d, idx) => {
    right.push("$input-" + (equation.left.length + idx));
    right.push(`${compoundUtils.getHtml(d.formula)}`);
    answers.push({ answer: d.coefficient + "", type: "number" });
  });
  const values = left.concat([" => "]).concat(right);
  return {
    questionPayload: {
      values,
      headers: null,
      template: "table",
      skeletonCount: 3,
      title: `<h6>
        This page is an exercise in balancing chemical reactions. In front of each chemical species will be an input box.
        Put the proper coefficient in each cell. Use the smallest set of <bold>integer</bold> coefficients.  
      </h6>`,
    },
    answerPayload: answers,
  };

  // let atom = periodicTable.getRandomElement();
  // let mass = r.float(1, 1000).toFixed(2);
  // let moles = (mass / atom.atomic_mass).toFixed(4);
  //
  // const units = {
  //   mass: ["grams", "kg", "mg"],
  //   moles: ["moles", "mmoles"],
  // };
  // const massUnit = units.mass[r.int(0, 2)];
  // const moleUnit = units.moles[r.int(0, 1)];
  // if (moleUnit === "mmoles") {
  //   moles = (moles * 1000).toFixed(4);
  // }
  //
  // let htmls = [
  //   `How many <span class="bold">${moleUnit}</span> is <span class="bold">${mass}</span> <span class="bold">${massUnit}</span> of <span class="bold">${atom.symbol}</span>?`,
  //   `What is the mass in <span class="bold">${massUnit}</span> of <span class="bold">${moles}</span> <span class="bold">${moleUnit}</span> of <span class="bold">${atom.symbol}</span>?`,
  //   `What is the element if <span class="bold">${moles}</span> <span class="bold">${moleUnit}</span> has a mass of <span class="bold">${mass}</span> <span class="bold">${massUnit}</span>?`,
  // ];
  // let answers = [
  //   { answer: moles + "", useTolerance: true, tolerance: 0.05, type: "number" },
  //   { answer: mass + "", useTolerance: true, tolerance: 0.05, type: "number" },
  //   { answer: atom.symbol.toLowerCase(), type: "string" },
  // ];
  //
  // const choice = r.int(0, htmls.length - 1);
  //
  // return {
  //   questionPayload: {
  //     html: htmls[choice],
  //     template: "wordProblem",
  //     answerCount: 1,
  //     skeletonCount: 3,
  //     title: `<h6>
  //         This page presents random "word" problems in the area of elements, mass and moles.
  //       </h6>`,
  //   },
  //   answerPayload: [answers[choice]],
  // };
};

module.exports = balancing;
