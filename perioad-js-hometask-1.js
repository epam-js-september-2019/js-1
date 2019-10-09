const splitAndMerge = (str, sp) => {
  const words = str.split(' ');
  const wordsIntoCharacters = words.map((word) => word.split(''));
  const wordsWithCharactersMergedWithSp = wordsIntoCharacters.map((word) => word.join(sp));
  return wordsWithCharactersMergedWithSp.join(' ');
};

console.log("splitAndMerge('My name is John',' '): ", splitAndMerge('My name is John', ' '));
console.log("splitAndMerge('Hello World!',','): ", splitAndMerge('Hello World!', ','));

const convert = (hash) => Object.entries(hash);

console.log("convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}: ", convert({ name: 'Jeremy', age: 24, role: 'Software Engineer' }));

const toCamelCase = (str) => {
  const arrayOfWordsToCamelCase = (arrayOfWords) => {
    const wordsToUpperCase = arrayOfWords.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`);
    const wordsToUpperCaseWithoutFirstWord = wordsToUpperCase.slice(1);
    const resultWords = [...arrayOfWords[0], ...wordsToUpperCaseWithoutFirstWord];
    return resultWords.join('');
  };
  if (str.includes('-')) {
    const words = str.split('-');
    return arrayOfWordsToCamelCase(words);
  }
  if (str.includes('_')) {
    const words = str.split('_');
    return arrayOfWordsToCamelCase(words);
  }
  return 'There are no dash/underscore delimited words';
};

console.log("toCamelCase('the-stealth-warrior'): ", toCamelCase('the-stealth-warrior'));
console.log("toCamelCase('The_Stealth_Warrior'): ", toCamelCase('The_Stealth_Warrior'));

const reverseEachWord = (str) => {
  const reverseWord = (word) => {
    if (!word) {
      return '';
    }
    return `${reverseWord(word.slice(1))}${word[0]}`;
  };
  const words = str.split(' ');
  const reversedWords = words.map(reverseWord);
  return reversedWords.join(' ');
};

console.log("reverseEachWord(' A fun little challenge! '): ", reverseEachWord(' A fun little challenge! '));

const stringExpansion = (str) => {
  if (str.length === 0) {
    return '';
  }
  let newStr = '';
  for (let i = 0; i <= str.length - 1; i += 1) {
    if (isNaN(str[i])) {
      newStr = `${newStr}${str[i]}`;
    }
    if (!(isNaN(str[i])) && !(isNaN(str[i + 1]))) {
      continue;
    }
    if (!(isNaN(str[i - 1])) && isNaN(str[i])) {
      newStr = `${newStr}${str[i].repeat(str[i - 1] - 1)}`;
      continue;
    }
  }
  return newStr;
};

console.log("stringExpansion('3D2a5d2f'): ", stringExpansion('3D2a5d2f'));
console.log("stringExpansion('3d332f2a'): ", stringExpansion('3d332f2a'));
console.log("stringExpansion('abcde'): ", stringExpansion('abcde'));

const largest = (...numbers) => (
  numbers.reduce((acc, number) => (number > acc ? number : acc), -Infinity)
);

console.log('largest(2, 0.1, -5, 100, 3):', largest(2, 0.1, -5, 100, 3));

const smallest = (...numbers) => (
  numbers.reduce((acc, number) => (number < acc ? number : acc), Infinity)
);

console.log('smallest(2, 0.1, -5, 100, 3):', smallest(2, 0.1, -5, 100, 3));

const transform = (arr) => (index) => arr[index];

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log('newArray(3): ', newArray(3));
console.log('newArray(4): ', newArray(4));

const sum = (...numbers) => {
  if (numbers.length === 0) {
    return 0;
  }
  const [number, ...rest] = numbers;
  return number + sum(...rest);
};

console.log('sum(1,3,5,7):', sum(1, 3, 5, 7));
console.log('sum():', sum());
console.log('sum(-8, 8):', sum(0));

const countDown = (time) => {
  let seconds = time;
  const counter = setInterval(() => {
    console.log(seconds);
    seconds -= 1;
    if (seconds < 0) {
      clearInterval(counter);
    }
  }, 1000);
};

console.log('countDown(3):'); countDown(3);

Function.prototype.myBind = function (context, ...bindedArgs) {
  const func = this;
  return function (...args) {
    return func.apply(
      context,
      [...bindedArgs, ...args],
    );
  };
};

function addPropToNumber(number) { return this.prop + number; }
const bound = addPropToNumber.myBind({ prop: 9 });
console.log('bound(1):', bound(1));
