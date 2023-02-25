describe("equations", () => {
  const equations = require("./equations");
  const testEquation1 = {
    left: [
      { formula: "Na", coefficient: 2, factor: 1 },
      { formula: "H2O", coefficient: 2, factor: 0.7836094298738774 },
    ],
    right: [
      { formula: "NaOH", coefficient: 2, factor: 1.7397638397926747 },
      { formula: "H2", coefficient: 1, factor: 0.0438455900812028 },
    ],
  }
  const testEquation2 =   {
    left: [
      { formula: "C2H5OH", coefficient: 1, factor: 1 },
      { formula: "O2", coefficient: 3, factor: 2.083700536152293 },
    ],
    right: [
      { formula: "CO2", coefficient: 2, factor: 1.9105689292148733 },
      { formula: "H2O", coefficient: 3, factor: 1.17313160693742 },
    ],
  }

  test('getEquation', () => {
    const eqn = equations.getEquation(3);
    expect(eqn).toEqual(testEquation1);
  })

  test("getRandomEquation", () => {
    const random = require("random");
    random._addReturnValue(3);
    const eqn = equations.getRandomEquation();
    expect(eqn).toEqual(testEquation1);
  });

  test('getRandomEquationWithFourReagents', () => {
    const random = require('random');
    random._addReturnValue(3);
    const eqn = equations.getRandomEquationWithFourReagents();
    expect(eqn).toEqual(testEquation2);
  })
});
