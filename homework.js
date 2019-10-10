const splitAndMerge = (str, delim) => {
    return str.replace(' ','').split('').join(delim);
}
console.log(splitAndMerge('Hello world', ','));
