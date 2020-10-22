// https://www.codewars.com/kata/5635e7cb49adc7b54500001c/

function solve(n) {
    if (n % 10 !== 0) return -1;
    const arr = [500, 200, 100, 50, 20, 10];
    let count = 0;
    for (let el of arr) {
        while (n >= el) {
            n -= el;
            count++;
        }
    }
    return count;
}