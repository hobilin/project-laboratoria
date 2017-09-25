//ask temperature in Celsius
var temperature = parseInt(prompt("What's the temperature for today in °C?"));
//connvert °t from Celsius to Farenheit
var convertToFarenheit = (temperature* 1.8) + 32;
//show result in console
console.log("the temperature in Farenheit is " + convertToFarenheit);
