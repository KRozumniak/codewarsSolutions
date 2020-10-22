//https://www.codewars.com/kata/58cb43f4256836ed95000f97/

function findDifference(a, b) {
    return Math.abs(getVol(a) - getVol(b));
}

const getVol = arr => {
    let vol = 1;
    for (let el of arr){
        vol *= el;
    }
    return vol;
}