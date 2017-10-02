
var michelle = {
  name: 'Michelle',
  points: 2000,
  isActive: true,
  courses: ['Intro JS', 'JS avanzado', 'JS master']
};

var alexandra = {
  name: 'Alexandra',
  points: 4100,
  isActive: true,
  courses: ['Intro JS', 'Intro UX', 'UX master']
};

var andrea = {
  name: 'Andrea',
  points: 800,
  isActive: false,
  courses: ['Intro JS', 'JS avanzado']
};

var students = [michelle, alexandra, andrea];

//creando for para imprimir alumnas activas
for (var i = 0; i < students.length; i++) {
  if(students[i].isActive) {
    console.log(students[i].name);
  }
}

//creando for para imprimir points
var total = 0;
for (var i = 0; i < students.length; i++ ) {
  total += students[i].points;
}
console.log(total);

//creando for para imprimir el nombre de las estudiantes que lleven el curso de JS avanzado
for (var i = 0; i < students.length; i++) {
  var studentCourses = students[i].courses;
  //['Intro JS', 'JS avanzado', 'JS master']
  for (var j = 0; j < studentCourses.length; i++) {
    if (studentCourses[j] === "JS avanzado") {
      console.log(students[i].name);
    }
  }
}
