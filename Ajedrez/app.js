//tamaño de la cuadrícula
var size = parseInt(prompt('What size do you want the board to be?'));

//creando cuadricula
var result = '';

for (var row = 1; row <= size; row++) {
  for (var column = 1; column <= size; column++){
    if ((column + row) % 2 == 0) {
      result += ' ';
    } else {
      result += '#';
    }
  }
  result += '\n';
}
console.log(result);
