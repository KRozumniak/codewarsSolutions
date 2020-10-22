//https://www.codewars.com/kata/grasshopper-array-mean

let findAverage = function (nums) {
    let avg = nums.reduce((acc, curr) => acc + curr);
    return avg / nums.length;
}