// To take a input and determine if the number is a prime

    const prompt = require('prompt-sync')();

    let number = Number(prompt("Enter a number : "));

    if (number >= 2) {
        let flag = 0;
        for (let index = 2; index <= number / 2; index++) {
            if (number % index == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 1)
            console.log("Not a prime number");
        else
            console.log("Prime number");
    }
    else
        console.log("Invalid!!");