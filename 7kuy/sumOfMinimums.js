//https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/

function sumOfMinimums(arr) {
    let sum = 0;
    for (let el of arr) {
        sum += Math.min(...el);
    }
    return sum;
}