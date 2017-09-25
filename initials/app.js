//ask for name
var name = prompt("What's your name?");
//ask for surname
var surname = prompt("What's your surname?");
//get name initial
var nameInitial = name.charAt(0);
//get surname initial
var surnameInitial = surname.charAt(0);
//show in website
document.write("These are your initials capitalized: " + nameInitial.toUpperCase() + surnameInitial.toUpperCase());
