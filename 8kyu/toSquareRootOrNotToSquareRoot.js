//https://www.codewars.com/kata/57f6ad55cca6e045d2000627/

function squareOrSquareRoot(array) {
    const newArr = [];
    for (let i = 0; i < array.length; i++){
        newArr[i] = Number.isInteger(Math.sqrt(array[i])) ? Math.sqrt(array[i])
            : Math.pow(array[i], 2);
    }
    return newArr;
}