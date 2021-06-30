// To  take a command-line argument n and print the nth harmonic number

    const prompt = require('prompt-sync')();

    let number = Number(prompt("Enter a number : "));

    let harmonicNumber = 1;

    for (let index = 2; index <= number; index++) {
        harmonicNumber += 1 / index;
    }

    console.log("Harmonic Number is " + harmonicNumber);