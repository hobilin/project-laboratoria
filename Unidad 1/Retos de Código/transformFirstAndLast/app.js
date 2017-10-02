function transformFirstAndLast(array) {
  var obj = {};
  obj[array.shift()] = array.pop();
  return obj;
}
