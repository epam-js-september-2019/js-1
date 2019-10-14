// 1) Write a function splitAndMerge

function splitAndMerge(str, sp)  {
	const arr = str.split("");
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i] == " ") {
			arr.splice(i, 1);
		}
	}
	return arr.join(sp);
}

// 2) Write a function convert

function convertHash (hash) {
	return Object.entries(hash);
}

// 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

function toCamelCase(str) {
	for (let i = 0 ; i < str.length ; i++) {
		if (str[i] == "-" || str[i] == "_") {
 			str = str.slice(0, i) + str[i + 1].toUpperCase() + str.slice(i + 2, str.length);
 		}
 	}
	return str;
}

// 4) Write a function that takes a sentence (string) and reverses each word in the sentence.

function reverseWords(str) {
	let arr = str.split(' ');
	let reverseArr= arr.map(item => item.split('').reverse().join(''))
	return reverseArr.join (' ');
}

// 5) Write a function ``` stringExpansion ```

function stringExpansion (oldString) {
  if (oldString.length === 0) {
    return '';
  }
  let extendedString = '';
  for (let i = 0; i <= oldString.length - 1; i += 1) {
    if (isNaN(oldString[i])) {
      extendedString = `${extendedString}${oldString[i]}`;
    }
    if (!(isNaN(oldString[i])) && !(isNaN(oldString[i + 1]))) {
      continue;
    }
    if (!(isNaN(oldString[i - 1])) && isNaN(oldString[i])) {
      extendedString = `${extendedString}${oldString[i].repeat(oldString[i - 1] - 1)}`;
    }
  }
  return extendedString;
}

// 6) Write ```largest``` and ```smallest``` functions that returns the largest and smallest number passed like a argument.
function smallest () {
	let n = arguments.length - 1;
	let result = arguments[0];
	for (let i = 1; i != n; i++) {
		if (result > arguments[i]) {
			result = arguments[i];
		}
	}
	return result;
}

function largest () {
let n = arguments.length - 1;
	let result = arguments[0];
	for (let i = 1; i != n; i++) {
		if (result < arguments[i]) {
			result = arguments[i];
		}
	}
	return result;
}

// 7) Write function transform that will transform array of numbers to array of functions that will return value from a base array.

function transform(baseArray){
	const res = [];
	for (let i = 0 ; i < baseArray.length ; i++ ) {
		res[i] = function () {
			return baseArray[i];
		}
	}
	return res;
}

// 8) Write function ```sum```. Function expects arbitrary number of digit arguments and returns compound value of them. Note: function should use recursion

function sum(...numbers){
	if (numbers.length === 1) {
		return numbers[0]
	} else {
		let a = numbers.pop();
		return a + sum(...numbers);
	}
}

// 9) Write function ```countDown```. Function expects number and logs values one by one till zero with one second delay.
function countDown(count) {
	console.log(count);
	if (count > 0)
		setTimeout(countDown, 1000, count - 1);
}

// 10) Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). myBind() should work in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.

Function.prototype.myBind = function (context) {
	const current_func = this;
	return function () {
		return current_func.apply(context, [...arguments])
	};
};