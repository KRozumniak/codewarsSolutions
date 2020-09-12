//https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/

function arrayMadness(a, b) {
    let sumOfSquares = a.reduce((acc, cur) => acc + cur ** 2, 0);
    let sumOfCubes = b.reduce((acc, cur) => acc + cur ** 3, 0);
    return sumOfSquares > sumOfCubes;
}