function getLargestNumberAmongMixedElements(arr) {
    var newArray = [];
  for(var i = 0; i < arr.length; i++){

      if(arr[i] === Number.isInteger){
          newArray.push(arr[i]);

      }else if(arr[i] !== Number.isInteger){
          return 0;

      }else if(arr === []){
          return 0;

      }
  }

}
//not finished
