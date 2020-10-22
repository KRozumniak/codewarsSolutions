//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/

const rps = (p1, p2) => {
    if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
    else if (p1 === 'scissors' && p2 === 'rock') return 'Player 2 won!';
    else if (p1 === 'paper' && p2 === 'scissors') return 'Player 2 won!';
    else if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
    else if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
    else if (p1 === 'rock' && p2 === 'paper') return 'Player 2 won!';
    else return 'Draw!';
};

//https://www.codewars.com/kata/568dcc3c7f12767a62000038/
//Set Alarm
function setAlarm(employed, vacation){
    if (employed && vacation) return false;
    else if (employed) return true;
    else return false;
}

//https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/
// Can we divide it?
function isDivideBy(number, a, b) {
    if (number % a === 0 && number % b === 0) return true;
    else return false;
}


//https://www.codewars.com/kata/5ad0d8356165e63c140014d4/
// Student's Final Grade
function finalGrade (e, p) {
        if (e > 90 || p > 10) return 100;
        else if (e > 75 && p >= 5) return 90;
        else if (e > 50 && p >= 2) return 75;
        else return 0;
}


//https://www.codewars.com/kata/53af2b8861023f1d88000832/
function areYouPlayingBanjo(name) {
    if (name[0] === 'r' || name[0] === 'R') return `${name} plays banjo`;
    else return `${name} does not play banjo`;
}