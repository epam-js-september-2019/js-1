/**
 * First we need to divide the sentence into words(Use separator space); 
 * and then divide each word into characters(Use separator empty string); 
 * and then merge each characters with the specified sp; 
 * at last merge all the words(Use separator space) and return it.
 * @param  {string} str - initial string
 * @param  {string} sp - char as separator
 * @return {string} - new string devided by separator
 */
const splitAndMerge = function (str, sp){
	return str.split(" ").map(word => word.split("").join(sp)).join(" ");
}

/**
 * Converts a hash into an array. Nothing more, Nothing less.
 * @param  {object} hash - initial hash
 * @return {array[]} - array of arrays that represents the hash
 */
const convert = function(hash){
	let res = [];

	for (key in hash){
	  let _res = [];
	  _res.push(key);
	  _res.push(hash[key]);
	  res.push(_res);
	}

	return res;
}

/**
 * Converts dash/underscore delimited words into camel casing. 
 * The first word within the output should be capitalized only if the original word was capitalized.
 * @param  {string} str - initial string
 * @return {string} - new string in camelCase
 */
const toCamelCase = function(str){
	const delimeter = str.match(/-|_/);
	if (!delimeter)
		return str;
	const re = new RegExp(delimeter+"+(.)", "g");
	return str.replace(re, (match, chr) => chr.toUpperCase());
}

/**
 * Takes a sentence and reverses each word in the sentence.
 * @param  {string} sentence - initial string
 * @return {string} - new reversed string
 */
const reverser = function(sentence) {
	return sentence.split(" ").map(word => word.split("").reverse().join("")).join(" ");;
}

/**
 * Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: 
 * The numeric values represent the occurance of each letter preceding that numeric value. 
 * There should be no numeric characters in the final string. Empty strings should return an empty string.
 * The first occurance of a numeric value should be the number of times each character behind it is repeated, 
 * until the next numeric value appears.
 * @param  {string} s - initial string
 * @return {string} - new expanded string
 */
const stringExpansion = function(s) {
  return s.replace(/\d\D*/g, str => str.slice(1).replace(/./g, el => el.repeat(str[0])));
}

/**
 * @param  {...number} args - list of values to choose the largest
 * @return {number} - the largest number
 */
const largest = function(...args){
	return Math.max.apply(null, args);
}

/**
 * @param  {...number[]} args - list of values to choose the smallest
 * @return {number} - the smallest number
 */
const smallest = function(...args){
	return Math.min.apply(null, args);
}

/**
 * Transforms array of numbers to array of functions that will return value from a base array.
 * @param  {number[]} arr - initial array
 * @return {function[]} - array of functions
 */
const transform = function(arr) {
	if (!Array.isArray(arr)) 
		throw new TypeError;
	return arr.map(element =>
		() =>
		element
	);
};

/**
 * Expects arbitrary number of digit arguments and returns compound value of them. 
 * Note: function should use recursion
 * @param  {...number[]} args - digit arguments
 * @return {number} the compound value of all arguments
 */
const sum = function(...args){
	if (args.length == 0)
		return 0;
	args = Array.from(args);
	return (function _sum(args){
		if (args.length == 1)
			return args[0];
		return args.pop() + _sum(args);
	})(args)
}

/**
 * Expects number and logs values one by one till zero with one second delay.
 * @param  {number} counter - value to start from
 */
const countDown = function(counter){
	if (counter < 0)
		return;
	const intervalId = setInterval(
		() => {
			console.log(counter--);
			if (counter <= -1)
				clearInterval(intervalId);
		}, 
		1000);
}

/**
 * A polyfill for a .bind() function and save it in Function.prototype.myBind(). 
 * myBind() should work in an exact same way as the usual bind() - take context as a first parameter and 
 * the list of arguments separated by comma.
 * @return {function} - function with the binded context
 */
Function.prototype.myBind = function(){
	if (typeof this !== 'function') 
 		throw new TypeError(`${this.name}.myBind is not a function`);
	const context = arguments[0];
	const _this = this;
	const args = Array.from(arguments).slice(1);
 	return function() {
		return _this.apply(context, Array.from(arguments));
	};
}

/**
 * helper for .myBind demonstration
 * @param {number} val - the value to add
 */
const addPropToNumber = function(val) { 
	return this.prop + val; 
}

const bound = addPropToNumber.myBind({ prop: 9 });

/**
 * Demonstrates all the functions in the homework
 */
const test = function(){
	console.log(splitAndMerge("My name is John"," "));
	console.log(splitAndMerge("Hello World!",","));

	console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

	console.log(toCamelCase("the-stealth-warrior"));
	console.log(toCamelCase("The_Stealth_Warrior"));

	console.log(reverser(" A fun little challenge! "));

	console.log(stringExpansion('3D2a5d2f'));
	console.log(stringExpansion('3d332f2a'));
	console.log(stringExpansion('abcde'));

	console.log(largest(2, 0.1, -5, 100, 3));
	console.log(smallest(2, 0.1, -5, 100, 3));


	const baseArray = [10, 20, 30, 40, 50];
	const newArray = transform(baseArray);
	console.log(newArray[3]());

	console.log(sum(1,3,5,7));

	countDown(3);

	console.log(bound(1));
}

test();