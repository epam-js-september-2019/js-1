function splitAndMerge(str, sp) {
  return str
    .split(" ")
    .map(word => word.split(""))
    .map(word => word.join(sp))
    .join(" ");
}

module.exports = splitAndMerge;
