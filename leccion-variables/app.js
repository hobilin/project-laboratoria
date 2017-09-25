
var age = parseInt(prompt("How old are you?"));
//converting age to seconds
var ageInSeconds = age*365*24*60*60;
console.log(ageInSeconds);
//showing age in the website
document.write("Your age is " + age + " and in seconds would be " + ageInSeconds);
