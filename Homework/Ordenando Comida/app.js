//preguntando qué quiere comer
var whatToEat = prompt("¿Qué desea comer?");
whatToEat = whatToEat.toLowerCase()
//creando funcion para disponibilidad
var menu = function (availability){
  if (availability == true) {
    alert("Es tu día de suerte, come todo lo que quieras.");
  }
  else {
    alert("Lo sentimos, hoy no contamos con ese plato.");
  }
}

// estableciendo disponibilidad del menu
if (whatToEat === "ceviche") {
  menu(false)
}
else if (whatToEat === "taco al pastor") {
  menu(true)
}
else if (whatToEat === "empanada chilena") {
  menu(true)
}
else if (whatToEat === "hamburguesa") {
  manu(false)
}
else {
  alert("Éste producto no existe en nuestro menu");
}
