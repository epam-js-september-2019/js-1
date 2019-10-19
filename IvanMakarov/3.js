/* 3) Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
Example:

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" */
function toCamelCase(param) {
    var camel = param.replace(/\_/g,'-');
    camel = camel.split(/[-]/);
    for (i = 1; i < camel.length; i++) {
        camel[i] = camel[i][0].toUpperCase() + camel[i].slice(1);
    }
    camel = camel.join('');
    return camel;
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));