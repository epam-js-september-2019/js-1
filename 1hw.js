"use strict";

//1
let splitAndMerge = (str, sp) => {
	let words = str.split(' ');
	let newWords = [];
	for(let word of words){
		let characters = word.split('');
		newWords.push(characters.join(sp))
		}
	return newWords.join(' ');
}

//splitAndMerge("My name is John"," "); //"M y n a m e i s J o h n"
//splitAndMerge("Hello World!",",");  //"H,e,l,l,o W,o,r,l,d,!"

//2
let convert = (obj) => {
	let massFromObj = [];
	for(let key in obj){
		let massKeyVal = [key, obj[key]];
		massFromObj.push(massKeyVal);
	}
	return massFromObj;
}

//convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}); //[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

//3
let toCamelCase = (str) => {
	let words = str.split(/[-,_]/);
	let characters = [];
	for(let word of words){
		let firstCharacter;
		if(word == words[0] && word[0] == word[0].toLowerCase()){
			firstCharacter = word[0].toLowerCase();
		}else{
			firstCharacter = word[0].toUpperCase();
		}
		characters.push(firstCharacter + word.slice(1));
	}
	return characters.join('');
}

//toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
//toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

//4
let reverseWord = word => {
	let newWord = [];
	for(let i = 0, n = word.length - 1; i < word.length; i++, n--){
		newWord.push(word[n]);
	}
	return newWord.join('');
}

let toReverseEachWord = (str) => {
	let words = str.split(' ');
	let newWords = [];
	for(let word of words){
		newWords.push(reverseWord(word));
	}
	return newWords.join(' ');
}

//toReverseEachWord(" A fun little challenge! "); //" A nuf elttil !egnellahc "

//5
let stringExpansion = (str) => {
	let resultStr = "";
	for(let i = 0; i < str.length; ){
		if(str[i].match(/\d/) && str[i+1].match(/[a-zA-Z]/)){
			resultStr += str[i+1].repeat(str[i]);
			i+=2;
		}else if(str[i].match(/\d/) && str[i+1].match(/\d/)){
			i++;
		}else if(str[i].match(/[a-zA-Z]/)) {
			resultStr += str[i];
			i++;
		}
	}
	return resultStr;
}

//stringExpansion('3D2a5d2f'); //'DDDaadddddff'
//stringExpansion('3d332f2a'); //'dddffaa'
//stringExpansion('abcde'); //'abcde'

//6
let largest = (...numbers) => {
	let max = numbers[0];
	for(let number of numbers){
		if(number > max){
			max = number;
		}
	}
	return max;
}

let smallest = (...numbers) => {
	let min = numbers[0];
	for(let number of numbers){
		if(number < min){
			min = number;
		}
	}
	return min;
}

//largest(2, 0.1, -5, 100, 3); // 100
//smallest(2, 0.1, -5, 100, 3); // -5

//7
let transform = (mass) =>{
	let massOfFunc = [];
	for(let i= 0; i < mass.length; i++) {
		massOfFunc[i] = function() {
			return mass[i];
		}
	}
	return massOfFunc;
}

//const baseArray = [10, 20, 30, 40, 50];
//const newArray = transform(baseArray);
//newArray[3](); // should return 40
//newArray[4](); // should return 50

//8
let sum = (...numbers) => {
	return sumRec(0, numbers, 0);
}

let sumRec = (res, mass, n) => {
	return (n == mass.length) ? res : (sumRec(res + mass[n], mass, n+1));
}

//sum(1,3,5,7); //should return 16

//9
let countDown = (num) => {
	setTimeout(function run() {
		console.log(num);
		num--;
		if(num >= 0){
			setTimeout(run, 1000);
		}
	}, 1000);
}

//countDown(3); // 3 2 1 0

//10
Function.prototype.myBind = function (){
	let fn = this, args = Array.prototype.slice.call(arguments), object = args.shift();
	return function (){
		return fn.apply(object, args.concat(Array.prototype.slice.call(arguments)));
	};
};

/*function addPropToNumber(number){
	 return this.prop + number;
 }
 var bound = addPropToNumber.myBind({prop:9});
 alert(bound(1)); //10
 */
