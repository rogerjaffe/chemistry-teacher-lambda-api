const getSecrets = require("../helpers/getSecrets");
jest.mock("../helpers/getSecrets");
const authPassword = require("./authPassword");

describe("authPassword", () => {
  const password = "password";
  const salt = "salt";
  const passwordHash =
    "5054e0586643d74527947310ef4bb6e9f4ae10f72135f36a8fa83b6c425da2cbff687b227e983023a5d2ca7f11f8ddd7df1c9234e7d287b5bd8972f1ca6af77c";

  beforeEach(() => {
    getSecrets.mockReset();
  });

  test("authPassword fails", async () => {
    getSecrets.mockReturnValue({ PEPPER: "abcdef" });
    expect(await authPassword(password, "", salt)).toBeFalsy();
  });

  test("authPassword succeeds", async () => {
    getSecrets.mockReturnValue({ PEPPER: "abcdef" });
    expect(await authPassword(password, passwordHash, salt)).toBeTruthy();
  });
});
