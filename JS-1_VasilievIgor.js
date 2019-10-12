// --- 1 ---
let splitAndMerge = (str, sp) =>{
    return str.split(' ').join('').split('').join(sp);

}
console.log("Задача №1:");
console.log(splitAndMerge("My name is John"," "));
console.log(splitAndMerge("Hello World!",","));

// --- 2 ---

let hashToArray = (hash) => {
    let mas = [];
    for (let key in hash){
        mas.push([key,hash[key]]);
    }
    return mas;
}
console.log("\nЗадача №2:");
console.log(hashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

// --- 3 ---
let toCamelCase = (str) =>{
    let mas = [];
    if (~str.indexOf('-')){
        mas = str.split('-');
    }
    else {
        mas = str.split('_');
    }

    for (let i = 1; i < mas.length; i++){
        mas[i] = mas[i][0].toUpperCase() + mas[i].slice(1);
    }
    str = mas.join('');
    return str;
}
console.log("\nЗадача №3:");
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_stealth_warrior"));

// --- 4 ---
let toReverseString = (str) =>{
    let mas = str.split(' ');
    mas = mas.map( item => item.split('').reverse().join(''));
    return mas.join(' ');
}
console.log("\nЗадача №4:");
console.log(toReverseString(' A fun little challenge! '));

// --- 5 ---
let stringExpansion = (str = '') =>{
    let mas = str.split('');
    let masFixed = [];
    for (let i = 0; i < mas.length; i++){
        if (isNumber(mas[i])){
            if (!isNumber(mas[i+1])){
                for (let j = 0; j < mas[i]; j++){
                    masFixed.push(mas[i+1]);
                }
                i++;
            }
        }
        else {
            masFixed.push(mas[i]);
        }
    }
    function isNumber(num){
        return isFinite(num) && !isNaN(num);
    }
    return masFixed;
}
console.log("\nЗадача №5:");
console.log(stringExpansion('3D2a5d2f'));
console.log(stringExpansion('3d332f2a'));
console.log(stringExpansion('abcde')) ;

// --- 6 ---
let largest = (...mas) =>{
    return Math.max(...mas);
}

let smallest = (...mas) =>{
    return Math.min(...mas);
}
console.log("\nЗадача №6:");
console.log(largest(2, 0.1, -5, 100, 3)) // 100
console.log(smallest(2, 0.1, -5, 100, 3)) // -5

// --- 7 ---
let transform = (mas) =>{
    return mas.map( item => {
        return function(){
            return item;
        }
    });
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log("\nЗадача №7:");
console.log(newArray[3]());
console.log(newArray[4]());

// --- 8 ---
let sum = (...mas) =>{
    return (mas.length === 0) ? 0 : mas[0] + sum(...mas.slice(1));
}
console.log("\nЗадача №8:");
console.log(sum(1,3,5,7)); //16

// --- 9 ---
let countDown = (n) =>{
    for (let i = n; i >= 0; i--){
        setTimeout(function(){
            console.log(i);
        }, 1000*i);
    }

}
console.log("\nЗадача №9:");
console.log(countDown(3));

// --- 10 ---

Function.prototype.MyBind = function (obj) {
    let f = this;
    return function () {
        return f.apply(obj, arguments);
    };
};

function addPropToNumber(number) { return this.prop + number; }
let bound = addPropToNumber.MyBind({ prop: 9 });
//console.log("\nЗадача №10")
//console.log(bound(1));