/**
1.Function accept 2 parameters:str and sp. str is a sentence. sp is a char as separator.
First we need to divide the sentence into words(Use separator space); 
and then divide each word into characters(Use separator empty string); 
and then merge each characters with the specified sp; at last merge all the words(Use separator space) and return it.
*/
function splitAndMerge(str,sp){
  let words = str.split(" "); //devide into words
  let charapters = [];
  for(let word of words){
    charapters.push(word.split(""));
  }
  let result = [];
  for(let ch of charapters){
      result.push(ch.join(sp));
  }
 return result.join(" "); 
}

/**
2.Convert a hash into an array. Nothing more, Nothing less.
*/
function convert(hash){
  let arr = [];
  for(let key in hash)
     arr.push([key,hash[key]]);
  return arr;
}

/**
3.Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized.
*/
function toCamelCase(str){
  let arr = str.split("_");
  if(arr.length==1){
    arr = str.split("-");
  }
  for (let el in arr){
    let chars = arr[el].split("");
    chars[0] = chars[0].toUpperCase();
    arr[el] = chars.join("");
  }
  return arr.join("");
}

/**
4.Write a function that takes a sentence (string) and reverses each word in the sentence.
*/
function reverse(str){
  let words = str.split(" ");
  for (let i in words){
    words[i] = words[i].split("").reverse().join("");
  }
  return words.join(" ");
}

/**
5.Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string:
The numeric values represent the occurance of each letter preceding that numeric value.
There should be no numeric characters in the final string. Empty strings should return an empty string.
*/
function stringExpansion(str){
  let chars = str.split("");
  let result=[];
  for (let i in chars){
    if(i%2!=0){
      let el = chars[i];
      let newStr = [];
     for(let j=0;j<chars[i-1];j++){
       newStr.push(el);
     }
      result.push(newStr.join(""));
    }
  }
  return result.join("");
}

/**
6.Write largest and smallest functions that returns the largest and smallest number passed like a argument.
*/
function largest(...number){
  let max = number[0];
  for (let el of number){
    if(el>max)
      max = el;
  }
 return max;
}
function smallest(...number){
  let min = number[0];
  for (let el of number){
    if(el<min)
      min = el;
  }
 return min;
}

/**
7.Write function transform that will transform array of numbers to array of functions that will return value from a base array.
*/
function tr(arr){
  let result = [];
  for (let i in arr){
    result.push(new Function('return '+arr[i]));
  }
  return result;
}

/**
Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them. 
Note: function should use recursion
*/
function sum(...args){
  let i = args.length;
  let a = args[i-1];
  for (let k=i-2; k>-1; k--){
      a+= sum(args[k])
  }
  return a;
  }
  
/**
9.Write function countDown. Function expects number and logs values one by one till zero with one second delay.
*/
function countDown(from){
  if(from<0)
    return false;
   setTimeout(function(){
       console.log(from);
       countDown(from-1) // рекурсия
   }, 1000);
};

/**
Write a polyfill for a .bind() function and save it in Function.prototype.myBind(). myBind() should work
in an exact same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.
*/
Function.prototype.myBind = function (cntxt) {
    var current_func =  this;
    return function () {
        return current_func.apply(cntxt, [...arguments])
    };
}

const addPropToNumber = function(val) { 
	return this.prop + val; 
}
const bound = addPropToNumber.myBind({ prop: 3 });

const test = () => {
  
console.log(splitAndMerge("My name is John"," "));//1
console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}));//2
console.log(toCamelCase("the-stealth-warrior"));//3.1
console.log(toCamelCase("The_Stealth_Warrior")); //3.2
console.log(reverse(" A fun little challenge! "));//4
console.log(stringExpansion("3D2a5d2f"));//5.1
console.log(stringExpansion("3d332f2a"));//5.2
console.log(stringExpansion("abcde"));//5.3
console.log(largest(2, 0.1, -5, 100, 3));//6.1
console.log(smallest(2, 0.1, -5, 100, 3));//6.2
//7
const baseArray = [10, 20, 30, 40, 50];
const newArray = tr(baseArray);
console.log(newArray[3]()); // should return 40
console.log(newArray[4]()); // should return 50
  
console.log(sum(1,3,5,7));//8
console.log(countDown(5));//9
console.log(bound(1)); //10
}

test();

