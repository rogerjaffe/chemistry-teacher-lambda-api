const r = require("random");
const randomlyChooseOne = require("../utils/randomlyChooseN");

const significantDigits = () => {
  const leadingZeros = () => {
    let g = r.int(0, 3);
    if (g === 0) return "";
    if (g === 1) return "0";
    return "00";
  };

  // Functions to format the number in different ways
  const scientificNotation = (a, num, sig) => {
    let anew = Math.round(a * Math.pow(10, sig)) / Math.pow(10, sig);
    let sign = r.float() < 0.5 ? "" : "-";
    let power = Math.round(Math.pow(1.3, Math.pow(10, r.float())));
    let b = leadingZeros();
    return {
      p1: anew + b + " &times; 10<sup>" + sign + power + "</sup>",
      answerPayload: Math.trunc(sig + 1 + b.length) + "",
    };
  };

  const realNumberLessThanOne = (a, num, sig) => {
    let b = leadingZeros();
    return {
      p1: "0." + b + num,
      answerPayload: Math.trunc(sig + 1) + "",
    };
  };

  const realNumberGreaterThanOne = (a, num, sig) => {
    let b = leadingZeros();
    return {
      p1: num + "." + b,
      answerPayload: Math.trunc(sig + 1 + b.length) + "",
    };
  };

  const addZeros = (a, num, sig) => {
    let b = leadingZeros();
    return { p1: num + b, answerPayload: Math.trunc(sig + 1) + "" };
  };

  const identity = (a, num, sig) => {
    return { p1: num, answerPayload: Math.trunc(sig + 1) + "" };
  };

  const displayRenderOptions = [
    scientificNotation,
    realNumberLessThanOne,
    realNumberGreaterThanOne,
    addZeros,
    identity,
  ];

  const a = r.float(1, 10);
  const sig = r.int(1, 5);
  let num = Math.round(a * Math.pow(10, sig));
  num += num % 10 === 0 ? 1 : 0; // Fix if num ends in 0
  // const answerPayload = Math.trunc(sig + 1) + "";
  // num is an integer with sig+1 significant figures

  const { p1, answerPayload } = randomlyChooseOne(displayRenderOptions)(
    a,
    num,
    sig
  );
  const html = `How many significant figures does <span class="parameter">${p1}</span> have?`;
  return {
    questionPayload: {
      html,
      template: "wordProblem",
      answerCount: 1,
      skeletonCount: 3,
      title: "<h6>Here you can drill regarding significant figures</h6>",
    },
    answerPayload: [
      { answer: answerPayload, useTolerance: false, type: "number" },
    ],
  };
};

module.exports = significantDigits;
