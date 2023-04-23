var prompt = require('prompt-sync')();
var number = prompt("Enter the number : ");

var harmonic = 0;
for(let i = 1; i <= number; i++)
 {
    harmonic = 1/i + harmonic;
    console.log("Harmonic number of " + i + " is : " + harmonic);
 }