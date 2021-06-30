// To compute a factorial of a number taken as input

    const prompt = require('prompt-sync')();

    let number = Number(prompt("Enter a number : "));

    let factorial = 1;

    for (let index = 1; index <= number; index++) {
        factorial = factorial * index;
    }

    console.log(`Factorial of ${number} is ${factorial}`);