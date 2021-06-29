//To take a year as input and outputs the Year is a Leap Year or not a Leap Year

const prompt = require('prompt-sync')();

let year = prompt("Enter Year : ");

if (year >= 1000 && year <= 9999) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0)
                console.log("Leap Year");
            else
                console.log("Not a Leap Year");
        }
        else
            console.log("Leap Year");
    }
    else
        console.log("Not a Leap Year");
}
else
    console.log("Not a four digit year!!");
