//multiplicando array por 5 y creando una nueva array con el resultado.
var numbers = [1, 2, 3, 4 ,5];

function multiply(array){
  var result = []; //var result = new array
  for(var i = 0; i < numbers.length; i++){
    result[(numbers[i] *5)];
  }
  return result;
}

//encontrando los numeros pares de un array y creando un nuevo array con el resultado.
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEven(arr){
  var result = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){ //si el resto del indice dividido 2 es cero ---> buscando pares.
      result.push(arr[i]);
    }
  }
  return result;
}


//probando distintas propiedades y metodos.
var cats = ['Effy', 'Yoda', 'Black', 'Suga', 'Zancon', 'Mochi'];

cats.pop(); //saca a Mochi
cats.indexOf('Yoda'); //retorna 1
cats.push('Gorda'); //adds Gorda at the end.


//declarando un objeto vacío.
var cat  = {};

cat.name = 'Effy'; // or cat['name'] = 'Effy';
cat.age = 2; //or cat['age'] = 2;
cat.size = 'Extra large'; //or cat['size'] = 'Extra large';

Object.keys(cat); //returns all the keys.
















]
