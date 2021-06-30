// function to check if the two numbers are Palindromes

const prompt = require('prompt-sync')();

function isPalindrome(number1, number2) {

    let reversedNumber = 0;

    while (number1 > 0) {
        let remainder = number1 % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        number1 = Math.floor(number1 / 10);
    }
    if (reversedNumber == number2)
        return true;
    else
        return false;
}

let numberOne = Number(prompt("Enter first number : "));
let numberTwo = Number(prompt("Enter second number : "));

if (isPalindrome(numberOne, numberTwo))
    console.log("Two numbers are Palindromes");
else
    console.log("Two numbers are not Palindromes");