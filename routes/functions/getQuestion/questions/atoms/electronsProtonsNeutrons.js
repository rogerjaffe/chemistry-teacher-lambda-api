const r = require("random");
const periodicTable = require("../utils/periodicTable");

const electronsProtonsNeutrons = () => {
  let element = periodicTable.getRandomElement();
  let _charge = null;
  if (element.number <= 2) {
    _charge = r.boolean() ? 1 : 0;
  } else {
    _charge = r.int(0, 3);
  }
  let charge = { value: _charge * (r.boolean() ? -1 : 1), known: true };
  let mass = {
    value: element.isotopes[r.int(0, element.isotopes.length - 1)],
    known: true,
  };
  let symbol = { value: element.symbol, known: true };
  let atomicNumber = { value: element.number, known: true };
  let protons = { value: element.number, known: true };
  let electrons = {
    value: atomicNumber.value - charge.value,
    known: true,
  };
  let neutrons = { value: mass.value - atomicNumber.value, known: true };

  let count = 0;
  protons.known = r.boolean();
  if (r.float() > 0.5) {
    mass.known = false;
  } else {
    neutrons.known = false;
  }
  if (r.float() > 0.5) {
    charge.known = false;
  } else {
    electrons.known = false;
  }

  let values = [protons, mass, charge, electrons, neutrons];
  values = values.map((item) => {
    if (item.known) {
      return item.value;
    } else {
      return "$input-" + count++;
    }
  });
  values = [symbol.value].concat(values);

  let answerPayload = [];
  if (!protons.known) {
    answerPayload.push({ answer: protons.value + "" });
  }
  if (!mass.known) {
    answerPayload.push({
      answer: mass.value + "",
      useTolerance: true,
      tolerance: 0.05,
      type: "number",
    });
  }
  if (!charge.known) {
    answerPayload.push({ answer: charge.value + "", type: "number" });
  }
  if (!electrons.known) {
    answerPayload.push({ answer: electrons.value + "", type: "number" });
  }
  if (!neutrons.known) {
    answerPayload.push({ answer: neutrons.value + "", type: "number" });
  }

  return {
    questionPayload: {
      headers: [
        "Symbol",
        "Protons",
        "Mass #",
        "Charge",
        "Electrons",
        "Neutrons",
      ],
      template: "table",
      answerCount: answerPayload.length,
      skeletonCount: 3,
      values,
      title: `<h6>
          This page is an exercise in relating the number of protons, electrons and neutrons for an atom or monoatomic ion. An elemental symbol will appear in the first cell and several other cells will have values. Fill in the empty cells (all of the values are integers).
        </h6>`,
    },
    answerPayload,
  };
};

module.exports = electronsProtonsNeutrons;
