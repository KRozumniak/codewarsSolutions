//https://www.codewars.com/kata/57241e0f440cd279b5000829/

function sumMul(n,m){
    let sum = 0;
    if (n <= 0 || m <= 0){
        return 'INVALID';
    } else if (n > 0 && m > 0){
        for(let i = 0; i < m; i+=n){
            sum +=i;
        }
    }
    return sum;
}