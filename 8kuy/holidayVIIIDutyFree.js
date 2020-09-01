//https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/

function dutyFree(normPrice, discount, hol){
    let res = Math.floor(hol / (normPrice * (discount / 100)));
    return res;
}