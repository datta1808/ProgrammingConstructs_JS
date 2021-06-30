// To find degF or degC based on their Conversion Selection

const prompt = require('prompt-sync')();

function getDegC(degF) {
    return (degF - 32) * (5 / 9);
}

function getDegF(degC) {
    return (degC * (9 / 5)) + 32;
}

console.log("Enter your Option \n1. Convert to degC \n2. Convert to degF");
let choice = Number(prompt("Enter your choice : "));
let input = 0;

switch (choice) {
    case 1: 
        input = Number(prompt("Enter input between 32deF and 212degF : "));
        console.log(getDegC(input));
        break;
    case 2: 
        input = Number(prompt("Enter input between 0degC and 100degC : "));
        console.log(getDegF(input));
        break;
    default: 
        console.log("Invalid!!");
}