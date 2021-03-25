// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/

function validatePIN (pin) {
  if (pin.length > 6 || pin.length < 4) return false;
  let dig1 = pin.replace(/\d{4}/g, '');
  let dig2 = pin.replace(/\d{6}/g, '');
  return dig1.length === 0 || dig2.length === 0;
}