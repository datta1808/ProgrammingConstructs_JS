//To read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred etc

const prompt = require('prompt-sync')();

let num = Number(prompt("Enter a number : "));

switch (num) {
    case 1: 
        console.log("Unit");
        break;
    case 10: 
        console.log("Ten");
        break;
    case 100: 
        console.log("Hundred");
        break;
    case 1000: 
        console.log("Thousand");
        break;
    case 10000: 
        console.log("Ten thousand");
        break;
    default: 
        console.log("Invalid!!");
}