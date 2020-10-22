// https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7/

function squaresNeeded(grains){
    let countSqr = 0;
    let grainsInSqr = 1;
    let sumGrains = 0;
    while (sumGrains < grains) {
        sumGrains += grainsInSqr;
        grainsInSqr *= 2;
        countSqr++;
    }
    return countSqr;
}