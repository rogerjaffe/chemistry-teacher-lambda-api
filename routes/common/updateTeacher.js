/**
 * Update the teacher's student list
 *   params object may contain one or more of:
 *     email,
 *     lastName,
 *     firstName,
 *     school,
 *     questionFilter,
 *     studentListJSON,
 *     salt,
 *     passwordHash
 *
 * @param params:(*)
 * @returns {<*>}
 */
module.exports = (params) => {
  const fields = [
    "email",
    "lastName",
    "firstName",
    "school",
    "questionFilter",
    "studentListJSON",
    "salt",
    "passwordHash",
  ];
  const updateExpressionFactory = (field, idx) => field + " = :val" + idx;
  let idx = 1;
  const updateExpressionItems = fields.reduce(
    (acc, field) => {
      if (field !== "email" && params[field]) {
        acc.ue.push(updateExpressionFactory(field, idx));
        acc.eav[":val" + idx] = { S: params[field] };
        idx++;
      }
      return acc;
    },
    { ue: [], eav: {} }
  );
  const UpdateExpression = "SET " + updateExpressionItems.ue.join(", ");
  // const UpdateExpression =
  //   "SET lastName = :val1, firstName = :val2, school = :val3, questionFilter = :val4, studentListJSON = :val5" +
  //   (params.password.length > 0 ? ", salt = :val6" : "");
  // params.password.length > 0 ? ", passwordHash = :val7" : "";
  // const ExpressionAttributeValues = {
  //   ":val1": { S: params.lastName },
  //   ":val2": { S: params.firstName },
  //   ":val3": { S: params.school },
  //   ":val4": { S: params.questionFilter },
  //   ":val5": { S: params.studentListJSON },
  // };
  // if (params.password.length > 0) {
  //   ExpressionAttributeValues[":val6"] = { S: params.salt };
  //   ExpressionAttributeValues[":val7"] = { S: params.passwordHash };
  // }

  const TABLE_NAME = "teachers";
  const dbParams = {
    Update: {
      TableName: TABLE_NAME,
      Key: {
        email: {
          S: params.email,
        },
      },
      UpdateExpression,
      ExpressionAttributeValues: updateExpressionItems.eav,
    },
  };
  return [dbParams];
  //
  // try {
  //   await ddbClient.send(new UpdateItemCommand(dbParams));
  //   return null;
  // } catch (e) {
  //   throw e;
  // }
};
