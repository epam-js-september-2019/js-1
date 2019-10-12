const myBind = require("../src/myBind.js");

test("Without args", () => {
  Function.prototype.myBind = myBind;
  function f(a, b) {
    return this.value * 2;
  }
  expect(f.myBind({ value: 3 })()).toBe(6);
});
test("With args", () => {
  Function.prototype.myBind = myBind;
  function f(a, b) {
    return this.value + a + b;
  }
  expect(f.myBind({ value: 1 }, 2, 3)()).toBe(6);
});
test("With own args", () => {
  Function.prototype.myBind = myBind;
  function f(a, b) {
    return this.value + a + b;
  }
  expect(f.myBind({ value: 1 }, 2)(7)).toBe(10);
});
