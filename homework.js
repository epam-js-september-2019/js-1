const splitAndMerge = (str, delim) => {
    return str.replace(' ','').split('').join(delim);
}
console.log(splitAndMerge('Hello world', ','));

const hashToArr = (obj) => {
    let result = [];
    let arr = [];
    for (const item in obj) {
        arr = [item, obj[item]];
        result.push(arr);
    }
    return result;
}
console.log(hashToArr({name: 'Jeremy', age: 24, role: 'Software Engineer'}));
