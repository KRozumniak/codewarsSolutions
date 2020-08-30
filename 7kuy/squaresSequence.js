//https://www.codewars.com/kata/5546180ca783b6d2d5000062/

function squares(x, n) {
    const arr = [x];
    if (n <= 0) return [];
    for (let i = 1; i < n; i++){
        arr[i] = Math.pow(arr[i - 1], 2);
    }
    return arr;
}

