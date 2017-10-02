function getNthElement(array, n) {
  for(var i = 0; i < array.length; i++){
      if(n === array.indexOf(array[i])){
          return array[i];
      }
  }if (array.length === 0){
      return undefined;
  }
}
