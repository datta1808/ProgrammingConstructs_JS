// To take user inputs and does unit conversion of different length units

const prompt = require('prompt-sync')();

console.log("Enter your choice \n1. Feet to Inch \n2. Inch to Feet \n3. Feet to Meter \n4. Meter to Feet");

let choice = Number(prompt("Enter your choice : "));
let input = Number(prompt("Enter your input : "));
switch (choice) {
    case 1:
        console.log(input + " feet = " + (input * 12) + " inch");
        break;
    case 2: 
        console.log(input + " inch = " + (input / 12) + " feet");
        break;
    case 3:
        console.log(input + " feet = " + (input * 0.3048) + " meter");
        break;
    case 4: 
        console.log(input + " meter = " + (input * 3.281) + " feet");
        break;
    default: 
        console.log("Invalid!!");
}