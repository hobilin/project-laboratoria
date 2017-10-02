var student = {
  track: "Front-End Developer"

}
//preguntando por nombre y edad
var name = prompt("What's your name?");
var age = parseInt(prompt("What's your age?"));

//añadiendo mas objetos
student.name = name;
//o puedes usar
student["age"] = age;

//actualizando valor
student.track = "UX Designer";

console.log(student);
