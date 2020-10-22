//https://www.codewars.com/kata/563cf89eb4747c5fb100001b/

function removeSmallest(numbers) {
    const arr = [];
    let index = numbers.indexOf(Math.min(...numbers));
    for (let i = 0; i < numbers.length; i++){
        if (i === index) continue;
        arr.push(numbers[i]);
    }
    return arr;
}

