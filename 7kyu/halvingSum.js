//https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/

function halvingSum(n) {
    let res = 0;
    while (n > 0) {
        res += Math.trunc(n);
        n = n / 2;
    }
    return res;
}