var age = prompt("What's your age?");

if (age !== Number.isInteger){
  alert("Sorry, that's not an accurate age.");
}

else if (age <= 3){
  alert("You are a Toddler!");
}
else if (age <= 5) {
  alert("You are a Preschooler!");
}
else if (age <= 12) {
  alert("You are a Gradeschooler!");
}
else if (age <= 18) {
  alert("You are a Teenager!");
}
else if (age <= 21) {
  alert("You are a Young Adult!");
}
else {
  alert("You are an adult!");
}
