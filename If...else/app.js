var catName = prompt("Give me your cat's name");

if (catName.length < 4) {
  alert("your cat's name is short");
}
else if (catName.length < 14) {
  alert("your cat's name is normal");
}
else {
  alert("your cat's name is waay too long");
}
