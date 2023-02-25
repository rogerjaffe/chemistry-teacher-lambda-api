const r = require("random");
const R = require("ramda");
const randomlyChooseOne = require("../utils/randomlyChooseN");

const boylesLaw = () => {
  let v1 = Math.pow(10, r.float());
  let dimV1 = "L";
  let v2 = Math.pow(10, r.float());
  let dimV2 = "L";
  let p1 = Math.pow(10, r.float());
  let dimP1 = "atm";
  let p2 = (v1 * p1) / v2;
  let dimP2 = "atm";

  if (r.boolean()) {
    p1 = 760 * p1;
    dimP1 = "torr";
  }
  if (r.boolean()) {
    p2 = 760 * p2;
    dimP2 = "torr";
  }
  if (r.boolean()) {
    v1 = 1000 * v1;
    dimV1 = "ml";
  }
  if (r.boolean()) {
    v2 = 1000 * v2;
    dimV1 = "ml";
  }

  const values = [p1, dimP1, v1, dimV1, "", p2, dimP2, v2, dimV2];
  const answerIdx = r.int(0, 3);
  const indexes = [0, 2, 5, 7];
  const answer = values[indexes[answerIdx]];

  return {
    questionPayload: {
      headers: [
        "P<sub>1</sub>",
        "",
        "V<sub>1</sub>",
        "",
        "",
        "P<sub>2</sub>",
        "",
        "V<sub>2</sub>",
        "",
      ],
      values: [
        answerIdx === 0 ? "$input-0" : p1.toFixed(2),
        dimP1,
        answerIdx === 1 ? "$input-0" : v1.toFixed(2),
        dimV1,
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        answerIdx === 2 ? "$input-0" : p2.toFixed(2),
        dimP2,
        answerIdx === 3 ? "$input-0" : v2.toFixed(2),
        dimV2,
      ],
      template: "table",
      width: "",
      cellPadding: "5px",
      cellSpacing: "5px",
      borders: true,
      answerCount: 1,
      skeletonCount: 7,
      title: `<h6>
          Boyle's Law states that under conditions of constant temperature and quantity, there is an inverse relationship between the volume and pressure for an ideal gas. Calculate the missing quantity, paying close attention to all of the dimensions.
        </h6>`,
    },
    answerPayload: [
      {
        answer: answer + "",
        useTolerance: true,
        tolerance: 0.05,
        type: "number",
      },
    ],
  };
};

module.exports = boylesLaw;
