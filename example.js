// 01. Split and metge

function splitAndMerge(str, sp) {
  return str
    .split(" ")
    .map(word => word.split(""))
    .map(word => word.join(sp))
    .join(" ");
}

splitAndMerge("My name is John", " ");
splitAndMerge("Hello World!", ",");

// 02. Convert object to array

function convertObjectToArray(obj) {
  return Object.entries(obj);
}

convertObjectToArray({ name: "Jeremy", age: 24, role: "Software Engineer" });

// 03. To CamelCase

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function toCamelCase(str) {
  return str
    .split("-")
    .flatMap(word => word.split("_"))
    .map((word, index) => (index !== 0 ? capitalize(word) : word))
    .join("");
}

toCamelCase("the-stealth-warrior");
toCamelCase("The_Stealth_Warrior");

// 04. Reverse words in a sentence

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map(word => reverse(word))
    .join(" ");
}

reverseWords(" A fun little challenge! ");

// 05. String expansion

function stringExpansion(source) {
  let output = "";
  let coeff = 1;
  for (let ch of source) {
    const num = parseInt(ch);
    if (!isNaN(num)) {
      coeff = num;
    } else {
      output = output + ch.repeat(coeff);
    }
  }
  return output;
}

stringExpansion("3D2a5d2f");
stringExpansion("3d332f2a");
stringExpansion("abcde");

// 06. Largest and smallest

function largest(...numbers) {
  return Math.max(...numbers);
}

function smallest(...numbers) {
  return Math.min(...numbers);
}

largest(2, 0.1, -5, 100, 3);
smallest(2, 0.1, -5, 100, 3);

// 07. Transform array to array of functions

function transform(arr) {
  return arr.map(item => () => item);
}

transform([10, 20, 30, 40, 50])[3]();
transform([10, 20, 30, 40, 50])[4]();

// 08. Sum of arguments

function sum(...numbers) {
  return numbers.reduce((sum, item) => sum + item, 0);
}

sum(1, 3, 5, 7);

// 09. Count down with delay

function countDown(n) {
  console.log(n);
  if (n > 0) {
    setTimeout(countDown.bind({}, n - 1), 1000);
  }
  return;
}

countDown(10);

// 10. Bind implementation

function myBind(context, ...boundedArgs) {
  const f = this;
  function bounded(...originalArgs) {
    return f.apply(context, [...boundedArgs, ...originalArgs]);
  }
  return bounded;
}

Function.prototype.myBind = myBind;

function addPropToNumber(number) {
  return this.prop + number;
}
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1);
