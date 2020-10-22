//https://www.codewars.com/kata/5631213916d70a0979000066/

const pattern = n => {
    let output = '1';
    for (let i = 2; i <= n; i++) {
        output += "\n" + 1 + Array(i).join("*") + i;
    }
    return output;
}