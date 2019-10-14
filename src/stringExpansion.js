function stringExpansion(source) {
  let output = "";
  let coeff = 1;
  for (let ch of source) {
    const num = parseInt(ch);
    if (!isNaN(num)) {
      coeff = num;
    } else {
      output = output + ch.repeat(coeff);
    }
  }
  return output;
}

module.exports = stringExpansion;
