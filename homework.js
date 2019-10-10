
/*      TASK 1 SPLIT AND MERGE      */
const splitAndMerge = (str, delim) => {
    return str.replace(' ','').split('').join(delim);
};

//console.log(splitAndMerge('Hello world', ','));

/*      TASK 2 HASH TO ARR      */

const hashToArr = (obj) => {
    let result = [];
    let arr = [];
    for (const item in obj) {
        arr = [item, obj[item]];
        result.push(arr);
    }
    return result;
};

//console.log(hashToArr({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

/*      TASK 3 CAMEL CASING      */

const toCamelCasing = (str) => {
    let a = str.split(str[str.search(/(_|-)/)]);
    return a.map(item => item[0].toLocaleUpperCase() + item.substr(1)).join('');
};

//console.log(toCamelCasing('Test_gdf_sas'));

/*      TASK 4 WORD REVERSE      */

const wordReverse = (str) => {
    return str.split(' ').map(item => item.split('').reverse().join('')).join(' ');
};

//console.log(wordReverse(' A fun little challenge!'));

/*      TASK 5 STRING EXPANSION      */

const stringExpansion = (str) => {
    let result = '';
    for(let i = 0; i<str.length; i++) {
        result += str[i].repeat(str[i-1]);
    }
    result = result.replace(/[0-9]/g, '');
    return result.length !== 0 ? result : str;
};

//console.log(stringExpansion('abcde'));
