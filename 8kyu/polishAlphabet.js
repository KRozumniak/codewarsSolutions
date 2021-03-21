// https://www.codewars.com/kata/57ab2d6072292dbf7c000039/

function correctPolishLetters (string) {
  const pol = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z'
  }
  return string.replace(/[ąćęłńóśźż]/gi, char => pol[char] || char);
}