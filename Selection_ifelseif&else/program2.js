// To read a Number and Display the week day

const prompt = require('prompt-sync')();

let weekNumber = prompt("Enter Weekday Number : ");

let weekDay;

if (weekNumber >= 1 && weekNumber <= 7) {
    if (weekNumber == 1)
        weekDay = "Sunday";
    else if (weekNumber == 2)
        weekDay = "Monday";
    else if (weekNumber == 3)
        weekDay = "Tuesday";
    else if (weekNumber == 4)
        weekDay = "Wednesady";
    else if (weekNumber == 5)
        weekDay = "Thursday";
    else if (weekNumber == 6)
        weekDay = "Friday";
    else if (weekNumber == 7)
        weekDay = "Saturday";
    console.log(`Weekday number = ${weekNumber}, weekday = ${weekDay} `);
}
else
    console.log("Invalid!!");