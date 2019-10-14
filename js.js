// 1) Write a function splitAndMerge

(() => {
    const splitAndMerge = (str, separator) => {
        return str
            .split(" ")
            .map(word => word.split(""))
            .map(word => word.join(separator))
            .join(" ");
    }

    console.log(splitAndMerge("My name is John", " "));
    console.log(splitAndMerge("Hello World!", ","));
})();


// 2) Write a function convert

(() => {
    const objectToArray = (obj) => {
        return Object.entries(obj);
    }

    console.log(objectToArray({ name: "Jeremy", age: 24, role: "Software Engineer" }));
})();

// 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//    The first word within the output should be capitalized only if the original word was capitalized.

(() => {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const toCamelCase = (str) => {
        return str
            .split("-")
            .flatMap(word => word.split("_"))
            .map((word, index) => (index !== 0 ? capitalize(word) : word))
            .join("");
    }

    console.log(toCamelCase("the-stealth-warrior"));
    console.log(toCamelCase("The_Stealth_Warrior"));
})();


// 4) Write a function that takes a sentence (string) and reverses each word in the sentence.

(() => {
    const reverseWords = (sentence) => {
        return sentence
            .split(" ")
            .map(word => {
                return word.split("")
                    .reverse()
                    .join("");
            })
            .join(" ");
    }

    console.log(reverseWords(" A fun little challenge! "));
})();


// 5) Write a function stringExpansion

(() => {
    const stringExpansion = (source) => {
        let output = "";
        let coeff = 1;
        for (let ch of source) {
            const num = parseInt(ch);
            if (!isNaN(num)) {
                coeff = num;
            } else {
                output = output + ch.repeat(coeff);
            }
        }
        return output;
    }

    console.log(stringExpansion("3D2a5d2f"));
    console.log(stringExpansion("3d332f2a"));
    console.log(stringExpansion("abcde"));

})();

// 6) Write largest and smallest functions that returns the largest and smallest number passed like a argument.

(() => {
    const getLargest = (...numbers) => {
        return Math.max(...numbers);
    }

    const getSmallest = (...numbers) => {
        return Math.min(...numbers);
    }

    const largest = getLargest(2, 0.1, -5, 100, 3);
    const smallest = getSmallest(2, 0.1, -5, 100, 3);

    console.log('largest: ' + largest);
    console.log('smallest: ' + smallest);
})();

// 7) Write function transform that will transform array of numbers to array of functions that will return value from a base array.

(() => {
    const transform = (arr) => {
        return arr.map(item => () => item);
    }

    const arr1 = [10, 20, 30, 40, 50];
    const arr2 = [10, 20, 30, 40, 50];

    const newArr1 = transform(arr1)[3]();
    const newArr2 = transform(arr2)[4]();

    console.log('new array 1: ' + newArr1);
    console.log('new array 2: ' + newArr2);
})();


// 8) Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them. Note: function should use recursion

(() => {
    const sum = (...numbers) => {
        return numbers.reduce((sum, item) => sum + item, 0);
    }

    sum(1, 3, 5, 7);
})();

// 9) Write function countDown. Function expects number and logs values one by one till zero with one second delay.
(() => {
    const countDown = (n) => {
        console.log(n);
        if (n > 0) {
            setTimeout(countDown.bind({}, n - 1), 1000);
        }
        return;
    }

    countDown(10);
})();

// 10) Write a polyfill for a .bind() function and save it in Function.prototype.myBind().myBind() should work in an exact same way as
//     the usual bind() - take context as a first parameter and the list of arguments separated by comma.