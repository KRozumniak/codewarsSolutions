//https://www.codewars.com/kata/5810085c533d69f4980001cf/

function calculator(a,b,sign){
    if (typeof a === 'number' && typeof b === 'number') {
        switch(sign) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return 'unknown value';
        }
    } else {
        return 'unknown value';
    }
}