//1

function splitAndMerge(str, sp) {
    str=String(str);
    sp=String(sp);
    const arr = str.split(' ');
    let res = [];
    for (let elem of arr) {
        res = res.concat(elem.split(''));
    }

    return res.join(sp);
}

//2

function convert(obj) {
    let res = [];
    for (let key in obj) {
        res.push([key, obj[key]]);
    }
    return res;
}

//3

function toCamelCase(str) {
    str=String(str);
    let arr = [];
    if (str.includes('-')) {
        arr = str.split('-');
    }
    if (str.includes('_')) {
        arr = str.split('_');
    }
    arr = arr.map((item, i) => {
        if (i > 0) {
            let letter = item.slice(0, 1);
            item = item.slice(1,);
            item = letter.toUpperCase().concat(item);
        }
        return item;
    });
    return arr.join('');
}

//4

function reverseSentence(sentence) {
    sentence=String(sentence);
    let arr = sentence.split(' ');
    arr = arr.map((item) => {
        return item.split("").reverse().join("")
    });
    return arr.join(' ');
}

//5

function stringExpansion(str){
str=String(str);
let res='';
let arr=str.match(/\d?[a-z]/ig);
arr.forEach((item)=>{
    res+=item[1].repeat(+item[0]);
    return res;
});
    return res;
}

//6

function largest(...args) {
    return Math.max(...args);
}

function smallest(...args) {
    return Math.min(...args);
}

//7

function transform(arr) {
    return arr.map((item, i)=>{ return(function(){return item})()});
}

//8

function sum(...args) {
    return (args.length === 0) ? 0 : args[0] + sum(...args.slice(1));
}

//9

function countDown(sec) {
    let timerId = setInterval(() => {
        console.log(sec);
        if (sec === 0) {
            clearInterval(timerId);
        }
        sec--;
    }, 1000, sec)
}

//10

Function.prototype.myBind=function( context, ...args){
return (...otherArgs)=>{
    args=otherArgs.concat(args);
    return this.apply(context, args);
};
};
