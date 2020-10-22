//https://www.codewars.com/kata/57256064856584bc47000611/

function howManySmaller(arr,n){
    let decimal = arr.map(el => +el.toFixed(2));
    let count = 0;
    for (let el of decimal) {
        if (el < n) count++;
    }
    return count;
}