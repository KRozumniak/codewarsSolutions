//https://www.codewars.com/kata/58c9322bedb4235468000019/

function isVeryEvenNumber(n) {
    let sum = (n - 1) % 9 + 1;
    return sum % 2 === 0 ? true : false;
}