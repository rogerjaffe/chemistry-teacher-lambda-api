const r = require("random");
const R = require("ramda");
const randomlyChooseOne = require("../utils/randomlyChooseN");

const avogadrosLaw = () => {
  let v1 = Math.pow(10, r.float()).toFixed(2);
  let v2 = Math.pow(10, r.float()).toFixed(2);
  const n1 = r.float().toFixed(2);
  const n2 = (v2 * (n1 / v1)).toFixed(2);

  const dimV1 = r.boolean() ? "mL" : "L";
  if (dimV1 === "ml") v1 = (v1 * 1000).toFixed(2);
  const dimV2 = r.boolean() ? "ml" : "L";
  if (dimV2 === "ml") v2 = (v2 * 1000).toFixed(2);

  const values = [n1, v1, n2, v2];
  const answerIdx = r.int(0, 3);
  const answer = values[answerIdx];

  return {
    questionPayload: {
      headers: [
        "n<sub>1</sub>",
        "V<sub>1</sub>",
        "",
        "",
        "n<sub>2</sub>",
        "V<sub>2</sub>",
        "",
      ],
      values: [
        answerIdx === 0 ? "$input-0" : n1,
        answerIdx === 1 ? "$input-0" : v1,
        dimV1,
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        answerIdx === 2 ? "$input-0" : n2,
        answerIdx === 3 ? "$input-0" : v2,
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
          Avogadro's Law states that under conditions of constant pressure and temperature, there is a direct relationship between the volume and number of moles for an ideal gas. Calculate the missing quantity, paying close attention to all of the dimensions.
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

module.exports = avogadrosLaw;
