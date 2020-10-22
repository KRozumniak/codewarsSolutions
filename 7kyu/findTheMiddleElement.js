//https://www.codewars.com/kata/545a4c5a61aa4c6916000755/

let gimme = function (inputArray) {
    let max = Math.max(...inputArray);
    let min = Math.min(...inputArray);
    let res = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > min && inputArray[i] < max) res = i;
    }
    return res;
};

