// By Alexander Rylkov
'use strict';

/**
 * Divide the sentence into chars with the specified separator.
 * @param {string} string - is a sentence.
 * @param {string} separator - a char as separator.
 * @return {string}
 */
const splitAndMerge = (string, separator) =>
  string.split(``)
      .filter((char) => char !== ` `)
      .join(separator);

/**
 * returns an array of a given object's own enumerable string-keyed property [key, value] pairs
 * @param {object} object
 * @return {Array}
 */
const getArrayFromObject = (object) => Object.entries(object);

/**
 * returns a CamelCase string without '_' and '-'
 * @param {string} string
 * @return {string}
 */
const toCamelCase = (string) => {
  let separator;
  if (~string.indexOf(`_`)) {
    separator = `_`;
  } else if (~string.indexOf(`-`)) {
    separator = `-`;
  } else {
    return string;
  }
  let arr = string.split(separator);
  if (arr.length > 1) {
    arr = arr.map((word, index) => {
      if (!index) {
        return word;
      }
      return word[0].toUpperCase() + word.slice(1);
    });
  }
  const newString = arr.join(``);
  return toCamelCase(newString); // if first string includes `-` and `_`
};

/**
 * returns a sentence with reversed words
 * @param {string} sentence
 * @return {string}
 */
const reverseWordsInSentence = (sentence) => {
  const words = sentence.split(` `);
  const reversedWords = words.map((word) => {
    if (word.length > 1) {
      return word.split(``).reverse().join(``);
    }
    return word;
  });
  return reversedWords.join(` `);
};

/**
 * returns extended string
 * @param {string} code is a string that includes alphanumeric characters ('3a4B2d').
 * The numeric values represent the occurance of each letter preceding that numeric value.
 * @return {string}
 */
const stringExpansion = (code) => {
  if (!code) {
    return code;
  }
  const chars = code.split(``);
  const newChars = [];
  let number;
  let char;
  for (let i = 0; i < chars.length; i++) {
    if (parseInt(chars[i], 10)) {
      number = parseInt(chars[i], 10);
      continue;
    } else {
      char = chars[i];
      if (number) {
        for (let n = 0; n < number; n++) {
          newChars.push(char);
        }
        number = null;
        continue;
      } else {
        if (chars[i] !== newChars[newChars.length - 1]) {
          newChars.push(chars[i]);
          continue;
        }
      }
    }
  }
  return newChars.join(``);
};

/**
 * returns the largest number
 * @param  {...numbers} numbers
 * @return {number}
 */
const largest = (...numbers) => {
  let wrongNumber;
  if (numbers.some((number) => {
    wrongNumber = number;
    return isNaN(number);
  })) {
    throw new Error(`wrong type of number: ${wrongNumber}`);
  }
  return Math.max.apply(null, numbers);
};

/**
 * returns the smallest number
 * @param  {...numbers} numbers
 * @return {number}
 */
const smallest = (...numbers) => {
  let wrongNumber;
  if (numbers.some((number) => {
    wrongNumber = number;
    return isNaN(number);
  })) {
    throw new Error(`wrong type of number: ${wrongNumber}`);
  }
  return Math.min.apply(null, numbers);
};

/**
 * Transform array of numbers to array of functions that will return value from a base array
 * @param {array} arr
 * @return {array}
 */
const transform = (arr) => {
  return arr.map((el) => () => el);
};

/**
 * returns compound value of digit arguments
 * @param  {...numbers} numbers
 * @return {number}
 */
const sum = (...numbers) => {
  let wrongNumber;
  if (numbers.some((number) => {
    wrongNumber = number;
    return isNaN(number);
  })) {
    throw new Error(`wrong type of number: ${wrongNumber}`);
  }
  return (numbers.length === 0) ? 0 : numbers[0] + sum(...numbers.slice(1)); // Task: function should use recursion
};

/**
 * expects number and logs values one by one till zero with one second delay.
 * @param {number} firsNumber
 */
const countDown = (firsNumber) => {
  if (firsNumber >= 0) {
    console.log(firsNumber--);
    setTimeout(() => {
      countDown(firsNumber);
    }, 1000);
  }
  return;
};

// alternative .bind
Function.prototype.myBind = function (context, ...args) {
  const func = this;
  return function (...newArgs) {
    return func.apply(context, [...args, ...newArgs]);
  };
};


(()=>{
  console.log(`_____________TESTS______________`);
  console.log(`splitAndMerge("My name is John"," ") result:`);
  console.log(splitAndMerge("My name is John"," "));
  console.log(`getArrayFromObject({name: 'Jeremy', age: 24, role: 'Software Engineer'}) result:`);
  console.log(getArrayFromObject({name: 'Jeremy', age: 24, role: 'Software Engineer'}));
  console.log(`toCamelCase("the-stealth_warrior") result:`);
  console.log(toCamelCase("the-stealth_warrior"));
  console.log(`reverseWordsInSentence("A fun little challenge!") result:`);
  console.log(reverseWordsInSentence(`A fun little challenge!`));
  console.log(`stringExpansion('A3D2a5d2f') result:`);
  console.log(stringExpansion('3D2a5d2f'));
  console.log(`stringExpansion('abcdef') result:`);
  console.log(stringExpansion('abcdef'));
  console.log(`CRUSHTEST: stringExpansion('gggADDFff1ddH33aaab44cdddef') result:`);
  console.log(stringExpansion('gggADDFff1ddH33aaab44cdddef'));
  console.log(`transform array of numbers [10, 20, 30, 40, 50] to array of functions:`);
  const newArray = transform([10, 20, 30, 40, 50]);
  console.log(`result: newArray[2]() = ${newArray[2]()}`);
  console.log(`--------------`);
  console.log(`largest(2, 0.1, -5, 100, 3) = ${largest(2, 0.1, -5, 100, 3)}`);
  console.log(`smallest(2, 0.1, -5, 100, 3) = ${smallest(2, 0.1, -5, 100, 3)}`);
  console.log(`sum(1,3,5,7) = ${sum(1, 3, 5, 7)}`);
  console.log(`--------------`);
  console.log(`countDown(5) result:`);
  console.log(countDown(5));
})();
