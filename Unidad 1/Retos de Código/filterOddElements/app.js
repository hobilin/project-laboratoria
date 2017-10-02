

function filterOddElements(array) {
    var newArray = [];

   for(var i = 0; i < array.length; i++){

       if( array[i] % 2 !== 0 ){
           newArray.push(array[i]);
       }

   }
   return newArray;

}
