//https://www.codewars.com/kata/558f9f51e85b46e9fa000025/

function differenceOfSquares(n){
    let sumOfSq = 0;
    let sqOfSum = 0;
    let diff;
    for (let i = 1; i <= n; i++) {
        sqOfSum += i;
        sumOfSq += i ** 2;
    }
    sqOfSum = sqOfSum ** 2;
    diff = sqOfSum - sumOfSq;
    return diff;
}