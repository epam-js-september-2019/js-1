console.log('1) - splitAndMerge()');

function splitAndMerge(str, sep){
	return str
				.split(" ")
				.reduce((str1, current) => str1 + (current.split("").join(sep) + " "), "")
				.trimRight()
}

console.log("splitAndMerge('My name is John',' '): ", splitAndMerge("My name is John"," "));
console.log("splitAndMerge('Hello World!',','): ", splitAndMerge("Hello World!",","));
//------------------------------------------------
console.log('2) - Converts a hash into an array');

function convert(obj){
	return Object.entries(obj)
}
console.log("convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}: ", convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));
//------------------------------------------------
console.log('3) - Converts dash/underscore delimited words into camel casing');

function toCamelCase(str){
	if(str.includes("-")){
		return toCamel("-");
	} else if(str.includes("_")){
			return toCamel("_");
	}

	function toCamel(sep){
		return str
					.split(sep)
					.reduce((newStr, current, index, str) => 
						index == 0 ? str[0] : newStr + current[0].toUpperCase() + current.slice(1), "");
	}
}
console.log("First mode: toCamelCase('the-stealth-warrior'): ", toCamelCase("the-stealth-warrior"));
console.log("First mode: toCamelCase('The_Stealth_Warrior'): ", toCamelCase("The_Stealth_Warrior"));
//second mode
function toCamelCase1(str){
	if(str.includes("-")){
		return toCamel1("-");
	} else if(str.includes("_")){
			return toCamel1("_");
	}

	function toCamel1(sep){
		return str
					.split(sep)
					.map((current, index) => 
						index == 0 ? current : current[0].toUpperCase() + current.slice(1))
					.join("")
	}
}
console.log("Second mode: toCamelCase('the-stealth-warrior'): ", toCamelCase1("the-stealth-warrior"));
console.log("Second mode: toCamelCase('The_Stealth_Warrior'): ", toCamelCase1("The_Stealth_Warrior"));
//------------------------------------------------
console.log('4) - reverses string');
function reverse(str) {
	let splittedString = str.split(" ");
	let reversedString = [];
	for (let i=0; i <= splittedString.length-1; i++){
		reversedString.push(splittedString[i].split("").reverse().join(""));
	}

	let result = reversedString.join(" ")
	return result;
}
//second mode
function reverse1(str) {
	return str
				.split(" ")
				.reduce((newStr, current) => 
					newStr + " " + current.split("").reverse().join("")
				,"");
}

console.log("First mode : reverse(' A fun little challenge! '): ", reverse(" A fun little challenge! "));
console.log("Second mode : reverse(' A fun little challenge! '):", reverse1(" A fun little challenge! "));
//------------------------------------------------
console.log('5)- stringExpansion()');
function stringExpansion(str) {
	let newStr = "";
	str
	.split("")
	.forEach((item, index) => {
		if(isNaN(item)){
			newStr += item;
		} else if (isNaN(str[index+1])){
				newStr += str[index+1].repeat(+item-1)
			} else {
				str.slice(1)
			}
	});
	
	return newStr;
}
console.log("stringExpansion('3D2a5d2f'): ", stringExpansion('3D2a5d2f'));
console.log("stringExpansion('3d332f2a'): ", stringExpansion('3d332f2a'));
console.log("stringExpansion('abcde'): ", stringExpansion('abcde'));
//------------------------------------------------
console.log('6) - largest and smallest functions');
//largest
function largest(...arr) {
	return Math.max(...arr);
}
function largest1(...arr) {
	let max = arr[0];
	for(let i of arr){
		i >= max ? max = i : max;
	}
	return max;
}
//smallest
function smallest(...arr) {
	return Math.min(...arr);
}
function smallest1(...arr) {
	let min = arr[0];
	arr.forEach(function(item) {
		item <= min ? min = item : min
	});
	return min;
}
console.log("First method : largest(2, 0.1, -5, 100, 3):", largest(2, 0.1, -5, 100, 3));
console.log("First method : smallest(2, 0.1, -5, 100, 3):", smallest(2, 0.1, -5, 100, 3));
console.log("Second method : largest(2, 0.1, -5, 100, 3):", largest1(2, 0.1, -5, 100, 3));
console.log("Second method : smallest(2, 0.1, -5, 100, 3):", smallest1(2, 0.1, -5, 100, 3));
//------------------------------------------------
console.log('8) - sum');

function sum(...arr) {
	return arr.length === 0 ? 0 : arr[0] + sum(...arr.slice(1));
}

console.log("sum(1,3,5,7):", sum(1,3,5,7));
console.log("sum():", sum());
console.log("sum(2, -5, 8):", sum(2, -5, 8));
//------------------------------------------------
console.log('9) - countDown');

function countDown(seconds) {
	if(seconds <= 0) {
		console.log("Try to type positive number of seconds (above zero)");
		return false;
	}
  const count = setInterval(function() {
			console.log(seconds);
			seconds--;
			if (seconds < 0) {
				clearInterval(count);
			}
  }, 1000);
}
console.log("countDown(0):"); countDown(0);
console.log("countDown(-2):"); countDown(-2);
console.log("countDown(5):"); countDown(5);
//------------------------------------------------
Function.prototype.myBind = function (context) {
  let that = this;
  return function () {
    return that.apply(context, arguments);
  }
}
function addPropToNumber(number) {
	return this.prop + number;
}
var bound = addPropToNumber.myBind({ prop: 9 });
setTimeout(() => {
	console.log('10) - a polyfill for a .bind() function');
	console.log("bound(1): ", bound(1))
}, 7000); // 10