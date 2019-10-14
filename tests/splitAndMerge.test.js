const splitAndMerge = require("../src/splitAndMerge.js");

test("Example #1", () => {
  expect(splitAndMerge("My name is John", " ")).toBe("M y n a m e i s J o h n");
});
test("Example #2", () => {
  expect(splitAndMerge("Hello World!", ",")).toBe("H,e,l,l,o W,o,r,l,d,!");
});
test("One word", () => {
  expect(splitAndMerge("Hello", "_")).toBe("H_e_l_l_o");
});
test("Empty string", () => {
  expect(splitAndMerge("", ",")).toBe("");
});
test("Empty separator", () => {
  expect(splitAndMerge("Hello World", "")).toBe("Hello World");
});
