// https://www.codewars.com/kata/559011063089b0d5500001aa/

function CalculateString( n,  nums) {
  let ones =  n - nums.replace(/0/g,'').length;
  let zeros =  n - nums.replace(/1/g,'').length;
  let m = Math.min(ones, zeros);
  return n - 2 * m;
}