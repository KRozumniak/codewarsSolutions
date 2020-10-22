//https://www.codewars.com/kata/580777ee2e14accd9f000165/

function skiponacci(n) {
    if (n === 1) return '1'
    let arr = [1, 1];
    for (let i = 0; i < n - 2; i++) {
        arr.push(arr[i] + arr[i + 1]);
    }
    return arr.map((el, i) => (i + 1) % 2 === 0 ? 'skip' : el).join(' ');
}