
/*      TASK 1 SPLIT AND MERGE      */
const splitAndMerge = (str, delim) => {
    return str.replace(' ','').split('').join(delim);
};

console.log(splitAndMerge('Hello world', ','));

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

console.log(hashToArr({name: 'Jeremy', age: 24, role: 'Software Engineer'}));

/*      TASK 3 SPLIT AND MERGE      */

const toCamelCasing = (str) => {
    let a = str.split(str[str.search(/(_|-)/)]);
    return a.map(item => item[0].toLocaleUpperCase() + item.substr(1)).join('');
};

console.log(toCamelCasing('Test_gdf_sas'));

/*      TASK 4 SPLIT AND MERGE      */