//1
function splitAndMerge(str, sp) {
	let res = " ";
	let arrOfLetters = [];
	let arrOfWords = str.split(" ");
	arrOfWords.forEach((word) => {
		arrOfLetters = word.split("");
		res = res + arrOfLetters.join(sp) + " ";
	});
	res = res.substring(1, res.length - 1);
	return res;
}

//2
function convert(obj) {
	return Object.entries(obj);
}

//3
function toCamelCase(str) {
	let res = "";
	let arrOfLet = str.split("");
	for (let i=0; i<arrOfLet.length; i++) {
		if (arrOfLet[i] === "-" || arrOfLet[i] === "_") {
			res += arrOfLet[i+1].toUpperCase();
			i++;
		}
		else res += arrOfLet[i];
	}
	return res;
}

//4
function wordReverse(str) {
	let res = "";
	let arrOfLetters = [];
	let arrOfWords = str.split(" ");
	arrOfWords.forEach((word) => {
		arrOfLetters = word.split("");
		res = res + arrOfLetters.reverse().join("") + " ";
	});
	res = res.substring(0, res.length - 1);
	return res;
}

//5
function stringExpansion(str) {
	let numCounter = false;
	let expStr = "";
	let arrOfChar = str.split("");
	for (let i=0; i<arrOfChar.length-1; i++) {
		if (!!arrOfChar[i].match(/\d/))
			numCounter = true;
		if (!!(arrOfChar[i].match(/\d/)) && (!!arrOfChar[i+1].match(/[a-zA-Z]/))) {
			for (let j=0; j<arrOfChar[i]; j++) {
				expStr += arrOfChar[i+1];
			}
		}
	}
	if (!!arrOfChar[arrOfChar.length-1].match(/\d/))
		arrOfChar.pop();
	if ((expStr === "") && (!numCounter))
		return arrOfChar.join("");
	else 
		return expStr;
}

//6
function largest(...num) {
	return Math.max(...num);
}

function smallest(...num) { 
	return Math.min(...num);
}

//7
function transform(arr) {
	let res = [];
	for (let i=0; i<arr.length; i++) {
		res[i] = function() {
			return arr[i];
		}
	}
	return res;
}

//8
function sum(...args) {
	if (args.length === 0)
		return undefined;
	if (args.length === 1)
		return args[0];
	else 
		return args[0] + sum(...args.slice(1));
}

//9
function countDown(n) {
	console.log(n);
	if (n>0)
		setTimeout(countDown , 1000, n-1);
}

//10
Function.prototype.myBind = function (context) { 
    let func = this;
    return function() {
        return func.apply(context, arguments);
    }
}

//Вызов функций
//----------  1  ---------
console.log(splitAndMerge("My name is John"," ")); 
console.log(splitAndMerge("Hello World!",",")); 
//----------  2  ---------
console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));  
//----------  3  ---------
console.log(toCamelCase("the-stealth-warrior")); 
console.log(toCamelCase("The_Stealth_Warrior")); 
//----------  4  ---------
console.log(wordReverse(" A fun little challenge! "));
//----------  5  ---------
console.log(stringExpansion('3D2a5d2f')); 
console.log(stringExpansion('3d332f2a')); 
console.log(stringExpansion('abcde')); 
//----------  6  ---------
console.log(largest(2, 0.1, -5, 100, 3));
console.log(smallest(2, 0.1, -5, 100, 3)); 
//----------  7  ---------
const baseArray = [10, 20, 30, 40, 50]; 
const newArray = transform(baseArray); 
console.log(newArray[3]()); 
console.log(newArray[4]()); 
//----------  8  ---------
console.log(sum(1,3,5,7)); 
//----------  9  ---------
console.log(countDown(3)); 
//----------  10 ---------
function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1));