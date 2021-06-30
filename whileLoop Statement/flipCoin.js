// Flip Coin problem till either Heads or Tails wins 11 times

    const HEAD = 0;
    let headCount = 0;
    let tailCount = 0;

    while (headCount != 11 && tailCount != 11) {
        let toss = Math.floor(Math.random() * 10) % 2;
        if (toss == HEAD)
            headCount++;
        else
            tailCount++;
    }
    
    console.log("Head Count " + headCount);
    console.log("Tail Count " + tailCount);