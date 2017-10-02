function transformEmployeeData(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++){
      var obj = {};
  for(var j = 0; j < array[i].length; j++) {
       obj[array[i][j][0]] = array[i][j][1];
    }
    newArray.push(obj);
  }
  return newArray;
}

 
