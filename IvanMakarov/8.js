/* 8) Write function sum. Function expects arbitrary number of digit arguments and returns compound value of them. Note: function should use recursion
Example:

sum(1,3,5,7); //should return 16 */
function sum(digits) {
    if (arguments.length === 1) {
        return digits;
    } else {
        return digits + sum.apply(null, [].slice.call(arguments,1));
    }
}

console.log(sum(1,3,5,7));