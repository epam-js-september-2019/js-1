function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map(word => reverse(word))
    .join(" ");
}

module.exports = reverseWords;
