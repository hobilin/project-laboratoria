function getProductOfAllElementsAtProperty(obj, key) {

 if(Array.isArray(obj[key]) === false){
          return 0;

      } else if(obj[key].length < 1){
          return 0;

      }
   var result = 1;
   for(var i in obj[key]){
      result *= obj.key[i];
      }
       return result;

  }
 
