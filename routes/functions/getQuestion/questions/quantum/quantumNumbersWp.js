const r = require("random");

const quantumNumbersWp = () => {
  let l = r.int(0, 8);
  let ml = r.int(0, 8) * (r.int() < 0.5 ? -1 : 1);
  let n = r.int(1, 8);
  let syms = ["s", "p", "d", "f", "g", "h", "i", "j", "k"];
  let sym = syms[l];
  let questionType = r.int(0, 7);
  let v1, v2, ans;
  switch (questionType) {
    case 0:
      v1 = n;
      v2 = "";
      ans = n - 1;
      break;
    case 1:
      v1 = n;
      v2 = l;
      ans = l <= n - 1 ? "y" : "n";
      break;
    case 2:
      v1 = n;
      v2 = "";
      ans = n * n;
      break;
    case 3:
      v1 = n;
      v2 = "";
      ans = 2 * n * n;
      break;
    case 4:
      v1 = l;
      v2 = ml;
      ans = Math.abs(ml) <= l ? "y" : "n";
      break;
    case 5:
      v1 = l;
      v2 = "";
      ans = 2 * l + 1;
      break;
    case 6:
      v1 = n + sym;
      v2 = "";
      ans = l <= n - 1 ? "y" : "n";
      break;
    case 7:
      v1 = sym;
      v2 = "";
      ans = l;
  }

  const htmls = [
    `<span>
      For a principle quantum number <span class="variable">n</span>, equal to ${v1}, what is the largest
      allowed value of <span class="variable">l</span>?
    </span>`,
    `<span>
      For a principle quantum number <span class="variable">n</span>, equal to ${v1}, is it possible for <span class="variable">l</span> 
      to be equal to ${v2}?
    </span>`,
    `<span>
      For a principle quantum number <span class="variable">n</span>, equal to ${v1}, what is the total
      number of orbitals permitted?
    </span>`,
    `<span>
      For a principle quantum number <span class="variable">n</span>, equal to ${v1}, what is the total
      electron capacity of that level?
    </span>`,
    `<span>
      For the quantum number <span class="variable">l</span>, equal to ${v1}, is an <span class="variable">ml</span> value of ${v2} permitted?
    </span>`,
    `<span>
      For the quantum number <span class="variable">l</span>, equal to ${v1}, how many orbitals of that type are permitted?
    </span>`,
    `<span>
      Is the <b>${v1}</b> orbital permitted?
    </span>`,
    `<span>
      What is the <span class="variable">ml</span> quantum number for an <span class="bold">${v1}</span> orbital?)
    </span>`,
  ];

  return {
    questionPayload: {
      html: htmls[questionType],
      template:
        questionType === 1 || questionType === 4 || questionType === 6
          ? "wordProblemSelect"
          : "wordProblem",
      selectOptions:
        questionType === 1 || questionType === 4 || questionType === 6
          ? [
              { value: "y", text: "Yes" },
              { value: "n", text: "No" },
            ]
          : null,
      answerCount: 1,
      skeletonCount: 5,
      title: `<h6>
          This is an exercise in using and understanding the quantum numbers. Based upon the nature of the question, you will answer it by entering a number or a Y or N in the cell.
        </h6>`,
    },
    answerPayload: [
      {
        answer: ans + "",
        type: ans === "y" || ans === "n" ? "string" : "number",
      },
    ],
  };
};

module.exports = quantumNumbersWp;
