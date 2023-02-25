const r = require("random");
module.exports = (data, n = 1) => {
  if (n === 1) {
    return data[r.int(0, data.length - 1)];
  } else {
    const choices = [];
    for (let i = 0; i < n; i++) {
      const c = r.int(0, data.length - 1);
      choices.push(data[c]);
      data = data.slice(c, c + 1);
    }
    return choices;
  }
};
