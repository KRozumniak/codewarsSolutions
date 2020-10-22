//https://www.codewars.com/kata/5592e3bd57b64d00f3000047/

function findNb(m) {
    let a = 1;
    let sum = 0;
    let count = 0;
    while (sum < m) {
        sum += a ** 3;
        a++;
        count++;
    }
    return (m === sum) ? count : -1;
}