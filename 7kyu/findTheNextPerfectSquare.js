//https://www.codewars.com/kata/56269eb78ad2e4ced1000013/

function findNextSquare(sq) {
    let nextSq = Math.sqrt(sq);
    let res = (nextSq + 1) * (nextSq + 1);
    return (res % 1 === 0) ? res : -1;
}