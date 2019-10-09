//task 1 
function splitAndMerge(str, sp) {
    str = str.split(' ').map(word => word.split('').join(sp)).join(' ');
    return str;
}
console.log('task1_1:',splitAndMerge('My name is John', ' '));
console.log('task1_2:',splitAndMerge('Hello World!', ','));
 
//task 2
function toArray(obj) {
    arr = Object.entries(obj);
    return arr
}
console.log('obj to array:',toArray({name: 'Jeremy',age: 24,role: 'Software Engineer'}));

//task 3
function toCamelCase(str) {
    str = str.replace(/[-_](.)/g, (_, i) => i.toUpperCase());
    return str;
}
console.log('toCamelCase with - :',toCamelCase("the-stealth-warrior"));
console.log('toCamelCase with _ :',toCamelCase("The_Stealth_Warrior"));

//task 4
function reverse(char) {
    let arr = [];
    char = char.split(' ');
    char.forEach((word) => arr.push(word.split('').reverse().join('')));
    arr = arr.join(' ');
    return arr;
}
console.log('task4:',reverse(' A fun little challenge! '));

//task 5
function stringExpansion(str) {
    let regexp = /(?<num>\d)(?<word>[a-z]*)/gi
    return str.replace(regexp, (match, number, word) => {
        return word.repeat(number);
    });
}
console.log('3D2a5d2f = ',stringExpansion('3D2a5d2f'));
console.log('3d332f2a = ',stringExpansion('3d332f2a'));
console.log('abcde = ',stringExpansion('abcde'));

//task 6
function largest() {
    let args = Array.from(arguments),
        max = 0;
    max = Math.max(...args);
    return max;
}

function smallest() {
    let args = Array.from(arguments),
        min = 0;
    min = Math.min(...args);
    return min;
}

console.log('largest:',largest(2, 0.1, -5, 100, 3));
console.log('smallest:',smallest(2, 0.1, -5, 100, 3));

//task 7
function transform(arr) {
    return arr.map(function (i) {
        return function () {
            return i;
        };
    });
}
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log('newArray[3]:',newArray[3]());
console.log('newArray[4]:',newArray[4]());

//task 8
function sum(...nums) {
    if (nums.length === 0) {
        return 0
    } else {
        return nums[0] + sum(...nums.slice(1))
    }
}
console.log('sum(1, 3, 5, 7):',sum(1, 3, 5, 7))

//task 9
function countDown(num) {
    setInterval(() => {
        if (num >= 0) {
            console.log('task9:', num);
            num--;
        }
    }, 1000);
}
countDown(3);
 
//task 10
Function.prototype.myBind = function (context) {
    var func = this;
    return function () {
        return func.apply(context, [...arguments])
    };
}

function addPropToNumber(number) {return this.prop + number;};
var bound = addPropToNumber.myBind({prop: 9});
setTimeout(() => {console.log('bound(1):', bound(1))}, 5000);