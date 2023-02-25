const updateTeacher = require("./updateTeacher");

describe("updateTeacher", () => {
  test("should return null", async () => {
    const res = await updateTeacher({
      email: "testValue",
      lastName: "testValue",
      firstName: "testValue",
      school: "testValue",
    });
    const exp = [
      {
        Update: {
          ExpressionAttributeValues: {
            ":val1": { S: "testValue" },
            ":val2": { S: "testValue" },
            ":val3": { S: "testValue" },
          },
          Key: { email: { S: "testValue" } },
          TableName: "teachers",
          UpdateExpression:
            "SET lastName = :val1, firstName = :val2, school = :val3",
        },
      },
    ];
    expect(res).toEqual(exp);
  });
});
