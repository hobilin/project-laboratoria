do {
  var phrase = prompt("Write down any phrase, please");

  if(phrase != ""){
    countCharacters(phrase);
    printCharacters(phrase);
    countWhitespaces(phrase);
} else{
    console.log("Error debes ingresar una frase.")
}

}while(phrase === '')

//imprimiendo en mayúscula
function printCharacters(text){
  for(var i= 0; i < text.length; i++){
    console.log(text[i].toUpperCase());
  }
}
//contndo carácteres
function countCharacters(text){
  var count = 0;
  while(true){
    var charFromText = text.charAt(count);
    if (charFromText == ""){
      break;
    }
    count++
  }
}

console.log("the number of characters of your string is" + count);

//contando espacios
function countWhitespaces(text){
  var counter = 0;
  for (var i = 0; i < text.length; i++){
    if (text[i] == " "){
      counter++
    }
  }
 console.log("the total of white spaces es" + counter);
}
