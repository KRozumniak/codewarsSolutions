//https://www.codewars.com/kata/57a049e253ba33ac5e000212/

function factorial(n){
    let fact = 1;
    for (let i = n; i > 0; i--) {
        fact *= i;
    }
    return fact;
}