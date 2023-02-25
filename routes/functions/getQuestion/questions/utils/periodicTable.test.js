describe("periodicTable", () => {
  const periodicTable = require("./periodicTable");

  test("findByNumber", () => {
    expect(periodicTable.findByNumber(8).name).toEqual("Oxygen");
  });

  test("findByName", () => {
    expect(periodicTable.findByName("carbon").name).toEqual("Carbon");
  });

  test("findBySymbol", () => {
    expect(periodicTable.findBySymbol("Ne").name).toEqual("Neon");
  });

  test("getRandomElement", () => {
    expect(periodicTable.getRandomElement()).not.toBeNull();
  });
});
