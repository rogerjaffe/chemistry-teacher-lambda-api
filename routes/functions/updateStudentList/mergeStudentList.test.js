describe("functions -> updateStudentList", () => {
  let studentListJSON,
    newStudentListJSON,
    mergedStudentListJSON,
    shouldMerge,
    shouldReplace;

  beforeEach(() => {
    studentListJSON = JSON.stringify([
      { studentId: "a", name: "Roger" },
      { studentId: "b", name: "Cathy" },
      { studentId: "c", name: "Ben" },
      { studentId: "d", name: "Emily" },
      { studentId: "e", name: "Adam" },
      { studentId: "f", name: "Sam" },
    ]);
    newStudentListJSON = JSON.stringify([
      { studentId: "b", name: "Elizabeth" },
      { studentId: "c", name: "Alexander" },
    ]);
    mergedStudentListJSON = JSON.stringify([
      { studentId: "a", name: "Roger" },
      { studentId: "b", name: "Elizabeth" },
      { studentId: "c", name: "Alexander" },
      { studentId: "d", name: "Emily" },
      { studentId: "e", name: "Adam" },
      { studentId: "f", name: "Sam" },
    ]);
    shouldMerge = false;
    shouldReplace = false;
  });

  test("no studentList, copy new list", async () => {
    const mergeStudentList = require("./mergeStudentList");
    let sl = mergeStudentList("[]", newStudentListJSON, false, true);
    expect(sl).toEqual(newStudentListJSON);
  });

  test("shouldReplace = true; replace existing student list", async () => {
    const mergeStudentList = require("./mergeStudentList");
    let sl = mergeStudentList(studentListJSON, newStudentListJSON, false, true);
    expect(sl).toEqual(newStudentListJSON);
  });

  test("shouldXXX flags both false; merge existing student list", async () => {
    const mergeStudentList = require("./mergeStudentList");
    let sl = mergeStudentList(
      studentListJSON,
      newStudentListJSON,
      false,
      false
    );
    expect(sl).toEqual(mergedStudentListJSON);
  });

  test("shouldMerge = true; merge into existing student list", async () => {
    const mergeStudentList = require("./mergeStudentList");
    let sl = mergeStudentList(studentListJSON, newStudentListJSON, true, false);
    expect(sl).toEqual(mergedStudentListJSON);
  });

  test("shouldXXX flags both true; merge into existing student list", async () => {
    const mergeStudentList = require("./mergeStudentList");
    let sl = mergeStudentList(studentListJSON, newStudentListJSON, true, true);
    expect(sl).toEqual(mergedStudentListJSON);
  });

  test("shouldMerge = true; merge into existing student list with a new item", async () => {
    const newStudentList = JSON.parse(newStudentListJSON);
    const newStudent = { studentId: "g", name: "Masumi" };
    newStudentList.push(newStudent);
    const mergedStudentList = JSON.parse(mergedStudentListJSON);
    mergedStudentList.push(newStudent);
    const mergeStudentList = require("./mergeStudentList");
    let sl = mergeStudentList(
      studentListJSON,
      JSON.stringify(newStudentList),
      true,
      false
    );
    expect(sl).toEqual(JSON.stringify(mergedStudentList));
  });
});
