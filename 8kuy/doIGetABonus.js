//https://www.codewars.com/kata/56f6ad906b88de513f000d96/

function bonusTime(salary, bonus) {
    let total = bonus ? salary * 10 : salary;
    return `\u00A3${total}`;
}