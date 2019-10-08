
function splitAndMerge(str, sp) {
    return (str.split(' ').join('').split('').join(sp));
} //1

function convertObjtoArr(obj) {
    let arr = [];
    for (let key in obj) {
        let subArr = [];
        subArr.push (key, obj[key]);
        arr.push(subArr);
    }
    return arr;
} //2

function toCamelCase(str) {
    if (str.includes('-')) {
        return str.split('-').join('');
    } else if (str.includes('_')) {
        return str.split('_').join('');
    };
} //3

function reverseWords(str) {
    let arr = str.split(' ');
    let reverseArr= arr.map(item => item.split('').reverse().join(''))
    return reverseArr.join (' ');
} //4

function stringExpansion(str){
    let newArr = [];
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++) {
        if (isFinite(arr[i]) && !isFinite(arr[i+1])) {
            for (let j = 0; j < arr[i]; j++){
                newArr.push(arr[i+1])
            };
        } else if (!isFinite(arr[i]) && !isFinite(arr[i-1])){
            newArr.push(arr[i])
        };
    };
    return newArr.join('')
} //5

function largest(...args) {
    return Math.max(...args);
}; //6

function smallest(...args) {
    return Math.min(...args);
} //6


function transform(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr[i] = function(){
            return arr[i];
        };
    };
    return newArr;
} //7

function sum(...args){
    if (args.length === 1) {
        return args[0]
    } else {
        let a = args.pop()
        return a + sum(...args);
    };
} //8

function countDown(num) {
    function count() {
        console.log(num--)
    };
    let timerCount = setInterval(count, 1000);
    setTimeout(() => { clearInterval(timerCount)}, num*1000);
} //9

Function.prototype.myBind = function (context) {
    var clone = {};
    clone.__proto__ = context;
    clone.temp = this;
    return function (arg) {
        return clone.temp(arg)
    };
} //10

console.log(1, splitAndMerge("My name is John"," "))
console.log(1.1, splitAndMerge("Hello World!",","))
console.log(2, convertObjtoArr({name: 'Jeremy', age: 24, role: 'Software Engineer'}))
console.log(3, toCamelCase("the-stealth-warrior"))
console.log(3.1, toCamelCase("The_Stealth_Warrior"))
console.log(4, reverseWords(" A fun little challenge! "))
console.log(5, stringExpansion('3D2a5d2f'))
console.log(5.1, stringExpansion('3d332f2a'))
console.log(5.2, stringExpansion('abcde'))
console.log(6, largest(2, 0.1, -5, 100, 3))
console.log(6.1, smallest(2, 0.1, -5, 100, 3))
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray)
console.log(7, newArray[3]())
console.log(7.1, newArray[4]())
console.log(8, sum(1,3,5,7))
countDown(3) //9
function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(10, bound(1))