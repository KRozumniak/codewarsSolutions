  //https://www.codewars.com/kata/54e6533c92449cc251001667/

const uniqueInOrder = iterable => {
    const arr = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] === iterable[i + 1]) continue;
        arr.push(iterable[i])
    }
    return arr;
}