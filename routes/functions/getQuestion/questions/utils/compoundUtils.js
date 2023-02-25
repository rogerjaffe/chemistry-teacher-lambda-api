const compoundParse = require("compound-parser");
const periodicTable = require("./periodicTable");
const compoundUtils = require("./compoundUtils");
const { compoundList } = require("./compoundList");
const r = require("random");

exports.getHtml = (formula) => {
  const html = formula.replace(/[0-9]+/g, (match) => `<sub>${match}</sub>`);
  return `<span class="bold">${html}</span>`;
};

exports.getHtmlWithCoefficient = (coefficient, formula) => {
  const _c =
    coefficient === 1 ? "" : `<span class="bold">${coefficient}</span>`;
  return `${_c}${compoundUtils.getHtml(formula)}`;
};

exports.getElements = (formula) => {
  const els = Array.from(compoundParse(formula));
  return els.map((el) => {
    return {
      symbol: el[0],
      n: el[1],
      info: periodicTable.findBySymbol(el[0]),
    };
  });
};

exports.getCompoundMass = (formula) => {
  const compoundInfo = compoundUtils.getElements(formula);
  return compoundInfo.reduce((sum, el) => sum + el.info.atomic_mass * el.n, 0);
};

exports.getMassRatios = (formula) => {
  let elements = compoundUtils.getElements(formula);
  const totalMass = compoundUtils.getCompoundMass(formula);
  return elements.map((el) => {
    el.pct = (el.info.atomic_mass * el.n) / totalMass;
    return el;
  });
};

exports.getCompoundBySymbol = (formula) =>
  compoundList.find((c) => c.formula === formula) ?? null;

exports.getCompoundsBySeq = (seq) => {
  return compoundList.filter((c) => c.seq.includes(seq));
};

exports.getRandomCompoundBySeq = (seq) => {
  const cList = compoundUtils.getCompoundsBySeq(seq);
  return cList[r.int(0, cList.length - 1)];
};

exports.getRandomCompound = (seq) => {
  const filtered = compounds.getCompound(seq);
  if (filtered.length === 0) {
    return null;
  }
  return filtered[r.int(0, filtered.length - 1)];
};
