const r = require("random");
const R = require("ramda");

const combinedGasLaw = () => {
  let v1 = Math.pow(10, r.float());
  let dimV1 = "L";
  let v2 = Math.pow(10, r.float());
  let dimV2 = "L";
  let T1 = r.float(0, 1000);
  let dimT1 = "K";
  let T2 = v2 * (T1 / v1);
  let dimT2 = "K";

  if (r.boolean()) {
    T1 = T1 - 273;
    dimT1 = "C";
  }
  if (r.boolean()) {
    T2 = T2 - 273;
    dimT2 = "C";
  }
  if (r.boolean()) {
    v1 = 1000 * v1;
    dimV1 = "ml";
  }
  if (r.boolean()) {
    v2 = 1000 * v2;
    dimV1 = "ml";
  }

  const values = [T1, dimT1, v1, dimV1, "", T2, dimT2, v2, dimV2];
  const answerIdx = r.int(0, 3);
  const indexes = [0, 2, 5, 7];
  const answer = values[indexes[answerIdx]];

  return {
    questionPayload: {
      headers: [
        "T<sub>1</sub>",
        "",
        "V<sub>1</sub>",
        "",
        "",
        "T<sub>2</sub>",
        "",
        "V<sub>2</sub>",
        "",
      ],
      values: [
        answerIdx === 0 ? "$input-0" : T1.toFixed(2),
        dimT1,
        answerIdx === 1 ? "$input-0" : v1.toFixed(2),
        dimV1,
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
        answerIdx === 2 ? "$input-0" : T2.toFixed(2),
        dimT2,
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
          The combined gas law deals with gas systems where the quantity of the gas is kept constant. It permits the treatment of "changes of state where five of the remaining six possible variables are given. When you press "New Problem", all but one of the cells will fill. Pay close attention to all of the dimensions. 
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

module.exports = combinedGasLaw;
