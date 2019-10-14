function myBind(context, ...boundedArgs) {
  const f = this;
  function bounded(...originalArgs) {
    return f.apply(context, [...boundedArgs, ...originalArgs]);
  }
  return bounded;
}

module.exports = myBind;
