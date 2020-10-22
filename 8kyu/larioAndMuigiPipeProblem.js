//https://www.codewars.com/kata/56b29582461215098d00000f/

function pipeFix(numbers){
    let arr = [];
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    for (let i = min; i <= max; i++){
        arr.push(i);
    }
    return arr;
}