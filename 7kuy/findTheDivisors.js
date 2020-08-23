//https://www.codewars.com/kata/544aed4c4a30184e960010f4/

function divisors(int) {
    const arr = [];
    for (let i = 2; i < int; i++) {
        if (int % i === 0) arr.push(i);
    }
    if (arr.length === 0) return `${int} is prime`;
    return arr;
};