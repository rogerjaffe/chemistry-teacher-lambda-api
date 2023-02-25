const r = require("random");

const convertDensity = () => {
  let gml = Math.pow(10, r.float());
  gml = Math.trunc(100 * gml) / 100;

  let vals = [
    { val: gml, text: "g/ml" },
    { val: Math.round(1e6 * gml) / 1000, text: "g/l" },
    { val: gml, text: "kg/l" },
    { val: gml + " E+6", text: "mg/l" },
    { val: gml + " E-3", text: "kg/ml" },
    { val: Math.round(1e6 * gml) / 1000, text: "mg/ml" },
  ];

  vals = vals.sort((a, b) => 0.5 - r.float());
  const known = vals[0];
  const unknown = vals[1];

  const response = {
    questionPayload: {
      template: "table",
      answerCount: 1,
      width: "",
      cellSpacing: 5,
      cellPadding: 10,
      skeletonCount: 6,
      title: `<h6>
          This page is an exercise in converting densities expressed in the
          metric system. It is not really an exercise in density, but rather
          drill and practice so that you can become familiar with using the
          metric system. To practice:
        </h6>

        <h6>
          Enter the value which the density would have when expressed in the
          units shown in the fourth cell and press "Check Answer."
        </h6>
        <h6>
          Scientific notation is represented using the "E" notation. Thus,
          2.3*10<sup>3</sup> will be shown by 2.3 E+3. You must use this
          notation in submitting answers in scientific notation.
        </h6>`,
      values: [
        `<span class="bold">${known.val}</span>`,
        `<span class="bold">${known.text}</span>`,
        "equals",
        "$input-0",
        `<span class="bold">${unknown.text}</span>`,
      ],
      sciNot: typeof unknown.val === "string",
    },
    answerPayload: [
      {
        answer: unknown.val + "",
        useTolerance: true,
        tolerance: 0.05,
        type: "number",
      },
    ],
  };
  return response;
};

module.exports = convertDensity;
