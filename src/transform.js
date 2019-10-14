function transform(arr) {
  return arr.map(item => () => item);
}

module.exports = transform;
