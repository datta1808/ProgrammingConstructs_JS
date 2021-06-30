// To take a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n

const prompt = require('prompt-sync')();

let number = Number(prompt("Enter a number : "));

for (let index = 0; index <= number; index++) {
    console.log(`${Math.pow(2, index)}`);
}
