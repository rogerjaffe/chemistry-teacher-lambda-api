const r = require("random");

const densitywp = () => {
  let $mass = Math.pow(1000, r.float(0.4, 1.5)); // gms
  const $density = Math.pow(10, r.float(0.2)); // mL (cc)
  const $volume = $mass / $density; // gm/mL

  const units = {
    mass: [
      { factor: 1, units: "gm" },
      { factor: 0.001, units: "kg" },
      { factor: 1000, units: "mg" },
    ],
    volume: [
      { factor: 1, units: "cm<sup>3</sup>" },
      { factor: 1, units: "mL" },
      { factor: 0.001, units: "L" },
    ],
    density: [
      { factor: 1, units: "g/mL" },
      { factor: 1, units: "kg/L" },
      { factor: 1000, units: "g/L" },
      { factor: 0.001, units: "mg/mL" },
    ],
  };

  const massObj = units.mass[r.int(0, units.mass.length - 1)];
  const volumeObj = units.volume[r.int(0, units.volume.length - 1)];
  const densityObj = units.density[r.int(0, units.density.length - 1)];
  const mass = ($mass * massObj.factor).toFixed(3);
  const volume = ($volume * volumeObj.factor).toFixed(3);
  const density = ($density * densityObj.factor).toFixed(3);

  const htmls = [
    `What volume in <span class="bold">${volumeObj.units}</span> would be occupied by <span class="bold">${mass}</span> <span class="bold">${massObj.units}</span> of a material with a density of <span class="bold">${density}</span> <span class="bold">${densityObj.units}</span>?`,
    `What is the mass in <span class="bold">${massObj.units}</span> of a <span class="bold">${volume}</span> <span class="bold">${volumeObj.units}</span> sample, if it has a density of <span class="bold">${density}</span> <span class="bold">${densityObj.units}</span> ?`,
    `What is the density of a substance in <span class="bold">${density.units}</span>, if a sample with a volume of <span class="bold">${volume}</span> <span class="bold">${volumeObj.units}</span> has a mass of <span class="bold">${mass}</span> <span class="bold">${massObj.units}</span>?`,
  ];
  const answers = [
    {
      answer: volume + "",
      useTolerance: true,
      tolerance: 0.05,
      type: "number",
    },
    { answer: mass + "", useTolerance: true, tolerance: 0.05, type: "number" },
    {
      answer: density + "",
      useTolerance: true,
      tolerance: 0.05,
      type: "number",
    },
  ];
  const choice = r.int(0, htmls.length - 1);

  return {
    questionPayload: {
      html: htmls[choice],
      template: "wordProblem",
      answerCount: 1,
      skeletonCount: 3,
      title: `<h6>
          This page presents random word problems in the areas of mass, density
          and volume.
        </h6>`,
    },
    answerPayload: [answers[choice]],
  };
};

module.exports = densitywp;
