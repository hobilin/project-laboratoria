//ask name and surname
var name = prompt("What's your name and surname?");
//get name initial
var nameInitial  = name.slice(0,1);
//Get position of surname initial
var secondInitialPosition = name.indexOf(" ") +1;
//get surname initial
var surnameInitial = name.slice(secondInitialPosition,secondInitialPosition+1);
//show initials in website
document.write("Your initials are: " + nameInitial.toUpperCase() + surnameInitial.toUpperCase());
