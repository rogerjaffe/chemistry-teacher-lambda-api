const index = require("./hash");

describe("hash", () => {
  test("returns a SHA512 hash", async () => {
    const params = {
      password: "password",
      salt: "salt",
      pepper: "pepper",
    };
    const response = await index(params);
    const expectedHash =
      "efe1fb22ecb6b4bb369f2a4cfefe6df31e3c78eb896f78e504ac70fad6921e8ea65d95053d74365916725cab14924a5cff0dae909632a95000cf3aaedd7ecd98";
    expect(response).toEqual(expectedHash);
  });
});
