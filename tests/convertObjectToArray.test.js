const convertObjectToArray = require("../src/convertObjectToArray.js");

test("Example #1", () => {
  expect(
    convertObjectToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })
  ).toEqual([["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]);
});
test("Empty object", () => {
  expect(convertObjectToArray({})).toEqual([]);
});
test("Nested object", () => {
  expect(
    convertObjectToArray({
      name: "Bob",
      info: { age: 28, role: "Key presser" }
    })
  ).toEqual([["name", "Bob"], ["info", { age: 28, role: "Key presser" }]]);
});
