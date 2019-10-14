//Task #1

function splitAndMerge(str, sp)  {
var arr = str.split("");
for (var i = 0; i <= arr.length; i++) {
if (arr[i] == " ") {
arr.splice(i, 1);
}
}
var res = arr.join(sp);
return res;
}

//Task #2

function convertIntoArray(obj) {
var arr = Object.entries(obj);
return arr;
}

//Task #3

function toCamelCase(str) {
for (var i = 0 ; i < str.length ; i++) {
 if (str[i] == "-" || str[i] == "_") {
 str = str.slice(0, i) + str[i + 1].toUpperCase() + str.slice(i + 2, str.length);
 }
 }
return str;
}

//Task #4

function reverse(str) {
var arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
arr[i] = arr[i].split("").reverse().join("");
}
return arr.join(" ");
}

//Task #5

function stringExpansion(str) {
return str.replace(/(\d)([^\d]*)/g, function(match, count, char) {
return char.repeat(count);
})
}

//Task #6

function findLargest(...arguments) {
var largestNumber = arguments[0];

for (var i = 1; i < arguments.length; i++) {
if (arguments[i] > largestNumber) {
largestNumber = arguments[i];
}
}
return largestNumber;
}

function findSmallest(...arguments) {
 var smallestNumber = arguments[0];
 for (var i = 1; i < arguments.length; i++) {
 if (arguments[i] < smallestNumber) {
 smallestNumber = arguments[i];
 }
 }
 return smallestNumber;
 }

//Task #7

function transform(baseArray){
var res = [];
for (var i = 0 ; i < baseArray.length ; i++ ) {
res[i] = function () {
return baseArray[i];
}
}
return res;
}

//Task #8

function sum(...args) {
var arr = args;
if (arr.length == 0) {
return 0;
} else {
return arr.shift() + sum(...arr);
}
}

//Task #9

function countDown(count) {
console.log(count);
if (count > 0)
setTimeout(countDown, 1000, count - 1);
}

//Task #10

Function.prototype.myBind = function(newBind) { 
var context = this;
return function()  {
return context.apply(newBind, arguments);
}
}
function addPropToNumber(number)  { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
bound(1);


