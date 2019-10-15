
//1) Write a function splitAndMerge

function splitAndMerge(str, sp) {
    let words = str.split(" ");
    let letters=[];
    words.forEach(function(word) {
        letters.push.apply(letters, word.split(""));
    });
    return letters.join(sp);
}



// 2) Write a function convert

function convert(obj) {
    let arr = Object.entries(obj);
    return arr;
}



// 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

function toCamelCase(str) {
    let i = -1;
    while ((i = str.indexOf('-', i + 1)) != -1) {
        str = str.slice(0, i)+str[i+1].toUpperCase()+str.slice(i+2);
    }
    while ((i = str.indexOf('_', i + 1)) != -1) {
        str = str.slice(0, i)+str[i+1].toUpperCase()+str.slice(i+2);
    }
    return str;
}




// 4) Write a function that takes a sentence (string) and reverses each word in the sentence.

function reverseW(str) {
    let words = str.split(" ");
    let newWords = [];
    words.forEach(function(word) {
        newWords.push(word.split('').reverse().join(''));
    });
    return newWords.join(' ');
}




// 5) Write a function stringExpansion

function stringExpansion(str) {
    let n;
    while (n = str.match(/\d/)){
        let p = n.index
        str = str.slice(0, p) + str[p+1].repeat(n) +str.slice(p+2);
    };
    return str;
}



// 6) Write largest and smallest functions that returns the largest and smallest number passed like a argument.

function largest() {
    return Math.max.apply(null, arguments);
};

function smallest() {
    return Math.min.apply(null, arguments);
}



// 7) Write function transform that will transform array of numbers to array of functions that will return value from a base array.

function transform(arr) {
    return arr.map(function(elmt){
        return function() {
            return elmt;
        }
    });
}



// 8)  Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them. Note: function should use recursion

function sum() {
    let res = 0;
    for (let i=0; i<arguments.length; i++) {
        res+=arguments[i];
    }
    return res;
}



// 9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.

function countDown(n) {
    let i = n;
    let timerId = setInterval(function() {
        console.log(i);
        if ( i === 0) {
          clearInterval(timerId);
        }
        i--;
    }, 1000);
}



// 10) Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). myBind() should work in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.

Function.prototype.myBind = function (context) {
    var func = this;
    return function (...args) {
        return func.apply(context, args)
    };
 }