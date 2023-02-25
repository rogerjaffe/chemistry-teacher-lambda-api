describe("validateTeacherInfo", () => {
  const validateTeacherInfo = require("./validateTeacherInfo");

  test("valid email", async () => {
    const email = "validEmail@abc.com";
    const newEvent = validateTeacherInfo(email);
    expect(newEvent).toBeTruthy();
  });

  test("invalid email #1", async () => {
    const email = "invalidEmail @abc.com";
    const newEvent = validateTeacherInfo(email);
    expect(newEvent).toBeFalsy();
  });

  test("invalid email #2", async () => {
    const email = "invalidEmail@hotmail";
    const newEvent = validateTeacherInfo(email);
    expect(newEvent.error).toBeFalsy();
  });
});
