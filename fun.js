// Task 1
function splitAndMerge(str, sp) {
    let words = str.split(" ");
    let letters=[];
    words.forEach(function(word) {
        letters.push.apply(letters, word.split(""));
    });
    return letters.join(sp);
}

splitAndMerge("My name is John"," ");
splitAndMerge("Hello World!",",");

// Task 2
function convert(obj) {
    let arr = Object.entries(obj);
    return arr;
}

convert({name: 'Jeremy', age: 24, role: 'Software Engineer'});

// Task 3
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

toCamelCase("the-stealth-warrior");
toCamelCase("The_Stealth_Warrior");

// Task 4
function reverseW(str) {
    let words = str.split(" ");
    let newWords = [];
    words.forEach(function(word) {
        newWords.push(word.split('').reverse().join(''));
    });
    return newWords.join(' ');
}

reverseW(' A fun little challenge! ');

// Task 5
function stringExpansion(str) {
    let n;
    while (n = str.match(/\d/)){
        let p = n.index
        str = str.slice(0, p) + str[p+1].repeat(n) +str.slice(p+2);
    };
    return str;
}

stringExpansion('3D2a5d2f');

// Task 6
function largest() {
    return Math.max.apply(null, arguments);
};

function smallest() {
    return Math.min.apply(null, arguments);
}

largest(2, 0.1, -5, 100, 3) // 100
smallest(2, 0.1, -5, 100, 3) // -5

// Task 7
function transform(arr) {
    return arr.map(function(elmt){
        return function() {
            return elmt;
        }
    });
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);

newArray[2]();


// Task 8
function sum() {
    let res = 0;
    for (let i=0; i<arguments.length; i++) {
        res+=arguments[i];
    }
    return res;
}

sum(1,3,5,7);

// Task 9
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

countDown(3); // 3 2 1 0

// Task 10
Function.prototype.myBind = function (context) {
    var func = this;
    return function (...args) {
        return func.apply(context, args)
    };
 }

 function addPropToNumber(number) { return this.prop + number; }
 var bound = addPropToNumber.myBind({ prop: 9 });
 bound(1) // 10
