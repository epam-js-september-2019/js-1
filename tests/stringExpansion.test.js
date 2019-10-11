const stringExpansion = require("../src/stringExpansion.js");

test("Example #1", () => {
  expect(stringExpansion("3D2a5d2f")).toEqual("DDDaadddddff");
});
test("Example #2", () => {
  expect(stringExpansion("3d332f2a")).toEqual("dddffaa");
});
test("Example #3", () => {
  expect(stringExpansion("abcde")).toEqual("abcde");
});
test("More than one char behind a number", () => {
  expect(stringExpansion("3abc")).toEqual("aaabbbccc");
});
test("Empty string", () => {
  expect(stringExpansion("")).toEqual("");
});
