// 1) Write a function splitAndMerge
// Function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator. First we need to divide the sentence into words(Use separator space); and then divide each word into characters(Use separator empty string); and then merge each characters with the specified sp; at last merge all the words(Use separator space) and return it.

function splitAndMerge(str , sp){
    let words = str.split(" ");
    for(let i = 0 ; i < words.length ; i++){
        words[i] = words[i].split("").join(sp);
    }
    return words.join(" ");
}

// 2) Write a function convert
// Convert a hash into an array. Nothing more, Nothing less.

function convert(object){
    return Object.entries(object);
}

// 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

function toCamelCase(str){
   for(let i = 0 ; i < str.length ; i++){
       if(str[i] == "-" || str[i] == "_"){
           str = str.slice(0,i) + str[i+1].toUpperCase() + str.slice(i+2,str.length);
       }
   }
   return str;
}

// 4) Write a function that takes a sentence (string) and reverses each word in the sentence.

function reverseSentence(str){
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// 5) Write a function stringExpansion
// Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: The numeric values represent the occurance of each letter preceding that numeric value. There should be no numeric characters in the final string. Empty strings should return an empty string.

// The first occurance of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears.

// stringExpansion('3D2a5d2f') === 'DDDaadddddff'
// If there are two consecutive numeric characters the first one is ignored.

// stringExpansion('3d332f2a') === 'dddffaa'
// If there are two consecutive alphabetic characters then the first character has no effect on the one after it.

// stringExpansion('abcde') === 'abcde'
// Your code should be able to work for both lower and capital case letters.

function stringExpansion(str){
    let result = "";
    for(let i = 0 ; i < str.length ; i++){
        if ( isNaN(str[i]) && (str[i].toUpperCase != str[i].toLowerCase()) ){
            result += str[i];
        } else if ( !(typeof str[i+1] === "undefined") && !isNaN(str[i]) && (str[i+1].toUpperCase() != str[i+1].toLowerCase()) ){
            result += str[i+1].repeat(str[i]);
        }
    }
    return result;
}

// 6) Write largest and smallest functions that returns the largest and smallest number passed like a argument.

function largest(){
    let max = -Infinity;
    for(let i = 0 ; i < arguments.length ; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

function smallest(){
    let min = +Infinity;
    for(let i = 0 ; i < arguments.length ; i++){
        if(arguments[i] < min){
            min = arguments[i];
        }
    }
    return min;
}

// 7) Write function transform that will transform array of numbers to array of functions that will return value from a base array.

function transform(array){
    let result = [];
    for(let i = 0 ; i < array.length ; i++ ){
        result[i] = function () {
            return array[i];
        }
    }
    return result;
}

// 8) Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them. Note: function should use recursion

function sum(...args){
    // let tmpArr = args;
    // if (tmpArr.length == 0) {
    //     return 0;
    // } else {
    //     return tmpArr.shift() + sum(...tmpArr);
    // }
    return ( args.length == 0 ) ? 0 : args.shift() + sum (...args);
}

// 9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.

function countDown(number){
    for (let i = number ; i >= 0 ; i-- ){
        setTimeout(() => console.log(i) , (number - i)*1000);
    }
}

// 10) Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). myBind() should work in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.
// Hint: play with the function in Function.prototype and see what this points to inside it. Your code should look like:

// Function.prototype.myBind = function () {
//  // your code here
//  }
// Example:

// function addPropToNumber(number) { return this.prop + number; }
// var bound = addPropToNumber.myBind({ prop: 9 });
// bound(1) // 10

Function.prototype.myBind = function(newThis) {
    if (typeof this !== "function") {
      throw new Error(this + "cannot be bound as it's not callable");
    }
    let boundTargetFunction = this;
    let boundArguments = Array.prototype.slice.call(arguments, 1);
    return function boundFunction() {
      let targetArguments = Array.prototype.slice.call(arguments);
      return boundTargetFunction.apply(
        newThis,
        boundArguments.concat(targetArguments)
      );
    };
  };

