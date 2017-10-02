
function areArraysSame (array1, array2){
  for(var i = 0, j = 0; i < array1.length, j < array2.length; i++, j++){
  if(array1[i] === array2[j]){
    return true;
  } else{
    return false;
  }
}
}
