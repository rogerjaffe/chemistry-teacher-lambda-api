describe("compoundUtils", () => {
  const { getHtml } = require("./compoundUtils");
  test("getHtml", () => {
    expect(getHtml("C4H8O10(NAr)3")).toEqual(
      '<span class="bold">C<sub>4</sub>H<sub>8</sub>O<sub>10</sub>(NAr)<sub>3</sub></span>'
    );
    expect(getHtml("C12H14N2O2")).toEqual(
      '<span class="bold">C<sub>12</sub>H<sub>14</sub>N<sub>2</sub>O<sub>2</sub></span>'
    );
  });

  test("getCompoundBySymbol - not found", () => {
    const { getCompoundBySymbol } = require("./compoundUtils");
    expect(getCompoundBySymbol("A4B3C9")).toBeNull();
  });

  test("getElements - simple compound", () => {
    const { getElements } = require("./compoundUtils");
    const elements = getElements("NH4Cl");
    expect(elements[0].symbol).toEqual("N");
    expect(elements[0].n).toEqual(1);
    expect(elements[1].symbol).toEqual("H");
    expect(elements[1].n).toEqual(4);
    expect(elements[2].symbol).toEqual("Cl");
    expect(elements[2].n).toEqual(1);
  });

  test("getElements - complex compound", () => {
    const { getElements } = require("./compoundUtils");
    const elements = getElements("(NO)4");
    expect(elements[0].symbol).toEqual("O");
    expect(elements[0].n).toEqual(4);
    expect(elements[1].symbol).toEqual("N");
    expect(elements[1].n).toEqual(4);
  });

  test("getCompoundMass 1", () => {
    const { getCompoundMass } = require("./compoundUtils");
    expect(getCompoundMass("FeCl3")).toBeCloseTo(162.1952, 2);
  });

  test("getCompoundMass 2", () => {
    const { getCompoundMass } = require("./compoundUtils");
    expect(getCompoundMass("H2SO4")).toBeCloseTo(98.079, 1);
  });

  test("getMassRatios 1", () => {
    const { getMassRatios } = require("./compoundUtils");
    const els = getMassRatios("H2SO4");
    expect(els[0].pct).toBeCloseTo(0.0205, 2);
    expect(els[1].pct).toBeCloseTo(0.3269, 2);
    expect(els[2].pct).toBeCloseTo(0.6525, 2);
  });

  test("getMassRatios 2", () => {
    const { getMassRatios } = require("./compoundUtils");
    const els = getMassRatios("C2H5NO2");
    expect(els[0].pct).toBeCloseTo(0.32, 2);
    expect(els[1].pct).toBeCloseTo(0.0671, 2);
    expect(els[2].pct).toBeCloseTo(0.1866, 2);
    expect(els[3].pct).toBeCloseTo(0.4264, 2);
  });

  test("getCompoundBySymbol", () => {
    const { getCompoundBySymbol } = require("./compoundUtils");
    expect(getCompoundBySymbol("CH4O").name).toEqual("methanol");
  });

  test("getCompoundsBySeq", () => {
    const { getCompoundsBySeq } = require("./compoundUtils");
    const cList = getCompoundsBySeq(0);
    expect(cList.length).toEqual(3);
    expect(cList[0].formula).toEqual("NaCl");
  });
});
