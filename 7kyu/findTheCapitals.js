//https://www.codewars.com/kata/539ee3b6757843632d00026b/

const capitals = word => {
    let wordInUpperCase = word.toUpperCase();
    const arr = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === wordInUpperCase[i]) arr.push(i);
    }
    return arr;
};

