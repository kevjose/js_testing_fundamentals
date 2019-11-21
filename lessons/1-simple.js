const { sum, subtract } = require("../math");
let result, expected;
result = sum(7, 3);
expected = 10;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected} `);
}

result = subtract(2, 1);
expected = 1;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected} `);
}
