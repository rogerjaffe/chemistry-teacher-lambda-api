const random = jest.createMockFromModule("random");

let returnValues = [];
const _addReturnValue = (val) => returnValues.push(val);

const int = () => {
  return returnValues.shift();
};

random.int = int;
random._addReturnValue = _addReturnValue;
module.exports = random;
