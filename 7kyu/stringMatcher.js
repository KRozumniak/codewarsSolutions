// https://www.codewars.com/kata/565ce4ab24ef4aee6a000074/

function isMatching(string, str1, str2) {
  let string1 = string.toLowerCase().split('').sort().join('').trim();
  let string2 = str1 + str2;
  string2 = string2.toLowerCase().split('').sort().join('').trim();
  return string1 === string2;
}