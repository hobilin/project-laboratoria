//calcular salario semanal de una persona

function weekSalary(hours, payment){
  return hours * payment;
}

//calcular la cantidad de digitos de un numero

function numberOfDigits(number){
  var counter = 0;
  var digits = number.toString();
  for(var i = 0; i < digits.length; i++);{
    counter++;
  }
  return counter;
}// i+=2 --> i = i + 2


//verificar si una palabra es palindrome
function palindromeOrNot(word){
  var splittedWord = word.split("");
  var reverseSplittedWord = splittedWord.reverse();
  var rejoinedReverseSplittedWord = reverseSplittedWord.join("");

  if(palindromeOrNot === rejoinedReverseSplittedWord){
      return true;
    }else{
      return false;
    }

  //Como lo hizo la profe

  function palindrome(word){
    var long = word.lenght;
    for(var i = 0; i < long; i++){
      if(word[i] == word[long - 1 - i]){
        return true;
      }
      }
      return false;
    }
