function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toCamelCase(str) {
  return str
    .split("-")
    .flatMap(word => word.split("_"))
    .map((word, index) => (index !== 0 ? capitalize(word) : word))
    .join("");
}

module.exports = toCamelCase;
