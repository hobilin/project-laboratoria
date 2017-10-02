//creando función para escribir un rango de numeros desde start hasta end


function range(start, end){
  var newArray = [];
  for(var i = start; i <= end ; i++){
      newArray.push(i);
    }
    return newArray;
  }


//sumando numeros de un array con una función
function sum(array){
  var total = 0;
  for(var j = 0; j < array.length; j++){
    total += array[j];
  }
  return total;
}
console.log(sum(range(1, 10)));

//agregando un parámetro "step" para que en range se salte números dependiendo del valor de step.
function range2(start, end, step){
  
}
