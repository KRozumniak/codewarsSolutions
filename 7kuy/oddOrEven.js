//https://www.codewars.com/kata/5949481f86420f59480000e7/

function oddOrEven(array) {
    let sum = 0;
    for (let el of array){
        sum += el;
    }
    return sum % 2 ? 'odd' : 'even';
}