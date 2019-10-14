function countDown(n) {
  console.log(n);
  if (n > 0) {
    setTimeout(countDown.bind({}, n - 1), 1000);
  }
  return;
}

module.exports = countDown;
