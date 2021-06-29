// To simulate a coin flip and print out "Heads" or "Tails" accordingly

const HEAD = 0;

let toss = Math.floor((Math.random() * 10) % 2);

if (toss == HEAD)
    console.log("Heads");
else
    console.log("Tails");