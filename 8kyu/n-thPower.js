//https://www.codewars.com/kata/57d814e4950d8489720008db/

function index(array, n){
    let res = Math.pow(array[n], n);
    if (res === 0) return res;
    return (res) ? res : -1;
}