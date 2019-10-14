function splitAndMerge(str, sp) {
    return str
        .split(" ")
        .reduce((acc, element) => acc + (element.split("").join(sp) + " "), "")
        .trim();
}

function convert(hash) {
    return Object.entries(hash);
}

function toCamelCase(str) {
    return str.split("").map(element => (element === "-" || element === "_") ? " " : element).reduce((acc, current, index, str) => {
        if (current === " " && index < str.length - 1) {
            str[index + 1] = str[index + 1].toUpperCase();
            return acc;
        } else {
            return acc + current;
        }
    })
}

function reverseWord(str) {
    return str.split("").reverse().reduce((acc, elem) => acc + elem);
}

function stringExpansion(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && typeof str[i + 1] === "string" && isNaN(str[i + 1])) {
            result += str[i + 1].repeat(str[i] - 1);
        } else if (!isNaN(str[i]) && !isNaN(str[i + 1])) {
        } else {
            result += str[i];
        }
    }
    return result;
}

function largest(...args) {
    return Math.max(...args);
}

function smallest(...args) {
    return Math.min(...args);
}

function transform(arr) {
    return arr.map((element) => () => element);
}

function sum(...args) {
    return args.reduce((acc, element) => acc + element);
}

function countDown(num) {
    const log = () => console.log(num);
    const iter = (times) => {
        if (times < 0) {
            return;
        }
        setTimeout(log, 1000);
        iter(times - 1)
    };
    iter(num);
}

Function.prototype.myBind = function () {
    var func = this,
        args = [].slice.call(arguments),
        context = args.shift();
    return function () {
        return func.apply(context, args.concat([].slice.call(arguments)));
    };
};

