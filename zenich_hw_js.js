// Task 1. Write a function splitAndMerge
// Function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator.
// First we need to divide the sentence into words(Use separator space); 
// and then divide each word into characters(Use separator empty string); 
// and then merge each characters with the specified sp; 
// at last merge all the words(Use separator space) and return it.
// splitAndMerge("My name is John"," ") should return "M y n a m e i s J o h n"
// splitAndMerge("Hello World!",",") should return "H,e,l,l,o W,o,r,l,d,!"
function splitAndMerge(str, sp) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').join(sp);
    }
    return words.join(' ');
}
// Testing
console.log(splitAndMerge("My name is John", " "));  // "M y n a m e i s J o h n"
console.log(splitAndMerge("Hello World!", ","));     // "H,e,l,l,o W,o,r,l,d,!"
console.log(splitAndMerge("Hello World!", ""));      // "Hello World!"
console.log(splitAndMerge("I'm a string", "_"));     // "I_'_m a s_t_r_i_n_g"
console.log(splitAndMerge("", "_"));                 // ""
console.log(splitAndMerge("A bug or not a bug", "..")); //  "A b..u..g o..r n..o..t a b..u..g" (".." is a string, not a char)


// Task 2. Write a function convert
// Convert a hash into an array. Nothing more, Nothing less.
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
function convert(hash) {
    return Object.entries(hash);
}
// Testing
console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'})); // [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
console.log(convert({name: 'Jeremy'})); // [["name", "Jeremy"]]
console.log(convert({}));   // []


// Task 3.
// Complete the method/function so that it converts dash/underscore
// delimited words into camel casing. The first word within the output
// should be capitalized only if the original word was capitalized.
// toCamelCase("the-stealth-warrior") returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") returns "TheStealthWarrior"
function toCamelCase(str) {
    let words = str.split(/[-_]+/);
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > 0)
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);  // words[i][0] = 1st char of i-word
    }
    return words.join('');
}
// Testing
console.log(toCamelCase("the-stealth-warrior"));        // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior"));        // "TheStealthWarrior"
console.log(toCamelCase("-The_-_Stealth--Warrior_"));   // "TheStealthWarrior"
console.log(toCamelCase("theStealthWarrior"));          // "theStealthWarrior"  
console.log(reverseWords(""));                          // ""


// Task 4.
// Write a function that takes a sentence (string) 
// and reverses each word in the sentence.
// " A fun little challenge! " => " A nuf elttil !egnellahc "
function reverseWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').reverse().join('');
    }
    return words.join(' ');
}
// Testing
console.log(reverseWords(" A fun little challenge! ")); // " A nuf elttil !egnellahc "
console.log(reverseWords("Madam   Anna"));              // "madaM   annA"
console.log(reverseWords("non-stop"));                  // "pots-non"     
console.log(reverseWords(""));                          // ""


// Task 5. Write a function stringExpansion
// Given a string that includes alphanumeric characters ('3a4B2d') 
// return the expansion of that string: 
// The numeric values represent the occurance of each letter 
// preceding that numeric value. There should be no numeric characters 
// in the final string. Empty strings should return an empty string.
// stringExpansion('3D2a5d2f') === 'DDDaadddddff'
// stringExpansion('3d332f2a') === 'dddffaa'
// stringExpansion('abcde') === 'abcde'
function stringExpansion(str) {
    let chars = str.split('');
    let result = '';
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] < '0' || chars[i] > '9') {       // isn't number 0..9
            if (chars[i-1] >= '0' && chars[i-1] <= '9')     // previous is number 0..9
                result += chars[i].repeat(chars[i-1]);
            else
                result += chars[i];
        }
    }
    return result;
}
// Testing
console.log(stringExpansion('3D2a5d2f'));   // "DDDaadddddff"
console.log(stringExpansion('3d332f2a'));   // "dddffaa"
console.log(stringExpansion('abcde'));      // "abcde"
console.log(stringExpansion('0a9b7'));      // "bbbbbbbbb"
console.log(stringExpansion('1A9Z'));     // "AZZZZZZZZZ"
console.log(stringExpansion(''));           // ""


// Task 6.
// Write largest and smallest functions that returns
// the largest and smallest number passed like a argument.
// largest(2, 0.1, -5, 100, 3) -> 100
// smallest(2, 0.1, -5, 100, 3) -> -5
function largest() {
    return Math.max(...arguments);
}
function smallest() {
    return Math.min(...arguments);
}
// Testing
console.log(largest(2, 0.1, -5, 100, 3));   // 100
console.log(smallest(2, 0.1, -5, 100, 3));  // -5
console.log(largest());     // Infinity
console.log(smallest());    // -Infinity
console.log(largest(100));  // 100
console.log(smallest(100)); // 100
console.log(largest(1, 2, 'a'));    // NaN
console.log(smallest(1, 2, 'a'));   // NaN


// Task 7.
// Write function transform that will transform array of numbers
// to array of functions that will return value from a base array.
// const baseArray = [10, 20, 30, 40, 50];
// const newArray = transform(baseArray);
// newArray3 should return 40   ??
// newArray4 should return 50   ??
function transform(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        result[i] = function(){ return arr[i]; };
    }
    return result;
}
// Testing
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[0]()); // 10
console.log(newArray[3]()); // 40
console.log(newArray[4]()); // 50
baseArray[3] = 45;
console.log(newArray[3]()); // 45


// Task 8. Write function sum.
// Function expects arbitrary number of digit arguments
// and returns compound value of them. Note: function should use recursion
// sum(1,3,5,7) should return 16
function sum(n, ...args) {
    if (args.length)
        return sum( (n + args.shift()) , ...args);
    else
        return n;
}
// Testing
console.log(sum(1, 3, 5, 7));   // 16
console.log(sum(10));           // 10
console.log(sum(-1, 3, 5, 7));  // 14
console.log(sum());             // undefined


// Task 9. Write function countDown.
// Function expects number and logs values one by one 
// till zero with one second delay.
// countDown(3) -> 3 2 1 0
function countDown(n) {
    console.log(n);
    if (n > 0)
        setTimeout(countDown, 1000, n-1);
}
// Testing
countDown(3);

// Task 10.
// Write a polyfill for a .bind() function and save it in Function.prototype.myBind().
// myBind() should work in an exact same way as the usual bind()
//  - take context as a first parameter and the list of arguments separated by comma.
// Function.prototype.myBind = function () {
//     // your code here
//     }
//  function addPropToNumber(number) { return this.prop + number; }
//  var bound = addPropToNumber.myBind({ prop: 9 });
//  bound(1) // 10
Function.prototype.myBind = function () {
    let func = this;
    let bindContext = arguments[0];
    let bindArgs = Array.from(arguments).slice(1);
    return function () {
		let allArgs = bindArgs.concat(Array.from(arguments));
        return func.apply(bindContext, allArgs);
    }
};
// Testing
function addPropToNumbers(num1, num2){ return this.prop + num1 + num2; };
let bound = addPropToNumbers.myBind({prop: 10}, 3);
bound(4);   // 17