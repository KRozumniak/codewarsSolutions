//https://www.codewars.com/kata/53dc54212259ed3d4f00071c/

function sum (numbers) {
    "use strict";
    let s = 0;
    for (let i = 0; i < numbers.length; i++){
        s += numbers[i];
    }
    return s;
};