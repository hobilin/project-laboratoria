function fromListToObject(array) {
  var object = {};
  for(var i = 0; i < array.length; i++){
     object[array[i][0]] = array[i][1];
      }

  return object;
}
