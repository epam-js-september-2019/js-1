const transform = require("../src/transform.js");

test("Example #1", () => {
  expect(transform([10, 20, 30, 40, 50])[3]()).toBe(40);
});
test("Empty input", () => {
  expect(transform([])).toEqual([]);
});
